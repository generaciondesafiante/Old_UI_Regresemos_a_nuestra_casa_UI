import './Header.css';
import LogoHeader from '../../atoms/LogoHeader/LogoHeader';
import AccesButton from '../../atoms/AccesButton/AccesButton';

export const Header = () => {
  return (
    <header className="header-home">
      <LogoHeader />
      <div className="sesionButtonHeader">
        <AccesButton className="btn-header_sesion" />
      </div>
    </header>
  );
};
