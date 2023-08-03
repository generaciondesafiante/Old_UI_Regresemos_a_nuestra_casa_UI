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
import { useState } from 'react';

export const Sidebar = () => {
  const [isSelected, setIsSelected] = useState({
    profile: false,
    dashboard: true,
    path: false,
    resources: false,
    favorites: false,
  });
  const { startLogout, status } = useAuthStore();

  if (status !== 'authenticated') {
    return null;
  }

  const handleSelectedOption = (optionSelected) => {
    const state = {
      profile: false,
      dashboard: false,
      path: false,
      resources: false,
      favorites: false,
    };
    setIsSelected({ ...state, ...optionSelected });
  };

  const updateClass = (condition) => {
    return `${condition ? 'sidebar-sectionSelected' : ''}`;
  };

  return (
    <div className="sidebar-container">
      <Link
        onClick={() => handleSelectedOption({ profile: true })}
        to={PrivateRoutes.PROFILE}
      >
        <div
          className={`sidebar-iconContainer ${updateClass(isSelected.profile)}`}
        >
          <Face className={`sidebar-icon ${updateClass(isSelected.profile)}`} />
        </div>
      </Link>
      <div className="sidebar-content_center">
        <Link
          onClick={() => handleSelectedOption({ dashboard: true })}
          to={PrivateRoutes.DASHBOARD}
        >
          <div
            className={`sidebar-iconContainer ${updateClass(
              isSelected.dashboard
            )}`}
          >
            <Home
              className={`sidebar-icon ${updateClass(isSelected.dashboard)}`}
            />
          </div>
        </Link>
        <Link
          onClick={() => handleSelectedOption({ path: true })}
          to={PrivateRoutes.PATH}
        >
          <div
            className={`sidebar-iconContainer ${updateClass(isSelected.path)}`}
          >
            <Bookmark
              className={`sidebar-icon ${updateClass(isSelected.path)}`}
            />
          </div>
        </Link>
        <Link
          onClick={() => handleSelectedOption({ resources: true })}
          to={PrivateRoutes.RESOURCE}
        >
          <div
            className={`sidebar-iconContainer ${updateClass(
              isSelected.resources
            )}`}
          >
            <Folder
              className={`sidebar-icon ${updateClass(isSelected.resources)}`}
            />
          </div>
        </Link>
        <Link
          onClick={() => handleSelectedOption({ favorites: true })}
          to={PrivateRoutes.FAVORITE}
        >
          <div
            className={`sidebar-iconContainer ${updateClass(
              isSelected.favorites
            )}`}
          >
            <Favorite
              className={`sidebar-icon ${updateClass(isSelected.favorites)}`}
            />
          </div>
        </Link>
      </div>
      <Link
        onClick={() => handleSelectedOption({ dashboard: true })}
        to={PublicRoutes.HOME}
      >
        <div onClick={startLogout} className="sidebar-iconContainer">
          <Logout className="sidebar-icon icon-exit" />
        </div>
      </Link>
    </div>
  );
};
