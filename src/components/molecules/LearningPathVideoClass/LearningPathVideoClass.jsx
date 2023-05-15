import StarIcon from '@mui/icons-material/Star';
import { Link } from 'react-router-dom';
import './LearningPathVideoClass.css';

export const LearningPathVideoClass = () => {
  return (
    <div className="classRoomVideo-container">
      <iframe
        src="https://www.youtube.com/embed/D4SSeYfTwWo"
        className="classRoomVideo-video"
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
          <div className="classRoomVideo-btn_next">
            <Link className="classRoomVideo-btn_textNext">SIGUIENTE</Link>
          </div>
        </div>
      </div>
    </div>
  );
};
