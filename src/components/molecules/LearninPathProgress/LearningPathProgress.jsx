import { TopicTracking } from '../TopicTracking/TopicTracking';
import './LearninPathProgress.css';

export const LearningPahtProgress = () => {
  const sections = [
    'Sección 1',
    'Sección 2',
    'Sección 3',
    'Sección 4',
    'Sección 5',
    'Sección 6',
    'Sección 7',
    'Sección 8',
    'Sección 9',
    'Sección 10',
  ];
  console.log(sections.length);
  return (
    <nav className="classRoomRoute-container">
      {sections.map((topicContent, index) => (
        <TopicTracking
          key={index + 1}
          topic={topicContent}
          lessonNumber={index + 1}
          lastTopic={index === sections.length - 1}
        />
      ))}
    </nav>
  );
};