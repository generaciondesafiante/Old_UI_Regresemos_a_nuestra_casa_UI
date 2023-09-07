import { useEffect } from 'react';

import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

import { Header } from '../../components/organims/Header/Header';
import { useAuthStore } from '../../hooks';
import { useForm } from '../../hooks/useForm';
import { Input } from '../../components/atoms/Input/Input';
import '../AuthStyle/authStyleRegister.css';

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

      <form action="" className="form-register" onSubmit={registerSubmit}>
        <h2 className="form-register-title form-title_register">
          <span>¡Bienvenido/a </span>
          <span>Crea tu cuenta!</span>{' '}
        </h2>
        <section className="continer-label_grid">
          <Input
            id={'name-form-register'}
            htmlForm={'name-form-register'}
            name="registerName"
            value={registerName}
            onChange={onRegisterInputChange}
            type="text"
            required
            placeholder=" "
            label={'Nombres'}
            isRequire={true}
          />
          <Input
            id={'last-name-form-register'}
            htmlForm={'last-name-form-register'}
            name="registerLastName"
            value={registerLastName}
            onChange={onRegisterInputChange}
            type="text"
            required
            placeholder=" "
            label={'Apellidos'}
            isRequire={true}
          />
          <Input
            id={'country-form-register'}
            htmlForm={'country-form-register'}
            name="registerCountry"
            value={registerCountry}
            onChange={onRegisterInputChange}
            type="text"
            required
            placeholder=" "
            label={'País'}
             isRequire={true}
          />

          <Input
            id={'city-form-register'}
            htmlForm={'city-form-register'}
            name="registerCity"
            value={registerCity}
            onChange={onRegisterInputChange}
            type="text"
            required
            placeholder=" "
            label={'Ciudad'}
             isRequire={true}
          />
          <Input
            id={'phone-form-register'}
            htmlForm={'phone-form-register'}
            name="registerPhone"
            value={registerPhone}
            onChange={onRegisterInputChange}
            type="text"
            placeholder=" "
            label={'Teléfono (optional)'}
            isRequire={false}
          />

          <Input
            id={'email-form-register'}
            htmlForm={'email-form-register'}
            name="registerEmail"
            value={registerEmail}
            onChange={onRegisterInputChange}
            type="email"
            required
            placeholder=" "
            label={'Correo electrónico'}
             isRequire={true}
          />
          <Input
            id={'password-form-register'}
            htmlForm={'password-form-register'}
            name="registerPassword"
            value={registerPassword}
            onChange={onRegisterInputChange}
            type="password"
            required
            placeholder=" "
            label={'Contraseña'}
             isRequire={true}
          />

          <Input

            id={'password2-form-register'}
            htmlForm={'password2-form-register'}
            name="registerPassword2"
            value={registerPassword2}
            onChange={onRegisterInputChange}
            type="password"
            required
            placeholder=" "
            label={'Repite la contraseña'}
             isRequire={true}
          />
        </section>

        <Link className="form-register-forgot_login" to="/auth/login">
          ¿Ya tienes cuenta?
        </Link>

        <button className="form-register-btn" type="submit">
          Crear cuenta
        </button>
      </form>
    </>
  );
};
