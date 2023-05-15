import { useAuthStore } from '../hooks';
import { Navigate, Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { PublicRoutes } from '../models/routes';

export const AuthGuards = ({ handleIsLogged }) => {
  const { checkAuthToken } = useAuthStore();
  const [isLoading, setIsLoading] = useState(true);
  const isToken = localStorage.getItem('token');

  useEffect(() => {
    checkAuthToken();
    setIsLoading(false);
    handleIsLogged(true);
  }, []);

  return (
    !isLoading && (isToken ? <Outlet /> : <Navigate to={PublicRoutes.LOGIN} />)
  );
};
