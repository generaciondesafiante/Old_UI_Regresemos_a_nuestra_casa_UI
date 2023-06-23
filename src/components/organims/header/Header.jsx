import { AccesButton } from '../../atoms/AccesButton/AccesButton';
import { LogoHeader } from '../../atoms/LogoHeader/LogoHeader';
import './Header.css';

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
