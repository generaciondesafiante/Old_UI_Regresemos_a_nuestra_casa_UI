import { useEffect } from 'react';

import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

import { Header } from '../../components/organims/Header/Header';
import { useAuthStore } from '../../hooks';
import { useForm } from '../../hooks/useForm';
import '../AuthStyle/authStyle.css';

const registerFormFields = {
  registerName: '',
  registerLastName: '',
  registerCountry: '',
  registerPhone: '',
  registerCity: '',
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
    registerLastName,
    registerCountry,
    registerPhone,
    registerCity,
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
      lastname: registerLastName,
      phone: registerPhone,
      country: registerCountry,
      city: registerCity,
    });
  };

  useEffect(() => {
    if (errorMessage !== undefined)
      Swal.fire('Este usuario ya tiene una cuenta', errorMessage, 'error');
  }, [errorMessage]);

  return (
    <>
      <Header />

      <form action="" className="form" onSubmit={registerSubmit}>
        <h2 className="form-title form-title_register">
          <span>¡Bienvenido/a </span>
          <span>Crea tu cuenta!</span>{' '}
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
            Nombres
          </label>
        </div>
        <div className="form-container_inLa">
          <input
            id="lastname"
            name="registerLastName"
            value={registerLastName}
            onChange={onRegisterInputChange}
            type="text"
            required
            placeholder=" "
            className="form-input"
          />
          <label htmlFor="lastname" className="form-label">
            Apellidos
          </label>
        </div>
        <div className="form-container_inLa">
          <input
            id="country"
            name="registerCountry"
            value={registerCountry}
            onChange={onRegisterInputChange}
            type="text"
            required
            placeholder=" "
            className="form-input"
          />
          <label htmlFor="country" className="form-label">
            País
          </label>
        </div>
        <div className="form-container_inLa">
          <input
            id="city"
            name="registerCity"
            value={registerCity}
            onChange={onRegisterInputChange}
            type="text"
            required
            placeholder=" "
            className="form-input"
          />
          <label htmlFor="city" className="form-label">
            Cuidad
          </label>
        </div>
        <div className="form-container_inLa">
          <input
            id="phone"
            name="registerPhone"
            value={registerPhone}
            onChange={onRegisterInputChange}
            type="text"
            placeholder=" "
            className="form-input"
          />
          <label htmlFor="phone" className="form-label">
            Teléfono (opcional)
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
    </>
  );
};
