// import { useEffect } from 'react';

// import { useNavigate } from 'react-router-dom';
// import Swal from 'sweetalert2';

import { Header } from '../../components/organims/Header/Header';
import { useAuthStore, useForm } from '../../hooks';
// import { PublicRoutes } from '../../models/routes';
import './ForgetPasswordPage.css';

// import { useEffect } from 'react';
// import { onResetPassword } from '../../store/auth/authSlice';

const emailResetPassword = {
  forgetPasswordEmail: '',
};

export const ForgetPasswordPage = () => {
  const { forgotPassword, user } = useAuthStore();

  // const navigate = useNavigate();
  console.log(user);

  const { forgetPasswordEmail, onInputChange: onResetPasswordChange } =
    useForm(emailResetPassword);
  const resetPasswordSubmit = (event) => {
    event.preventDefault();
    forgotPassword({
      email: forgetPasswordEmail,
    });
  };
  if (!user) {
    console.log('pailas mani');
  } else {
    console.log('arre rico');
  }

  // useEffect(() => {
  //   if (user) {
  //     console.log('olleee');
  //   } else {
  //     Swal.fire('El usuario no esta registrado', errorMessage, 'warning');
  //     console.log('eroror');
  //   }
  // }, [user]);
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
          Escribe el correo electrónico con el cual te registraste
        </p>

        <input
          className="form-forget_input"
          type="email"
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
