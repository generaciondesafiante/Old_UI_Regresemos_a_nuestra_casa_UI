import { useNavigate, useParams } from 'react-router-dom';
import { TopicTracking } from '../TopicTracking/TopicTracking';
import './LearninPathProgress.css';
import { PrivateRoutes } from '../../../models/routes';
// import { useState } from 'react';

export const LearningPahtProgress = ({ videosData }) => {
  const navigate = useNavigate();
  const params = useParams();
  // const [currentId, setCurrentId] = useState(1);

  const handleTopicClick = (topicId) => {
    // setCurrentId(topicId);
    navigate(`${PrivateRoutes.LEARNINGPATH}/${topicId}`);
  };

  return (
    <>
      <nav className="classRoomRoute-container">
        {videosData.map((video, index) => (
          <TopicTracking
            key={video.id}
            topic={video.id}
            lessonNumber={index + 1}
            lastTopic={index === videosData.length - 1}
            id={params.id}
            onClick={() => handleTopicClick(video.id)}
          />
        ))}
      </nav>
      /
    </>
  );
};
