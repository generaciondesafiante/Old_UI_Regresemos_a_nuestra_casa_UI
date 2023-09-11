import { Link, useNavigate } from 'react-router-dom';
import StarIcon from '@mui/icons-material/Star';
import { PrivateRoutes } from '../../../models/routes';
import './LearningPathVideoClass.css';

export const LearningPathVideoClass = ({
  coursesData,
  setCoursesData,
  setCurrentCourseURL,
  courseSelected,
  lessonSelected,
}) => {
  const navigate = useNavigate();

  const handleUrlId = () => {
    const idVideo = lessonSelected.idVideo + 1;
    const endpoint = `${courseSelected.endpoint}/${idVideo}`;
    setCurrentCourseURL(endpoint);
    const courseUpdated = coursesData.map((courseData) => {
      if (courseData === courseSelected) {
        return { ...courseData, currentVideo: idVideo };
      } else {
        return courseData;
      }
    });
    setCoursesData(courseUpdated);
    navigate(`${PrivateRoutes.LEARNINGPATH}${endpoint}`);
  };

  return (
    <div className="learningPathVideoClass-container">
      <iframe
        className="learningPathVideoClass-video"
        src={lessonSelected.url}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>

      <div className="learningPathVideoClass-content_videoInteraction">
        <div className="learningPathVideoClass-subcontent_videoInteraction">
          <p className="learningPathVideoClass-videoInteraction_title">
            1 H 40 MIN
          </p>
          <StarIcon className="learningPathVideoClass-videoInteraction_icon" />
          <StarIcon className="learningPathVideoClass-videoInteraction_icon" />
          <StarIcon className="learningPathVideoClass-videoInteraction_icon" />
        </div>
        <div className="learningPathVideoClass-subcontent_btn">
          <div className="learningPathVideoClass-btn_activity">
            <Link className="learningPathVideoClass-btn_textActivity">
              ACTIVIDAD
            </Link>
          </div>
          <button
            className="learningPathVideoClass-btn_next learningPathVideoClass-btn_textNext"
            onClick={handleUrlId}
          >
            SIGUIENTE
          </button>
        </div>
      </div>
    </div>
  );
};
