import { Header } from '../../components/organims/Header/Header';
import './ResetPasswrodPage.css';
export const ResetPasswrodPage = () => {
  return (
    <>
      <Header />
      <form className="form-forget_container">
        <h2 className="form-forget_title center-content">
          Asignar nueva contraseña
        </h2>
        <p className="form-forget_paragraph center-content">
          Al terminar, te enviaremos a iniciar sesión de nuevo con tu nueva
          contraseña
        </p>
        <div className="form-login-container_inLa">
          <input
            id="resetPassword"
            name="resetPassword"
            // value={loginEmail}
            // onChange={onLoginInputChange}
            type="password"
            required
            placeholder=" "
            className="form-login-input"
          />
          <label htmlFor="password" className="form-login-label">
            Contraseña
          </label>
        </div>{' '}
        <div className="form-login-container_inLa">
          <input
            id="RepeactResetPassword"
            name="RepeactResetPassword"
            // value={loginEmail}
            // onChange={onLoginInputChange}
            type="password"
            required
            placeholder=" "
            className="form-login-input"
          />
          <label htmlFor="password" className="form-login-label">
            Repetir contraseña
          </label>
        </div>
        <button className="form-forget_button" type="submit">
          Hacer el cambio de contraseña
        </button>
      </form>
    </>
  );
};
