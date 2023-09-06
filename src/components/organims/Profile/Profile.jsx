import { useState, useEffect } from 'react';
import { useAuthStore, useForm } from '../../../hooks';
import Swal from 'sweetalert2';
import './Profile.css';
import { useNavigate } from 'react-router-dom';

import { PrivateRoutes } from '../../../models/routes';

export const Profile = () => {
  const { editInformationUser } = useAuthStore();
  const navigate = useNavigate();

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
  });

  useEffect(() => {
    setUserData({
      name: capitalizeFirstLetter(localStorage.getItem('name') || ''),
      lastname: capitalizeFirstLetter(localStorage.getItem('lastname') || ''),
      email: localStorage.getItem('email') || '',
      country: capitalizeFirstLetter(localStorage.getItem('country') || ''),
      city: capitalizeFirstLetter(localStorage.getItem('city') || ''),
      phone: localStorage.getItem('phone') || '',
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

  const navigateChangePassword = () => {
    navigate(`${PrivateRoutes.CHANGEPASSWORDPROFILE}`);
  };

  return (
    <div className="profile-container">
      <h2 className="profile-title">Información personal</h2>
      <div className="profile-content">
        <div className="profile-container_img">
          <img
            src="http://somebooks.es/wp-content/uploads/2018/12/Poner-una-imagen-a-la-cuenta-de-usuario-en-Windows-10-000.png "
            alt="IMG-20230131-WA0037"
            border="0"
            className="profile-user_img"
          />
        </div>
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
