import { useEffect, useState } from 'react';

import { Navigate, Outlet } from 'react-router-dom';

import { PublicRoutes } from '../models/routes';
import { useAuthStore } from '../hooks';

export const AuthGuards = ({ handleIsLogged }) => {
  const { startLogin } = useAuthStore();
  const [isLoading, setIsLoading] = useState(true);
  const isToken = localStorage.getItem('token');

  useEffect(() => {
    if (startLogin()) {
      setIsLoading(false);
      handleIsLogged(true);
    } else {
      return '';
    }
  }, []);

  return (
    !isLoading && (isToken ? <Outlet /> : <Navigate to={PublicRoutes.LOGIN} />)
  );
};
