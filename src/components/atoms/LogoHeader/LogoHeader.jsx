import { Link } from 'react-router-dom';
import './LogoHeader.css';
const LogoHeader = () => {
  return (
    <div>
      <Link to="/home">
        <img
          className="header-logo"
          src="https://i.ibb.co/0sXKWB8/Logo11.png"
          alt="logo generacion desafiante"
        />
      </Link>
    </div>
  );
};
export default LogoHeader;
