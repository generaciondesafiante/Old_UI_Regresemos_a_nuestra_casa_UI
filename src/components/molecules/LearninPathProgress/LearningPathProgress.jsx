import { useNavigate } from 'react-router-dom';
import './LearninPathProgress.css';
import { PrivateRoutes } from '../../../models/routes';

export const LearningPahtProgress = ({ videoData, setIdVideo }) => {
  const navigate = useNavigate();
  // const params = useParams();

  const handleTopicClick = () => {
    setIdVideo(videoData.id);
    navigate(`${PrivateRoutes.LEARNINGPATH}/${videoData.id}`);
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
