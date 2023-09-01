import Swal from 'sweetalert2';
import { Header } from '../../components/organims/Header/Header';
import { useAuthStore, useForm } from '../../hooks';

import './ResetPasswordPage.css';
import { clearErrorMessage } from '../../store/auth/authSlice';
import { useDispatch } from 'react-redux';

const resetFormFields = {
  resetPassword: '',
  resetPassword2: '',
};

export const ResetPasswrodPage = () => {
  const { changePassword } = useAuthStore();
  const dispatch = useDispatch;
  const {
    resetPassword,
    resetPassword2,
    onInputChange: onRegisterInputChange,
  } = useForm(resetFormFields);

  const resetSumbitPassword = (event) => {
    event.preventDefault();
    if (resetPassword !== resetPassword2) {
      Swal.fire('Error de autenticación', 'Las contraseñas no son iguales', 'error');
      return;
    }
    changePassword({
      password: resetPassword,
    })
      .then(() => {
        Swal.fire({
          icon: 'success',
          title: 'Contraseña modificada',
          text: 'Los cambios en tu perfil han sido guardados exitosamente.',
          didClose: () => {
            window.location.href = '/auth/login';
            localStorage.clear();
            dispatch(clearErrorMessage());
          },
        });
      })
      .catch((error) => {
        console.log('Error al guardar los cambios:', error);
        Swal.fire(
          'Error',
          'Ocurrió un error al guardar los cambios. Por favor, intenta nuevamente.',
          'error'
        );
      });
  };
  return (
    <>
      <Header />
      <form
        className="form-forget_container"
        action=""
        onSubmit={resetSumbitPassword}
      >
        <h2 className="form-forget_title center-content">
          Asignar nueva contraseña
        </h2>
        <p className="form-forget_paragraph center-content">
          Al terminar, te enviaremos a iniciar sesión de nuevo con tu nueva
          contraseña
        </p>
        <div className="form-login-container_inLa">
          <input
            id="password"
            name="resetPassword"
            value={resetPassword}
            onChange={onRegisterInputChange}
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
            id="password2"
            name="resetPassword2"
            value={resetPassword2}
            onChange={onRegisterInputChange}
            type="password"
            required
            placeholder=" "
            className="form-login-input"
          />
          <label htmlFor="password2" className="form-login-label">
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
