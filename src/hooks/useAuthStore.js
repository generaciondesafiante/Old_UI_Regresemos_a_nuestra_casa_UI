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

      localStorage.setItem('token', data.token);
      localStorage.setItem('token-init-date', new Date().getTime());
      const payload = {
        name: data.name,
        uid: data.uid,
        email: data.email,
        country: data.country,
        city: data.city,
        lastname: data.lastname,
      };

      dispatch(onLogin(payload));
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
      dispatch(onLogin({ name: data.name, uid: data.uid, email: data.email }));
    } catch (error) {
      localStorage.clear();
      dispatch(onLogout());
    }
  };

  const startLogout = () => {
    localStorage.clear();
    dispatch(onLogout());
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
  };
};
