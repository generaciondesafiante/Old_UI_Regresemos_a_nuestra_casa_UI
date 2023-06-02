import { LearningPahtProgress } from '../../molecules/LearninPathProgress/LearningPathProgress';
import { LearningPathTitleClass } from '../../molecules/LearningPahtTitleClass/LearningPathTitleClass';
import { LearningPathVideoClass } from '../../molecules/LearningPathVideoClass/LearningPathVideoClass';
import './LearningPath.css';

export const LearningPaht = ({ videosData, setIdVideo, idVideo }) => {
  const selectVideo = videosData.find((e) => e.id === idVideo);

  return (
    <div className="learningPath">
      {selectVideo && (
        <LearningPathVideoClass
          setIdVideo={setIdVideo}
          selectVideo={selectVideo}
        />
      )}
      <LearningPathTitleClass />
      <nav className="classRoomRoute-container">
        {videosData.map((video, index) => (
          <LearningPahtProgress
            key={video.id}
            setIdVideo={setIdVideo}
            // setCurso={setCurso}
            endpoint={video.tema}
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
