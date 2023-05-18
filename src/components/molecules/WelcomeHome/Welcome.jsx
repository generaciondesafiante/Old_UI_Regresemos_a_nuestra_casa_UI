import { useAuthStore } from '../../../hooks/useAuthStore';
import './welcome.css';

export const Welcome = () => {
  const { user } = useAuthStore();
  const userName = user.name;

  const getFirstName = () => {
    const names = userName.split(' '); // Dividir el nombre completo en partes
    return names[0]; // Obtener el primer nombre
  };

  const capitalized = () => {
    const firstName = getFirstName();
    return firstName.charAt(0).toUpperCase() + firstName.slice(1);
  };

  return (
    <>
      <div className="dashboard-container_welcome">
        <div className="dashboard-content_welcome">
          <div className="dashboard-textContainer_welcome">
            <h2 className="dashboard-welcome_title">
              Bienvenido/a, {capitalized()}
            </h2>
            <p className="dashboard-welcome_paragraph">
              ¡Esperamos que tengas un bendecido día!
            </p>
          </div>
          <img
            src="https://i.imgur.com/nfQ90IZ.png"
            alt=""
            className="dashboard-welcome_img"
          />
        </div>
        <div className="dashboard-content_continueCourse">
          <div className="dashboard-continue_course">
            <h2 className="continue-course_subtitle">¡Continúa tu curso!</h2>
            <img
              className="continue-course_video"
              src="https://static.wixstatic.com/media/d166cc_4cc837baf9254000a0f3963193c6b07a~mv2.jpg/v1/fill/w_368,h_195,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Romanos%2011111.jpg"
              alt=""
            />
          </div>
          <div className="dashboard-continue_course">
            <h2 className="continue-course_subtitle">¡Recursos para ti!</h2>
            <div className="dashboard-subcontent_studyMaterial">
              <img
                className="dashboard-studyMaterial"
                src="https://static.wixstatic.com/media/d166cc_4cc837baf9254000a0f3963193c6b07a~mv2.jpg/v1/fill/w_368,h_195,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Romanos%2011111.jpg"
                alt=""
              />
              <img
                className="dashboard-studyMaterial"
                src="https://static.wixstatic.com/media/d166cc_4cc837baf9254000a0f3963193c6b07a~mv2.jpg/v1/fill/w_368,h_195,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Romanos%2011111.jpg"
                alt=""
              />
              <img
                className="dashboard-studyMaterial"
                src="https://static.wixstatic.com/media/d166cc_4cc837baf9254000a0f3963193c6b07a~mv2.jpg/v1/fill/w_368,h_195,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Romanos%2011111.jpg"
                alt=""
              />
              <img
                className="dashboard-studyMaterial"
                src="https://static.wixstatic.com/media/d166cc_4cc837baf9254000a0f3963193c6b07a~mv2.jpg/v1/fill/w_368,h_195,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Romanos%2011111.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
