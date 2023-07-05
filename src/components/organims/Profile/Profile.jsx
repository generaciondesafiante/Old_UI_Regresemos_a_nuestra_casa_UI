import { useAuthStore } from '../../../hooks';
import './Profile.css';

export const Profile = () => {
  const { user } = useAuthStore();

  const capitalized = () => {
    if (user && user.name) {
      return user.name.charAt(0).toUpperCase() + user.name.slice(1);
    }
    return '';
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
          <h3 className="profile-info_title"> Nombre </h3>
          <p className="profile-user_personalInfo"> {capitalized}</p>
          <h3 className="profile-info_title"> Correo electrónico </h3>
          <p className="profile-user_personalInfo"></p>
          <button className="profile-user_changeInfo_btn">Editar perfil</button>
        </div>
      </div>
    </div>
  );
};
