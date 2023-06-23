import { AccesButton } from './components/atoms/AccesButton/AccesButton';
import { LogoHeader } from './components/atoms/LogoHeader/LogoHeader';
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
