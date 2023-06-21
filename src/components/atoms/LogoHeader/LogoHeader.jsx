import { Link } from 'react-router-dom';
import './LogoHeader.css';
export const LogoHeader = () => {
  return (
    <>
      <Link to="/home">
        <img
          className="header-logo"
          src="https://i.ibb.co/0sXKWB8/Logo11.png"
          alt="Logo generación desafiante"
        />
      </Link>
    </>
  );
};
