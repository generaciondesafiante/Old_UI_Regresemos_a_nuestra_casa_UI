import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import { useAuthStore, useForm } from '../../../hooks';
import { uploadFile } from '../../../hooks/useFirebase';
import { ModalEditPhotoProfile } from '../../molecules/Modals/ModalEditPhotoProfile/ModalEditPhotoProfile';
import { PrivateRoutes } from '../../../models/routes';
import './Profile.css';

export const Profile = () => {
  const { editInformationUser } = useAuthStore();
  const navigate = useNavigate();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
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
  const [selectedImageUrl, setSelectedImageUrl] = useState(() => {
    const storedImage = localStorage.getItem('image');
    return (
      storedImage ||
      userData.image ||
      'http://somebooks.es/wp-content/uploads/2018/12/Poner-una-imagen-a-la-cuenta-de-usuario-en-Windows-10-000.png'
    );
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

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

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
    image,

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
        handleSaveChanges();
      } else {
        setIsEditing(false);
      }
    });
  };

  const handleSaveChanges = async () => {
    const imageToSend = selectedFile ? await uploadFile(selectedFile) : null;

    onRegisterInputChange;
    const userDataToUpdate = {
      name: name,
      email: email,
      password: password,
      lastname: lastname,
      phone: phone,
      country: country,
      city: city,
      image: imageToSend,
    };
    try {
      await editInformationUser(userDataToUpdate);

      localStorage.setItem('name', name);
      localStorage.setItem('lastname', lastname);
      localStorage.setItem('email', email);
      localStorage.setItem('country', country);
      localStorage.setItem('city', city);
      localStorage.setItem('phone', phone);
      localStorage.setItem('image', image);

      if (imageToSend) {
        localStorage.setItem('image', imageToSend);

        await uploadFile(selectedFile);
        setSelectedFile(null);

        // Update the selectedImageUrl with the newly uploaded image URL
        setSelectedImageUrl(URL.createObjectURL(selectedFile));
      }

      setIsEditing(false);

      Swal.fire(
        'Cambios guardados',
        'Los cambios en tu perfil han sido guardados exitosamente.',
        'success'
      );
    } catch (error) {
      console.log('Error al guardar los cambios:', error);
      Swal.fire(
        'Error',
        'Ocurrió un error al guardar los cambios. Por favor, intenta nuevamente.',
        'error'
      );
    }
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      if (file.size > 1024 * 1024) {
        // File size is greater than 1MB
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'El tamaño del archivo supera 1MB. Selecciona un archivo más pequeño.',
        });
        setSelectedFile(null);
      } else {
        setSelectedFile(file);
      }
    }
  };

  const navigateChangePassword = () => {
    navigate(`${PrivateRoutes.CHANGEPASSWORDPROFILE}`);
  };

  return (
    <div className="profile-container">
      <h2 className="profile-title">Información personal</h2>
      <div className="profile-content">
        {/* -------------MODAL EDIT PHOTO PROFILE -------------*/}
        <div
          className="profile-container_img"
          onClick={() => setIsModalOpen(!isModalOpen)}
        >
          <img
            src={selectedImageUrl}
            alt={selectedFile ? 'FOTO DE PERFIL' : ''}
            className="profile-user_img"
          />
          <div
            className="profile-container_addPhoto"
            onClick={() => setIsModalOpen(!isModalOpen)}
          >
            <AddAPhotoIcon className="profile-add-photo_icon" />
          </div>

          <div>
            <ModalEditPhotoProfile
              openModalProfile={isModalOpen}
              closeModalProfile={() => {
                setIsModalOpen(false);
                setSelectedFile(null);
              }}
              title="Agrega foto de perfil"
            >
              <div className="modalEditProfile-content">
                <form>
                  <label>
                    <h1>Subir Imagen</h1>
                    <div className="custom-file-input">
                      <span className="file-input-label">
                        {selectedFile
                          ? `Has seleccionado el archivo: ${selectedFile.name}`
                          : 'Seleccionar archivo'}
                      </span>
                      <input
                        type="file"
                        accept="image/*"
                        className="modalEditProfile-inputUploadImage"
                        onChange={(e) => {
                          handleInputChange(e);
                          setSelectedFile(e.target.files[0]);
                        }}
                        onClick={(e) => e.stopPropagation()}
                      />
                    </div>
                  </label>

                  <button
                    onClick={(e) => {
                      handleSaveChanges(e);
                      handleFileChange(e);
                    }}
                    className="modalEditProfile-buttonAccept"
                  >
                    Guardar cambios
                  </button>
                </form>
              </div>
            </ModalEditPhotoProfile>
          </div>
        </div>
        {/* -------------------- CLOSE MODAL EDIT PHOTO PROFILE------------------------- */}
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
              <buttom
                className="profile-user_changeInfo_btn"
                onClick={() => navigateChangePassword()}
              >
                Cambiar contraseña
              </buttom>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
