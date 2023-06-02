import { Link } from 'react-router-dom';
import StarIcon from '@mui/icons-material/Star';
import './LearningPathVideoClass.css';

export const LearningPathVideoClass = () => {
  return (
    <div className="learningPathVideoClass-container">
      <iframe
        src="https://www.youtube.com/embed/D4SSeYfTwWo"
        className="learningPathVideoClass-video"
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
          <div className="learningPathVideoClass-btn_next">
            <Link className="learningPathVideoClass-btn_textNext">
              SIGUIENTE
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
