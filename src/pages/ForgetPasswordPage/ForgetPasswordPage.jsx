import { useEffect } from 'react';

// import { Navigate } from 'react-router-dom';
import Swal from 'sweetalert2';

import { Header } from '../../components/organims/Header/Header';
import { useAuthStore, useForm } from '../../hooks';
// import { PublicRoutes } from '../../models/routes';
import './ForgetPasswordPage.css';

const emailResetPassword = {
  forgetPasswordEmail: '',
};
export const ForgetPasswordPage = () => {
  const { forgotPassword, errorMessage } = useAuthStore();

  const { forgetPasswordEmail, onInputChange: onResetPasswordChange } =
    useForm(emailResetPassword);

  const resetPasswordSubmit = (event) => {
    event.preventDefault();
    if (!forgetPasswordEmail) {
      Swal.fire('Error en correo', 'El usuario no esta registrado', 'error');
      return;
    }
    forgotPassword({
      email: forgetPasswordEmail,
    });

    // Navigate(`/${PublicRoutes.MSGFORTGET}`, { replace: true });
  };
  useEffect(() => {
    if (errorMessage !== undefined)
      Swal.fire('El usuario no esta registrado', errorMessage, 'warning');
  }, [errorMessage]);
  return (
    <>
      <Header />
      <form
        action=""
        className="form-forget_container"
        onSubmit={resetPasswordSubmit}
      >
        <h2 className="form-forget_title center-content">
          He olvidado mi contraseña
        </h2>
        <p className="form-forget_paragraph center-content">
          Escribe el correo electrónico con el cual te registraste{' '}
        </p>

        <input
          className="form-forget_input"
          type="text"
          required
          name="forgetPasswordEmail"
          value={forgetPasswordEmail}
          placeholder="generaciondesafiante@gmail.com"
          onChange={onResetPasswordChange}
        />
        <button className="form-forget_button" type="submit">
          Recuperar contraseña
        </button>
      </form>
    </>
  );
};
