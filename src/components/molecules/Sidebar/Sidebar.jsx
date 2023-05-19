import {
  Bookmark,
  Face,
  Favorite,
  Folder,
  Home,
  Logout,
} from '@mui/icons-material';
import { Link } from 'react-router-dom';
import './Sidebar.css';
import { PrivateRoutes, PublicRoutes } from '../../../models/routes';
import { useAuthStore } from '../../../hooks/useAuthStore';

export const Sidebar = () => {
  const { startLogout } = useAuthStore();

  return (
    <div className="sidebar-container">
      <Link to={PrivateRoutes.PROFILE}>
        <Face className="sidebar-icon" />
      </Link>
      <div className="sidebar-content_center">
        <Link to={PrivateRoutes.DASHBOARD}>
          <Home className="sidebar-icon" />
        </Link>
        <Link to={PrivateRoutes.PATH}>
          <Bookmark className="sidebar-icon" />
        </Link>
        <Link to={PrivateRoutes.RESOURCE}>
          <Folder className="sidebar-icon" />
        </Link>
        <Link to={PrivateRoutes.FAVORITE}>
          <Favorite className="sidebar-icon" />
        </Link>
      </div>
      <button onClick={startLogout} className="sidebar-icon sidebar-logout">
        <Link to={PublicRoutes.HOME} className="sidebar-icon">
          <Logout className="sidebar-icon icon-exit" />
        </Link>
      </button>
    </div>
  );
};
