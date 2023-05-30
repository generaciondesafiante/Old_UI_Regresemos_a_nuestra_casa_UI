// import { Link } from 'react-router-dom';
// import { PrivateRoutes } from '../../../models/routes';
import { LearningPahtProgress } from '../../molecules/LearninPathProgress/LearningPathProgress';
import { LearningPathTitleClass } from '../../molecules/LearningPahtTitleClass/LearningPathTitleClass';
import { LearningPathVideoClass } from '../../molecules/LearningPathVideoClass/LearningPathVideoClass';
import './LearningPath.css';
// import { Link } from 'react-router-dom';
export const LearningPaht = ({ videosData, setIdVideo }) => {
  return (
    <div className="learningPath">
      <LearningPathVideoClass videosData={videosData} />
      <LearningPathTitleClass videosData={videosData} />
      <nav className="classRoomRoute-container">
        {videosData.map((video, index) => (
          <LearningPahtProgress
            key={video.id}
            setIdVideo={setIdVideo}
            videoData={{
              ...video,
              isLastVideo: videosData.length - 1 === index,
            }}
          />
        ))}
      </nav>
    </div>
  );
};
