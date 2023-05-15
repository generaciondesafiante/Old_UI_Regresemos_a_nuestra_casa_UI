import { useAuthStore } from '../../../hooks';
import './profile.css';

export const Profile = () => {
  const { user } = useAuthStore();
  const userName = user.name;

  const capitalized = () => {
    return userName.charAt(0).toUpperCase() + userName.slice(1);
  };
  return (
    <>
      <main className="container-profile">
        <h2 className="profile-title_information">Información personal</h2>
        <div className="profile-content">
          <div className="profile-container_information">
            <section className="profile-content-image">
              <img
                src="https://i.ibb.co/Qnyx1kP/IMG-20230131-WA0037.jpg"
                alt="IMG-20230131-WA0037"
                border="0"
                className="img-profile"
              />
            </section>
            <section className="profile-information">
              <h3 className="prifile-title"> Nombre </h3>
              <p className="information-user"> {capitalized()}</p>
              <h3 className="prifile-title"> correo electrónico </h3>
              <p className="information-user">{user.email}</p>
              <section className="profile-change_information">
                <button className="change-information_buttom">
                  Configuración
                </button>
              </section>
            </section>
          </div>
        </div>
      </main>
    </>
  );
};
