import { useState, useEffect } from 'react';
import './Profile.css';

export const Profile = () => {
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

  // Función para manejar el cambio en los campos de edición
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserData((prevUserData) => ({
      ...prevUserData,
      [name]: value,
    }));
  };

  // Función para guardar los cambios al hacer clic en el botón "Guardar cambios"
  const handleSaveChanges = () => {
    // Aquí puedes realizar acciones para guardar los cambios en el backend o en el almacenamiento local (como localStorage)
    setIsEditing(false);
  };

  return (
    <div className="profile-container">
      <h2 className="profile-title">Información personal</h2>
      <div className="profile-content">
        <div className="profile-container_img">
          <img
            src="https://i.ibb.co/Qnyx1kP/IMG-20230131-WA0037.jpg"
            alt="IMG-20230131-WA0037"
            border="0"
            className="profile-user_img"
          />
        </div>
        <div className="profile-container_info">
          {isEditing ? (
            <>
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
              {/* Resto de campos también como inputs */}
              <button
                onClick={handleSaveChanges}
                className="profile-user_changeInfo_btn"
              >
                Guardar cambios
              </button>
            </>
          ) : (
            <>
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
              {/* Resto de campos también como párrafos */}
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
