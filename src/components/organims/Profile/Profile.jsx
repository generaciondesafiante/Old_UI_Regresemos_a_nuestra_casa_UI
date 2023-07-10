// import { useSelector } from 'react-redux';
import './Profile.css';
import { useAuthStore } from '../../../hooks';

export const Profile = () => {
  const { user } = useAuthStore();

  console.log(user);
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
          <p className="profile-user_personalInfo">{user.name}</p>
          <h3 className="profile-info_title">Correo electrónico</h3>
          <p className="profile-user_personalInfo">{user.email}</p>{' '}
          <h3 className="profile-info_title">Apellidos</h3>
          <p className="profile-user_personalInfo">{user.lastname}</p>
          <h3 className="profile-info_title">Pais</h3>
          <p className="profile-user_personalInfo">{user.country}</p>
          <h3 className="profile-info_title">Ciudad</h3>
          <p className="profile-user_personalInfo">{user.city}</p>
          <h3 className="profile-info_title">Telefono</h3>
          <p className="profile-user_personalInfo">{user.phone}</p>
          <button className="profile-user_changeInfo_btn">Editar perfil</button>
        </div>
      </div>
    </div>
  );
};
