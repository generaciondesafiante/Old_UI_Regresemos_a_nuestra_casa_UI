import { useNavigate } from 'react-router-dom';
import LockIcon from '@mui/icons-material/Lock';
import { PrivateRoutes } from '../../../models/routes';
import './Path.css';

export const Path = ({ coursesData, setCoursesData, setCurrentCourseURL }) => {
  const navigate = useNavigate();
  const handleUrlId = (course) => {
    const idVideo = course.currentVideo ? course.currentVideo : 1;
    const endpoint = `${course.endpoint}/${idVideo}`;
    setCurrentCourseURL(endpoint);
    const courseUpdated = coursesData.map((courseData) => {
      if (courseData === course) {
        return { ...courseData, currentVideo: idVideo };
      } else {
        return courseData;
      }
    });
    setCoursesData(courseUpdated);
    navigate(`${PrivateRoutes.LEARNINGPATH}${endpoint}`);
  };

  return (
    <div className="path-container">
      <div className="path-content">
        {coursesData.map((course, index) => {
          return (
            <div key={index} className="path-border">
              <button
                onClick={() => handleUrlId(course)}
                className="path-learningPath"
              >
                <LockIcon className="icon-lock" />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
