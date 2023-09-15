import { useEffect } from 'react';

import { Link, Navigate } from 'react-router-dom';
import Swal from 'sweetalert2';

import { Header } from '../../components/organims/Header/Header';
import { Input } from '../../components/atoms/Input/Input';
import { useAuthStore } from '../../hooks';
import { useForm } from '../../hooks/useForm';
import { PrivateRoutes, PublicRoutes } from '../../models/routes';
import '../AuthStyle/authStyleLogin.css';

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
      <form action="" className="form-login" onSubmit={loginSubmit}>
        <h2 className="form-login-title">
          ¡Bienvenido/a al Recorrido de la fé!
        </h2>
        <Input
          id={'emailLogin'}
          htmlForm={'emailLogin'}
          name="loginEmail"
          value={loginEmail}
          onChange={onLoginInputChange}
          type="email"
          placeholder=" "
          label="Correo Electrónico"
          isRequire={true}
        />
        <Input
          id={'passwordLogin'}
          htmlForm={'passwordLogin'}
          name="loginPassword"
          value={loginPassword}
          onChange={onLoginInputChange}
          type="password"
          placeholder=" "
          label="Contraseña"
          isRequire={true}
        />
        <Link
          className="form-login-forgot_login"
          to={PublicRoutes.FORGETPASSWORD}
        >
          Olvidé mi contraseña
        </Link>

        <button className="form-login-btn" type="submit">
          Ingresar
        </button>
      </form>
    </>
  );
};
