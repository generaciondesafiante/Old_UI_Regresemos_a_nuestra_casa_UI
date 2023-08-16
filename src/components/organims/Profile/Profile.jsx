import { useState, useEffect } from 'react';
import { useAuthStore, useForm } from '../../../hooks';
import Swal from 'sweetalert2';
import './Profile.css';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import { ModalEditPhotoProfile } from '../../molecules/Modals/ModalEditPhotoProfile/ModalEditPhotoProfile';

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
  const { editInformationUser } = useAuthStore();

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  const [isEditing, setIsEditing] = useState(false);

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

  // Function to handle the change in the editing fields
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserData((prevUserData) => ({
      ...prevUserData,
      [name]: value,
    }));
  };
  const {
    name,
    email,
    password,
    lastname,
    phone,
    country,
    city,
    onInputChange: onRegisterInputChange,
  } = useForm(userData);
  const showConfirmationModal = () => {
    Swal.fire({
      title: '¿Estás seguro?',
      text: '¿Deseas guardar los cambios en tu perfil?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: 'var(--turquoise)',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, guardar cambios',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        // If the user clicks "Yes, save changes", then save the changes
        handleSaveChanges();
      } else {
        // If the user clicks "Cancel", exits edit mode without saving changes
        setIsEditing(false);
      }
    });
  };
  // Function to save changes when clicking the "Save Changes" button
  const handleSaveChanges = () => {
    // Here you can perform actions to save the changes to the backend or to local storage (as localStorage)
    onRegisterInputChange;
    editInformationUser({
      name: name,
      email: email,
      password: password,
      lastname: lastname,
      phone: phone,
      country: country,
      city: city,
    })
      .then(() => {
        // Update information in localStorage after saving changes
        localStorage.setItem('name', name);
        localStorage.setItem('lastname', lastname);
        localStorage.setItem('email', email);
        localStorage.setItem('country', country);
        localStorage.setItem('city', city);
        localStorage.setItem('phone', phone);

        setIsEditing(false);
        Swal.fire(
          'Cambios guardados',
          'Los cambios en tu perfil han sido guardados exitosamente.',
          'success'
        );
      })
      .catch((error) => {
        console.log('Error al guardar los cambios:', error);
        Swal.fire(
          'Error',
          'Ocurrió un error al guardar los cambios. Por favor, intenta nuevamente.',
          'error'
        );
      });
  };

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (file) => {
    if (file) {
      setSelectedImage(file);
    }
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedImage(null); // Limpiar la imagen seleccionada al cerrar el modal
  };

  return (
    <div className="profile-container">
      <h2 className="profile-title">Información personal</h2>
      <div className="profile-content">
        <div className="profile-container_img" onClick={() => setIsModalOpen(!isModalOpen)}>
          <img
            src={userData.image}
            alt="IMG-20230131-WA0037"
            border="0"
            className="profile-user_img"
          />
          <div className='profile-container_addPhoto' onClick={() => setIsModalOpen(!isModalOpen)}>
            <AddAPhotoIcon className='profile-add-photo_icon' />
          </div>
          {/* -------------MODAL EDIT PHOTO PROFILE -------------*/}
          <div>
            <ModalEditPhotoProfile
              openModalProfile={isModalOpen}
              closeModalProfile={handleModalClose}
              title="Agrega foto de perfil"
            >
              <div className='modalEditProfile-content'>
                <h1>Subir Imagen</h1>
                <div className="modalEditProfile-circleWrapper">
                  {selectedImage ? (
                    <img
                      src={URL.createObjectURL(selectedImage)}
                      alt="Profile"
                      className="modalEditProfile-circleImage"
                    />
                  ) : (
                    <span className="modalEditProfile-circleImage">Imagen previa aquí</span>
                  )}
                </div>
                <input
                  type="file"
                  accept="image/*"
                  className='modalEditProfile-inputUploadImage'
                  onChange={(e) => handleImageChange(e.target.files[0])}
                />
                <button
                  className='modalEditProfile-buttonAccept'
                  onClick={() => setIsModalOpen(false)}
                >
                  Aceptar
                </button>
              </div>
            </ModalEditPhotoProfile>
          </div>
        </div>

        {/* --------------------------------------------------------*/}

        <div className="profile-container_info">
          {isEditing ? (
            <div className="edit-input-profile">
              <h3 className="profile-info_title">Nombres</h3>
              <input
                type="text"
                name="name"
                value={userData.name}
                onChange={handleInputChange}
                className="form-edit-profile"
              />
              <h3 className="profile-info_title">Apellidos</h3>
              <input
                type="text"
                name="lastname"
                value={userData.lastname}
                onChange={handleInputChange}
                className="form-edit-profile"
              />
              <h3 className="profile-info_title">Correo electrónico</h3>
              <input
                type="email"
                name="email"
                value={userData.email}
                onChange={handleInputChange}
                className="form-edit-profile"
              />
              <h3 className="profile-info_title">País</h3>
              <input
                type="country"
                name="country"
                value={userData.country}
                onChange={handleInputChange}
                className="form-edit-profile"
              />
              <h3 className="profile-info_title">Ciudad</h3>
              <input
                type="city"
                name="city"
                value={userData.city}
                onChange={handleInputChange}
                className="form-edit-profile"
              />
              <h3 className="profile-info_title">Teléfono</h3>
              <input
                type="phone"
                name="phone"
                value={userData.phone}
                onChange={handleInputChange}
                className="form-edit-profile"
              />

              <button
                onClick={
                  isEditing ? showConfirmationModal : () => setIsEditing(true)
                }
                className="profile-user_changeInfo_btn"
              >
                Guardar cambios
              </button>
              <button
                onClick={() => setIsEditing(false)}
                className="profile-user_changeInfo_btn goOut-profile"
              >
                Cancelar
              </button>
            </div>
          ) : (
            <>
              <div className="viewDesktop_profile">
                <h3 className="profile-info_title">Nombres</h3>
                <p className="profile-user_personalInfo">{userData.name}</p>
              </div>
              <div className="viewDesktop_profile">
                <h3 className="profile-info_title">Apellidos</h3>
                <p className="profile-user_personalInfo">{userData.lastname}</p>
              </div>
              <div className="viewDesktop_profile">
                <h3 className="profile-info_title">Correo electrónico</h3>
                <p className="profile-user_personalInfo">{userData.email}</p>
              </div>
              <div className="viewDesktop_profile">
                <h3 className="profile-info_title">País</h3>
                <p className="profile-user_personalInfo">{userData.country}</p>
              </div>
              <div className="viewDesktop_profile">
                <h3 className="profile-info_title">Ciudad</h3>
                <p className="profile-user_personalInfo">{userData.city}</p>
              </div>
              <div
                className="phone-information"
                style={{ display: userData.phone !== null ? 'block' : 'none' }}
              >
                <h3 className="profile-info_title">Teléfono</h3>
                <p
                  className="profile-user_personalInfo"
                  style={{
                    display: userData.phone !== null ? 'block' : 'none',
                  }}
                >
                  {userData.phone}
                </p>
              </div>

              <button
                onClick={() => setIsEditing(true)}
                className="profile-user_changeInfo_btn"
              >
                Editar perfil
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

// export default editImage;