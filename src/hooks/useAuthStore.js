import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  clearErrorMessage,
  onCheckUserExistenceFailure,
  onCheckUserExistenceSuccess,
  onChecking,
  onLogin,
  onLogout,
} from '../store/auth/authSlice';
import { generacionApi } from '../api';
import { PrivateRoutes } from '../models/routes';
import Swal from 'sweetalert2';

export const useAuthStore = () => {
  const { status, errorMessage, user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const id = localStorage.getItem('id');
  let idParamas = useParams();
  let idPassword = idParamas.id;

  const startLogin = async ({ email, password }) => {
    dispatch(onChecking());

    try {
      const { data } = await generacionApi.post(
        '/auth',
        {
          email,
          password,
        },
        {
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
            'Access-Control-Allow-Origin': '*',
          },
        }
      );

      localStorage.setItem('name', data.name);
      localStorage.setItem('lastname', data.lastname);
      localStorage.setItem('email', data.email);
      localStorage.setItem('country', data.country);
      localStorage.setItem('city', data.city);
      localStorage.setItem('phone', data.phone);
      localStorage.setItem('id', data.uid);
      localStorage.setItem('token', data.token);
      localStorage.setItem('image', data.image);
      localStorage.setItem('token-init-date', new Date().getTime());

      dispatch(onLogin(data, data.token));

      navigate(PrivateRoutes.DASHBOARD, { replace: true });
    } catch (error) {
      dispatch(onLogout('Error en autenticación'));
      setTimeout(() => {
        dispatch(clearErrorMessage());
      }, 10);
    }
  };

  const startRegister = async ({
    email,
    password,
    name,
    lastname,
    country,
    city,
    phone,
    image,
  }) => {
    dispatch(onChecking());

    try {
      const { data } = await generacionApi.post(
        '/auth/new',
        {
          email,
          password,
          name,
          country,
          city,
          lastname,
          phone,
          image,
        },
        {
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
            'Access-Control-Allow-Origin': '*',
          },
        }
      );
      localStorage.setItem('name', data.name);
      localStorage.setItem('lastname', data.lastname);
      localStorage.setItem('email', data.email);
      localStorage.setItem('country', data.country);
      localStorage.setItem('city', data.city);
      localStorage.setItem('phone', data.phone);
      localStorage.setItem('image', data.image);
      window.localStorage.setItem('token', data.token);

      window.localStorage.setItem('token-init-date', new Date().getTime());
      dispatch(
        onLogin({
          name: data.name,
          uid: data.uid,
        })
      );

      navigate(PrivateRoutes.DASHBOARD, { replace: true });
    } catch (error) {
      dispatch(onLogout(error.response.data?.msg || '--'));
      setTimeout(() => {
        dispatch(clearErrorMessage());
      }, 10);
    }
  };

  const checkAuthToken = async () => {
    const token = localStorage.getItem('token');
    if (!token) return dispatch(onLogout());

    try {
      const { data } = await generacionApi.get('/auth/renew');

      localStorage.setItem('token', data.token);
      localStorage.setItem('token-init-date', new Date().getTime());
      dispatch(onLogin(data));
    } catch (error) {
      localStorage.clear();
      dispatch(onLogout());
    }
  };

  const startLogout = () => {
    localStorage.clear();
    dispatch(onLogout());
  };

  const editInformationUser = async ({
    email,
    password,
    name,
    lastname,
    country,
    city,
    phone,
  }) => {
    try {
      const { data } = await generacionApi.put(
        `/auth/edit-profile/${id}`,
        {
          email,
          password,
          name,
          country,
          city,
          lastname,
          phone,
        },
        {
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
            'Access-Control-Allow-Origin': '*',
          },
        }
      );
      dispatch({ data: data });
    } catch (error) {
      console.log('Hable con su administrador');
    }
  };
  const changePassword = async ({ password }) => {
    try {
      const { data } = await generacionApi.put(
        `/auth/change-password/${idPassword}`,
        {
          password,
        },
        {
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
            'Access-Control-Allow-Origin': '*',
          },
        }
      );
      dispatch({ data: data });
    } catch (error) {
      console.log('Hable con su administrador');
    }
  };
  const changePasswordProfile = async ({ password }) => {
    try {
      const { data } = await generacionApi.put(
        `/auth/change-password/${id}`,
        {
          password,
        },
        {
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
            'Access-Control-Allow-Origin': '*',
          },
        }
      );
      return data;
    } catch (error) {
      console.log('Error al cambiar la contraseña:', error);
    }
  };

  const validatePasswordDB = async ({ password }) => {
    try {
      const { data } = await generacionApi.post(
        `/auth/validate-password/${id}`,
        {
          password: password,
        },
        {
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
            'Access-Control-Allow-Origin': '*',
          },
        }
      );
      return data;
    } catch (error) {
      console.error('Error al validar la contraseña:', error);

      Swal.fire('Error', 'Contraseña actual incorrecta.', 'error');

      throw error;
    }
  };

  const checkEmail = async ({ email }) => {
    dispatch(onChecking());

    try {
      const { data } = await generacionApi.post(
        '/auth/check-email',
        {
          email,
        },
        {
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
            'Access-Control-Allow-Origin': '*',
          },
        }
      );

      localStorage.setItem('id', data.uid);
      localStorage.setItem('token', data.token);
      localStorage.setItem('token-init-date', new Date().getTime());

      dispatch(onCheckUserExistenceSuccess({ data: data }));
      return { success: true, data }; // Returns an object indicating success and the data received
    } catch (error) {
      dispatch(onCheckUserExistenceFailure('Error en redirección'));
      return { success: false, error }; // Returns an object indicating error
    }
  };

  const videosLearningPath = async ({ id, tema, title, url }) => {
    await generacionApi.post(
      '/auth/videos',
      {
        id,
        tema,
        title,
        url,
      },
      {
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
          'Access-Control-Allow-Origin': '*',
        },
      }
    );
  };

  return {
    //*Properties
    status,
    errorMessage,
    user,
    //*methods
    startLogin,
    startRegister,
    checkAuthToken,
    startLogout,
    videosLearningPath,
    editInformationUser,
    checkEmail,
    changePassword,
    validatePasswordDB,
    changePasswordProfile,
  };
};
