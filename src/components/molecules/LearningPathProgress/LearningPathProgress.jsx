import { useNavigate } from 'react-router-dom';
import { PrivateRoutes } from '../../../models/routes';
import './LearningPathProgress.css';

export const LearningPahtProgress = ({
  coursesData,
  setCoursesData,
  courseSelected,
  setCurrentCourseURL,
  lessonData,
}) => {
  const navigate = useNavigate();
  const handleUrlId = () => {
    const idVideo = lessonData.id;
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
    <>
      <div className="classRoomRoute-subcontent">
        <div className="classRoomRoute-title" onClick={handleUrlId}>
          {lessonData.id}
        </div>

        <div className="classRoomRoute-iconCircle" onClick={handleUrlId}>
          {lessonData.id}
        </div>

        <div
          className={`classRoomRoute-line ${
            lessonData.isLastLesson ? 'hide' : ''
          }`}
        ></div>
      </div>
    </>
  );
};
