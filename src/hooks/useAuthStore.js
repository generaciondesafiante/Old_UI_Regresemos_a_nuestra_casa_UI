import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  clearErrorMessage,
  onChecking,
  onLogin,
  onLogout,
} from '../store/auth/authSlice';
import { generacionApi } from '../api';
import { PrivateRoutes } from '../models/routes';

export const useAuthStore = () => {
  const { status, errorMessage } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userId = localStorage.getItem('uid');
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
      localStorage.setItem('uid', data.uid);
      localStorage.setItem('token', data.token);
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
        `/auth/forgot-password/${userId}`,
        {
          email,
          password,
          name,
          country,
          city,
          lastname,
          phone,
          email,
        },
        {
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
            'Access-Control-Allow-Origin': '*',
          },
        }
      );
      dispatch(data);
    } catch (error) {
      console.log('Hable con su administrador');
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

    //*methods
    startLogin,
    startRegister,
    checkAuthToken,
    startLogout,
    videosLearningPath,
    editInformationUser,
  };
};
