import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Bookmark,
  Face,
  Favorite,
  Folder,
  Home,
  Logout,
} from '@mui/icons-material';
import { PrivateRoutes, PublicRoutes } from '../../../models/routes';
import { useAuthStore } from '../../../hooks/useAuthStore';
import './Sidebar.css';

export const Sidebar = () => {
  const { status, startLogout } = useAuthStore();
  const [selectedOption, setSelectedOption] = useState('dashboard');

  useEffect(() => {
    const savedSelection = localStorage.getItem('selectedOption');
    if (savedSelection) {
      setSelectedOption(savedSelection);
    }
  }, []);

  // Verificar si el usuario está autenticado
  if (status !== 'authenticated') {
    return null; // No mostrar Sidebar si no está autenticado
  }

  const handleSelectedOption = (option) => {
    setSelectedOption(option);
    localStorage.setItem('selectedOption', option);
  };

  return (
    <div className="sidebar-container">
      <Link
        onClick={() => handleSelectedOption('profile')}
        to={PrivateRoutes.PROFILE}
      >
        <div
          className={`sidebar-iconContainer ${
            selectedOption === 'profile' ? 'sidebar-sectionSelected' : ''
          }`}
        >
          <Face
            className={`sidebar-icon ${
              selectedOption === 'profile' ? 'sidebar-sectionSelected' : ''
            }`}
          />
        </div>
      </Link>
      <div className="sidebar-content_center">
        <Link
          onClick={() => handleSelectedOption('dashboard')}
          to={PrivateRoutes.DASHBOARD}
        >
          <div
            className={`sidebar-iconContainer ${
              selectedOption === 'dashboard' ? 'sidebar-sectionSelected' : ''
            }`}
          >
            <Home
              className={`sidebar-icon ${
                selectedOption === 'dashboard' ? 'sidebar-sectionSelected' : ''
              }`}
            />
          </div>
        </Link>
        <Link
          onClick={() => handleSelectedOption('path')}
          to={PrivateRoutes.PATH}
        >
          <div
            className={`sidebar-iconContainer ${
              selectedOption === 'path' ? 'sidebar-sectionSelected' : ''
            }`}
          >
            <Bookmark
              className={`sidebar-icon ${
                selectedOption === 'path' ? 'sidebar-sectionSelected' : ''
              }`}
            />
          </div>
        </Link>
        <Link
          onClick={() => handleSelectedOption('resources')}
          to={PrivateRoutes.RESOURCE}
        >
          <div
            className={`sidebar-iconContainer ${
              selectedOption === 'resources' ? 'sidebar-sectionSelected' : ''
            }`}
          >
            <Folder
              className={`sidebar-icon ${
                selectedOption === 'resources' ? 'sidebar-sectionSelected' : ''
              }`}
            />
          </div>
        </Link>
        <Link
          onClick={() => handleSelectedOption('favorites')}
          to={PrivateRoutes.FAVORITE}
        >
          <div
            className={`sidebar-iconContainer ${
              selectedOption === 'favorites' ? 'sidebar-sectionSelected' : ''
            }`}
          >
            <Favorite
              className={`sidebar-icon ${
                selectedOption === 'favorites' ? 'sidebar-sectionSelected' : ''
              }`}
            />
          </div>
        </Link>
      </div>
      <Link
        onClick={() => handleSelectedOption('dashboard')}
        to={PublicRoutes.HOME}
      >
        <div onClick={startLogout} className="sidebar-iconContainer">
          <Logout className="sidebar-icon icon-exit" />
        </div>
      </Link>
    </div>
  );
};
