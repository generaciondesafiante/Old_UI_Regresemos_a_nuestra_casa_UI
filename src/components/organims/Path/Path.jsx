import { Link } from 'react-router-dom';
import LockIcon from '@mui/icons-material/Lock';

import { PrivateRoutes } from '../../../models/routes';
import './Path.css';

export const Path = () => {
  return (
    <>
      <div className="content-learningPath">
        <div className="containerPath">
          <Link
            to={PrivateRoutes.LEARNINGPATH}
            className="learningPath-classroom"
          >
            <LockIcon className="icon-lock" />
          </Link>
          <Link
            to={PrivateRoutes.LEARNINGPATH}
            className="learningPath-classroom"
          >
            <LockIcon className="icon-lock" />
          </Link>
          <Link
            to={PrivateRoutes.LEARNINGPATH}
            className="learningPath-classroom"
          >
            <LockIcon className="icon-lock" />
          </Link>

          <Link
            to={PrivateRoutes.LEARNINGPATH}
            className="learningPath-classroom"
          >
            <LockIcon className="icon-lock" />
          </Link>
          <Link
            to={PrivateRoutes.LEARNINGPATH}
            className="learningPath-classroom"
          >
            <LockIcon className="icon-lock" />
          </Link>
          <Link
            to={PrivateRoutes.LEARNINGPATH}
            className="learningPath-classroom"
          >
            <LockIcon className="icon-lock" />
          </Link>
          <Link
            to={PrivateRoutes.LEARNINGPATH}
            className="learningPath-classroom"
          >
            <LockIcon className="icon-lock" />
          </Link>

          <Link
            to={PrivateRoutes.LEARNINGPATH}
            className="learningPath-classroom"
          >
            <LockIcon className="icon-lock" />
          </Link>
          <Link
            to={PrivateRoutes.LEARNINGPATH}
            className="learningPath-classroom"
          >
            <LockIcon className="icon-lock" />
          </Link>
          <Link
            to={PrivateRoutes.LEARNINGPATH}
            className="learningPath-classroom"
          >
            <LockIcon className="icon-lock" />
          </Link>
        </div>
      </div>
    </>
  );
};
