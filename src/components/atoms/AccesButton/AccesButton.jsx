import { Link, Link as RouterLink } from 'react-router-dom';
import './AccesButton.css';

export const AccesButton = () => {
  return (
    <>
      <Link
        className="header-access_btn  btn-login"
        component={RouterLink}
        to="/auth/login"
      >
        INICIAR SESIÓN
      </Link>
      <Link className="header-access_btn btn-register" to="/auth/register">
        CREAR CUENTA
      </Link>
    </>
  );
};
