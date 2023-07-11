import { useState, useEffect } from 'react';
import './Profile.css';

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
          <h3 className="profile-info_title">Nombres</h3>
          <p className="profile-user_personalInfo">{userData.name}</p>
          <h3 className="profile-info_title">Apellidos</h3>
          <p className="profile-user_personalInfo">{userData.lastname}</p>
          <h3 className="profile-info_title">Correo electrónico</h3>
          <p className="profile-user_personalInfo">{userData.email}</p>
          <h3 className="profile-info_title">Pais</h3>
          <p className="profile-user_personalInfo">{userData.country}</p>
          <h3 className="profile-info_title">Ciudad</h3>
          <p className="profile-user_personalInfo">{userData.city}</p>
          <h3 className="profile-info_title">Telefono</h3>
          <p className="profile-user_personalInfo">
            {userData.phone || 'No cuenta con número de teléfono'}
          </p>
          <button className="profile-user_changeInfo_btn">Editar perfil</button>
        </div>
      </div>
    </div>
  );
};
