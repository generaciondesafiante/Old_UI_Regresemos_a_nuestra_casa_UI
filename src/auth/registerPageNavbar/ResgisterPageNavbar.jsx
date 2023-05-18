import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

import { useAuthStore } from '../../hooks';
import { useForm } from '../../hooks/useForm';
import '../AuthStyle/authStyle.css';
import { Header } from '../../components/organims/header/Header';

const registerFormFields = {
  registerName: '',
  registerEmail: '',
  registerPassword: '',
  registerPassword2: '',
};

export const RegisterPageNavbar = () => {
  const { startRegister, errorMessage } = useAuthStore();

  const {
    registerName,
    registerEmail,
    registerPassword,
    registerPassword2,
    onInputChange: onRegisterInputChange,
  } = useForm(registerFormFields);

  const registerSubmit = (event) => {
    event.preventDefault();
    if (registerPassword !== registerPassword2) {
      Swal.fire('Error en registro', 'Contraseñas no son iguales', 'error');
      return;
    }
    startRegister({
      name: registerName,
      email: registerEmail,
      password: registerPassword,
    });
  };

  useEffect(() => {
    if (errorMessage !== undefined)
      Swal.fire('Este usuario ya tiene una cuenta', errorMessage, 'error');
  }, [errorMessage]);

  return (
    <>
      <Header />
      <div className="form-container">
        <form action="" className="form-action" onSubmit={registerSubmit}>
          <h2 className="form-title">
            <span>¡Bienvenido/a </span> <span>Crea tu cuenta!</span>{' '}
          </h2>

          <div className="form-container_inLa">
            <input
              id="name"
              name="registerName"
              value={registerName}
              onChange={onRegisterInputChange}
              type="text"
              required
              placeholder=" "
              className="form-input"
            />
            <label htmlFor="name" className="form-label">
              Nombre completo
            </label>
          </div>

          <div className="form-container_inLa">
            <input
              id="email"
              name="registerEmail"
              value={registerEmail}
              onChange={onRegisterInputChange}
              type="text"
              required
              placeholder=" "
              className="form-input"
            />
            <label htmlFor="email" className="form-label">
              Correo electrónico
            </label>
          </div>

          <div className="form-container_inLa">
            <input
              id="password"
              name="registerPassword"
              value={registerPassword}
              onChange={onRegisterInputChange}
              type="password"
              required
              placeholder=" "
              className="form-input"
            />
            <label htmlFor="password" className="form-label">
              Contraseña
            </label>
          </div>
          <div className="form-container_inLa">
            <input
              id="password2"
              name="registerPassword2"
              value={registerPassword2}
              onChange={onRegisterInputChange}
              type="password"
              required
              placeholder=" "
              className="form-input"
            />
            <label htmlFor="password2" className="form-label">
              Repite la contraseña
            </label>
          </div>

          <Link className="form-forgot_login" to="/auth/login">
            ¿Ya tienes cuenta?
          </Link>

          <button className="form-btn" type="submit">
            Crear cuenta
          </button>
        </form>
      </div>
    </>
  );
};