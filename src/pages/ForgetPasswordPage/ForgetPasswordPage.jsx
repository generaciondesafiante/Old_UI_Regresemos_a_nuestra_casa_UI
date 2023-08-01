import { Header } from '../../components/organims/Header/Header';
import { useAuthStore, useForm } from '../../hooks';
import Swal from 'sweetalert2';
import './ForgetPasswordPage.css';

const checkEmailUser = {
  emailUser: '',
};
export const ForgetPasswordPage = () => {
  const { checkEmail } = useAuthStore();

  const { emailUser, onInputChange: onCheckEmailInputChange } =
    useForm(checkEmailUser);

  const checkEmailSubmit = async (event) => {
    event.preventDefault();
    const response = await checkEmail({ email: emailUser });

    if (response.success) {
      // If the request was successful, redirect to the desired page
      window.location.href = '/resetPassword';
    } else {
      // If there was an error in the request, show the alert with SweetAlert2
      Swal.fire(
        'Error',
        'Hubo un error al verificar el correo electrónico.',
        'error'
      );
    }
  };
  return (
    <>
      <Header />
      <form
        action=""
        className="form-forget_container"
        onSubmit={checkEmailSubmit}
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
          name="emailUser"
          value={emailUser}
          placeholder="generaciondesafiante@gmail.com"
          onChange={onCheckEmailInputChange}
        />
        <button className="form-forget_button" type="submit">
          Recuperar contraseña
        </button>
      </form>
    </>
  );
};
