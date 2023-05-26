import './Header.css';
import LogoHeader from '../../atoms/LogoHeader/LogoHeader';
import AccesButton from '../../atoms/AccesButton/AccesButton';

export const Header = () => {
  return (
    <header className="header">
      <LogoHeader />
      <div className="header-container_btn">
        <AccesButton />
      </div>
    </header>
  );
};
