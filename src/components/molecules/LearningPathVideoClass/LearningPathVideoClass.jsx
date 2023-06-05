import StarIcon from '@mui/icons-material/Star';
import { Link, useNavigate } from 'react-router-dom';
import './LearningPathVideoClass.css';
import { PrivateRoutes } from '../../../models/routes';

export const LearningPathVideoClass = ({
  selectVideo,
  setCurrentUrl,
  courseEndpoint,
  setIdVideo,
}) => {
  const navigate = useNavigate();

  const handleUrlId = () => {
    const idNextVideo = selectVideo.id + 1;
    const endpoint = `${courseEndpoint}/${idNextVideo}`;
    setCurrentUrl(endpoint);
    setIdVideo(idNextVideo);
    navigate(`${PrivateRoutes.LEARNINGPATH}${endpoint}`);
  };
  return (
    <div className="classRoomVideo-container">
      <iframe
        className="classRoomVideo-video"
        src={selectVideo.url}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>

      <div className="classRoomVideo-content_videoInteraction">
        <div className="classRoomVideo-subcontent_videoInteraction">
          <p className="classRoomVideo-videoInteraction_title">1 H 40 MIN</p>
          <StarIcon className="classRoomVideo-videoInteraction_icon" />
          <StarIcon className="classRoomVideo-videoInteraction_icon" />
          <StarIcon className="classRoomVideo-videoInteraction_icon" />
        </div>
        <div className="classRoomVideo-subcontent_btn">
          <div className="classRoomVideo-btn_activity">
            <Link className="classRoomVideo-btn_textActivity">ACTIVIDAD</Link>
          </div>
          <button
            className="classRoomVideo-btn_textNext classRoomVideo-btn_next"
            onClick={handleUrlId}
          >
            SIGUIENTE
          </button>
        </div>
      </div>
    </div>
  );
};
