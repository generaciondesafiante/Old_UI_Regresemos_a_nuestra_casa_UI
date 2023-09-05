import './ChangePasswordProfile.css';
import { useAuthStore, useForm } from '../../../hooks';
import { useEffect } from 'react';
import Swal from 'sweetalert2';

const loginFormFields = {
  password: '',
};

export const ChangePasswordProfile = () => {
  const { validatePasswordDB, errorMessage } = useAuthStore();

  const { password, onInputChange: onLoginInputChange } =
    useForm(loginFormFields);

  const validatePasswordSubmit = async (event) => {
    event.preventDefault();

    try {
      const data = await validatePasswordDB({ password });

      if (data.ok === true) { // Cambiar a data.ok === true
        Swal.fire('Contraseña válida', 'La contraseña es correcta.', 'success');
      } else {
        Swal.fire('Contraseña incorrecta', data.msg, 'error');
      }
    } catch (error) {
      Swal.fire('Error', 'Contraseña actual incorrecta.', 'error');
    }
  };

  useEffect(() => {
    if (errorMessage !== undefined) {
      Swal.fire('Contraseña incorrecta', errorMessage, 'warning');
    }
  }, [errorMessage]);

  return (
    <div className="container-changePasswrod-profile">
      <form
        action=""
        onSubmit={validatePasswordSubmit}
        className="content-modal"
      >
        <h2 className="title-modal">Cambiar Contraseña</h2>
        <input
          className="input-modal"
          type="password"
          placeholder="Contraseña Actual"
          name="password"
          value={password}
          onChange={onLoginInputChange}
          required
        />
        <button type="submit" className="form-login-btn">
          Validar Contraseña
        </button>
      </form>
    </div>
  );
};
