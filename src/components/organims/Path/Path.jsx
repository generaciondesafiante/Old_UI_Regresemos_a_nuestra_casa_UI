import { Link, useNavigate } from 'react-router-dom';
import LockIcon from '@mui/icons-material/Lock';

import { PrivateRoutes } from '../../../models/routes';
import './Path.css';

export const Path = ({ idVideo, setCurrentUrl, courseData }) => {
  const navigate = useNavigate();
  const handleUrlId = () => {
    const endpoint = `${courseData.endpoint}/${idVideo ? idVideo : 1}`;
    setCurrentUrl(endpoint);
    navigate(`${PrivateRoutes.LEARNINGPATH}${endpoint}`);
  };

  return (
    <>
      <div className="path-container">
        <div className="path-content">
          <button onClick={handleUrlId} className="learningPath-classroom">
            <LockIcon className="icon-lock" />
          </button>
          <Link
            to={PrivateRoutes.LEARNINGPATH}
            className="learningPath-classroom"
          >
            <LockIcon className="icon-lock" />
          </Link>
          <Link to={PrivateRoutes.LEARNINGPATH} className="path-learningPath">
            <LockIcon className="icon-lock" />
          </Link>

          <Link to={PrivateRoutes.LEARNINGPATH} className="path-learningPath">
            <LockIcon className="icon-lock" />
          </Link>
          <Link to={PrivateRoutes.LEARNINGPATH} className="path-learningPath">
            <LockIcon className="icon-lock" />
          </Link>
          <Link to={PrivateRoutes.LEARNINGPATH} className="path-learningPath">
            <LockIcon className="icon-lock" />
          </Link>
          <Link to={PrivateRoutes.LEARNINGPATH} className="path-learningPath">
            <LockIcon className="icon-lock" />
          </Link>

          <Link to={PrivateRoutes.LEARNINGPATH} className="path-learningPath">
            <LockIcon className="icon-lock" />
          </Link>
          <Link to={PrivateRoutes.LEARNINGPATH} className="path-learningPath">
            <LockIcon className="icon-lock" />
          </Link>
          <Link to={PrivateRoutes.LEARNINGPATH} className="path-learningPath">
            <LockIcon className="icon-lock" />
          </Link>
        </div>
      </div>
    </>
  );
};
