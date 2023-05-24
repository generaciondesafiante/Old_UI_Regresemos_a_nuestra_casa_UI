import { useEffect, useState } from 'react';
import { TopicTracking } from '../TopicTracking/TopicTracking';
import './LearninPathProgress.css';

export const LearningPahtProgress = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideoId, setSelectedVideoId] = useState(null); // Nuevo estado para el ID del video seleccionado

  useEffect(() => {
    fetch('http://localhost:8080/api/auth/videos')
      .then((response) => response.json())
      .then((data) => setVideos(data))
      .catch((error) => console.error(error));
  }, []);

  const handleVideoClick = (videoUrl) => {
    setSelectedVideoId(videoUrl); // Actualiza el estado del ID del video seleccionado
  };

  return (
    <>
      <nav className="classRoomRoute-container">
        {videos.map((video, index) => (
          <TopicTracking
            key={video.id}
            topic={video.tema}
            lessonNumber={index + 1}
            lastTopic={index === videos.length - 1}
            onClick={() => handleVideoClick(video.url)} // Pasa el ID del video al manejar el clic
          />
        ))}
      </nav>
    </>
  );
};
