import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
import { useAuthStore, useForm } from '../../../hooks';
import { clearErrorMessage } from '../../../store/auth/authSlice';
import { Input } from '../../atoms/Input/Input';
import { PrivateRoutes } from '../../../models/routes';
import './ChangePasswordProfile.css';

const validatePasswordForm = {
  password: '',
};
const resetFormFields = {
  newPassword: '',
  confirmNewPassword: '',
};
export const ChangePasswordProfile = () => {
  const { validatePasswordDB, changePasswordProfile, errorMessage } =
    useAuthStore();
  const dispatch = useDispatch;

  const { password, onInputChange: onValidatePassword } =
    useForm(validatePasswordForm);
  const {
    newPassword,
    confirmNewPassword,
    onInputChange: onChangePassword,
  } = useForm(resetFormFields);

  const validatePassword = async () => {
    try {
      const data = await validatePasswordDB({ password });

      if (data.ok === true) {
        return true;
      } else {
        Swal.fire('Contraseña incorrecta', data.msg, 'error');
        return false;
      }
    } catch (error) {
      Swal.fire('Error', 'Contraseña actual incorrecta.', 'error');
      return false;
    }
  };

  const resetSumbitPassword = async (event) => {
    event.preventDefault();
    if (newPassword !== confirmNewPassword) {
      Swal.fire(
        'Error de autenticación',
        'Las contraseñas no son iguales',
        'error'
      );
      return;
    }
    changePasswordProfile({
      password: newPassword,
    })
      .then(() => {
        Swal.fire({
          icon: 'success',
          title: 'Contraseña modificada',
          text: 'Los cambios en tu perfil han sido guardados exitosamente.',
          didClose: () => {
            window.location.href = '/profile';

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

  const validatePasswordSubmit = async (event) => {
    event.preventDefault();

    try {
      const isPasswordValid = await validatePassword();

      if (isPasswordValid) {
        await resetSumbitPassword(event);
      }
    } catch (error) {
      console.log('Error al validar la contraseña:', error);
      Swal.fire('Error', 'Ocurrió un error al validar la contraseña.', 'error');
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

        <Input
          id="password-change-profile"
          htmlForm={'password-change-profile'}
          type="password"
          placeholder=" "
          name="password"
          value={password}
          onChange={onValidatePassword}
          label={'Contraseña Actual'}
          labelColor={'#b5b5b5'}
          isRequire={true}
        />

        <Input
          id="passwordNew-change-profile"
          htmlForm={'passwordNew-change-profile'}
          type="password"
          placeholder=" "
          name="newPassword"
          value={newPassword}
          onChange={onChangePassword}
          label={'Nueva Contraseña'}
          labelColor={'#b5b5b5'}
          isRequire={true}
        />

        <Input
          id="passwordConfirm-change-profile"
          htmlForm={'passwordConfirm-change-profile'}
          type="password"
          placeholder=" "
          name="confirmNewPassword"
          value={confirmNewPassword}
          onChange={onChangePassword}
          label={'Confirmar contraseña'}
          labelColor={'#b5b5b5'}
          isRequire={true}
        />
        <div className="container-button-change">
          <button
            type="submit"
            className="form-changePassword-btns button-changePassword-submit"
          >
            Cambiar Contraseña
          </button>

          <Link
            to={PrivateRoutes.PROFILE}
            className="form-changePassword-btns button-changePassword-danger"
          >
            Cancelar
          </Link>
        </div>
      </form>
    </div>
  );
};
