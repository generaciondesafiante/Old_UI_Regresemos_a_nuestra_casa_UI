import { useState, useEffect } from 'react';
import './Profile.css';
// import { useNavigate, useParams } from 'react-router-dom';
// import { generacionApi } from '../../../api';

// const editImage = (props) => {

//   const navigate = useNavigate();

//   //obtener el id de react
//   const { id } = useParams();

//   // image = state, and funciontion for upload
//   const [ image, saveImage ] = useState({
//     image: ''
//   });

//   // archive = state, saveArchive = setState
//   const [ archive, saveArchive ] = useState('')

//   // cuando el componente carga
//   useEffect(() => {
//     // consultar a la Api para traer el producto a editar
//     const consultAPI = async () => {
//       const imageConsult = await generacionApi.get(`/profile/${id}`);
//       saveImage(imageConsult.data)
//     }
//     consultAPI();
//   }, [])

//   //edita un producto en la base de datos
//   const editImage = async e => {
//     e.preventDefault();
//   }
//     //crear un formdata para los datos
//     const formData = new FormData();
//     formData.append('image', archive)

//     //almacenarlo en la base de datos
//     try {
//       const res = await generacionApi.put(`/profile/${id}`, formData, {
//         headers: {
//           'Content-Type' : 'multipart/form-data'
//         }
//       }); 
//       //redireccionar
//       navigate('/profile', { replace : true });
//     } catch (error) {
//       console.log(error);
//     }



//     //leer los datos del formulario
//     const readImage = e => {
//       saveImage({
//         // obtener una copia del state y agregar el nuevo
//         ...image,
//         [e.target.name]: e. target.value
//       })
//     }

//     //coloca la imagen en el state
//     const readArchive = e => {
//       saveArchive(e.target.files[0]);
//     }

//     //extraer los valores del state
//     const { imagen } = image
// }

export const Profile = () => {
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    lastname: '',
    country: '',
    city: '',
    phone: '',
    image: '',
  });

  useEffect(() => {
    setUserData({
      name: capitalizeFirstLetter(localStorage.getItem('name') || ''),
      lastname: capitalizeFirstLetter(localStorage.getItem('lastname') || ''),
      email: localStorage.getItem('email') || '',
      country: capitalizeFirstLetter(localStorage.getItem('country') || ''),
      city: capitalizeFirstLetter(localStorage.getItem('city') || ''),
      phone: localStorage.getItem('phone') || '',
      image: localStorage.getItem('image') || '',
    });
  }, []);
  return (
    <div className="profile-container">
      <h2 className="profile-title">Información personal</h2>
      <div className="profile-content">
        <div className="profile-container_img">
          
          <img
            src={userData.image}
            alt="IMG-20230131-WA0037"
            border="0"
            className="profile-user_img"
          />
        </div>
        <div className="profile-container_info">
          <h3 className="profile-info_title">Nombres</h3>
          <p className="profile-user_personalInfo">{userData.name}</p>
          <h3 className="profile-info_title">Apellidos</h3>
          <p className="profile-user_personalInfo">{userData.lastname}</p>
          <h3 className="profile-info_title">Correo electrónico</h3>
          <p className="profile-user_personalInfo">{userData.email}</p>
          <h3 className="profile-info_title">País</h3>
          <p className="profile-user_personalInfo">{userData.country}</p>
          <h3 className="profile-info_title">Ciudad</h3>
          <p className="profile-user_personalInfo">{userData.city}</p>
          <h3 className="profile-info_title">Teléfono</h3>
          <p className="profile-user_personalInfo">
            {!userData.phone
              ? userData.phone
              : 'No cuenta con número de teléfono'}
          </p>
          <button className="profile-user_changeInfo_btn">Editar perfil</button>
        </div>
      </div>
    </div>
  );
};

// export default editImage;