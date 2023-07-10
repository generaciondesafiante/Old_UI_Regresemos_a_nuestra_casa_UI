import { useEffect } from 'react';

import { Link, Navigate } from 'react-router-dom';
import Swal from 'sweetalert2';

import { Header } from '../../components/organims/Header/Header';
import { useAuthStore } from '../../hooks';
import { useForm } from '../../hooks/useForm';
import '../AuthStyle/authStyle.css';
import { PrivateRoutes } from '../../models/routes';

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
    Navigate(`/${PrivateRoutes.PRIVATE}`, { replace: true });
  };

  useEffect(() => {
    if (errorMessage !== undefined)
      Swal.fire('Usuario o contraseña incorrecta', errorMessage, 'warning');
  }, [errorMessage]);

  return (
    <>
      <Header />
      <form action="" className="form" onSubmit={loginSubmit}>
        <h2 className="form-title">¡Bienvenido/a al Recorrido de la fé!</h2>

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
    </>
  );
};
