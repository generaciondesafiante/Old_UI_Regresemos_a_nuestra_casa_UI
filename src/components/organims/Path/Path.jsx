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
    const courseUpdated = coursesData.course.map((courseData) => {
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
        {coursesData &&
          coursesData.course &&
          coursesData.course.map((course, index) => {
            const isSingleCourse = coursesData.course.length === 1;
            return (
              <div key={index} className="path-border">
                {index === 0 ? (
                  <img
                    className="path-img_flag flag-start"
                    src="https://i.imgur.com/pIOGRDs.png"
                    alt="Bandera del inicio"
                  />
                ) : (
                  ''
                )}
                {index === coursesData.course.length - 1 && !isSingleCourse ? (
                  <img
                    className="path-img_flag flag-end"
                    src="https://i.imgur.com/8cfdvwv.png"
                    alt="Bandera de la meta"
                  />
                ) : (
                  ''
                )}
                <button
                  onClick={() => handleUrlId(course)}
                  className="path-learningPath"
                >
                  <LockIcon className="icon-lock" />
                </button>
                <p className="path-CourseTitle">{course.name}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
};
