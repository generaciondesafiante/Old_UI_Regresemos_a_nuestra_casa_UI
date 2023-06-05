import { useNavigate } from 'react-router-dom';
import './LearninPathProgress.css';
import { PrivateRoutes } from '../../../models/routes';

export const LearningPahtProgress = ({
  videoData,
  setIdVideo,
  setCurrentUrl,
  courseEndpoint,
}) => {
  const navigate = useNavigate();

  const handleTopicClick = () => {
    const endpoint = `${courseEndpoint}/${videoData.id}`;
    setIdVideo(videoData.id);
    setCurrentUrl(endpoint);
    navigate(`${PrivateRoutes.LEARNINGPATH}${endpoint}`);
  };
  return (
    <>
      <div className="classRoomRoute-subcontent">
        <div className="classRoomRoute-title" onClick={handleTopicClick}>
          {videoData.id}
        </div>

        <div className="classRoomRoute-iconCircle" onClick={handleTopicClick}>
          {videoData.id}
        </div>

        <div
          className={`classRoomRoute-line ${
            videoData.isLastVideo ? 'hide' : ''
          }`}
        ></div>
      </div>
    </>
  );
};
