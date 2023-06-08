import { Link, useNavigate } from 'react-router-dom';
import StarIcon from '@mui/icons-material/Star';
import { PrivateRoutes } from '../../../models/routes';
import './LearningPathVideoClass.css';

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
    <div className="learningPathVideoClass-container">
      <iframe
        className="learningPathVideoClass-video"
        src={selectVideo.url}
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
