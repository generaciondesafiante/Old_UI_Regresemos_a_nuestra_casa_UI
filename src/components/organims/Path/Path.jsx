import { Link } from 'react-router-dom';
import LockIcon from '@mui/icons-material/Lock';

import { PrivateRoutes } from '../../../models/routes';
import './Path.css';

export const Path = () => {
  return (
    <>
      <div className="path-container">
        <div className="path-content">
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
