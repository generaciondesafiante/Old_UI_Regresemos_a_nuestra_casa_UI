import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

import { useAuthStore } from '../../hooks';
import { useForm } from '../../hooks/useForm';
import '../AuthStyle/authStyle.css';
import { Header } from '../../components/organims/Header/Header';

const loginFormFields = {
  loginEmail: '',

  loginPassword: '',
};

export const LoginPageNavbar = () => {
  const { startLogin, errorMessage } = useAuthStore();

  const {
    loginEmail,
    loginPassword,
    onInputChange: onLoginInputChange,
  } = useForm(loginFormFields);

  const loginSubmit = (event) => {
    event.preventDefault();
    startLogin({ email: loginEmail, password: loginPassword });
    // navigate(`/${PrivateRoutes.PRIVATE}`, {replace: true})
  };

  useEffect(() => {
    if (errorMessage !== undefined)
      Swal.fire('Usuario o contraseña incorrecta', errorMessage, 'warning');
  }, [errorMessage]);

  return (
    <>
      <Header />
      <div className="form-container">
        <form action="" className="form-action" onSubmit={loginSubmit}>
          <h2 className="form-title">
            <span>¡Bienvenido/a al</span> <span>Recorrido de la fé!</span>{' '}
          </h2>

          <div className="form-container_inLa">
            <input
              id="email"
              name="loginEmail"
              value={loginEmail}
              onChange={onLoginInputChange}
              type="text"
              required
              placeholder=" "
              className="form-input"
            />
            <label htmlFor="email" className="form-label">
              Correo Electrónico
            </label>
          </div>

          <div className="form-container_inLa">
            <input
              id="password"
              name="loginPassword"
              value={loginPassword}
              onChange={onLoginInputChange}
              type="password"
              required
              placeholder=" "
              className="form-input"
            />

            <label htmlFor="password" className="form-label">
              Contraseña
            </label>
          </div>
          <Link className="form-forgot_login">Olvidé mi contraseña</Link>

          <button className="form-btn" type="submit">
            Ingresar
          </button>
        </form>
      </div>
    </>
  );
};
