import { LearningPahtProgress } from '../../molecules/LearningPathProgress/LearningPathProgress';
import { LearningPathTitleClass } from '../../molecules/LearningPahtTitleClass/LearningPathTitleClass';
import { LearningPathVideoClass } from '../../molecules/LearningPathVideoClass/LearningPathVideoClass';
import './LearningPath.css';

export const LearningPaht = ({
  courseData,
  setIdVideo,
  idVideo,
  setCurrentUrl,
}) => {
  const selectVideo = courseData.content.find((e) => e.id === (idVideo ?? 1));

  return (
    <div className="learningPath-container">
      <LearningPathVideoClass
        setIdVideo={setIdVideo}
        selectVideo={selectVideo}
        setCurrentUrl={setCurrentUrl}
        courseEndpoint={courseData.endpoint}
      />
      <LearningPathTitleClass
        descriptionData={{
          courseName: courseData.name,
          lessonName: selectVideo.title,
          lessonDescription: selectVideo.description,
        }}
      />

      <nav className="classRoomRoute-container">
        {courseData.content.map((video, index) => (
          <LearningPahtProgress
            key={video.id}
            setIdVideo={setIdVideo}
            courseEndpoint={courseData.endpoint}
            setCurrentUrl={setCurrentUrl}
            videoData={{
              ...video,
              isLastVideo: courseData.content.length - 1 === index,
            }}
          />
        ))}
      </nav>
    </div>
  );
};
