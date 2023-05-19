import './TopicProgress.css';

const TopicProgress = ({ topic, lastTopic, lessonNumber }) => {
  return (
    <div className="topicProgress-container">
      <p className="topicProgress-title">{topic}</p>
      <div className="topicProgress-iconCircle">{lessonNumber}</div>
      <div className={`topicProgress-line ${lastTopic ? 'hide' : ''}`}></div>
    </div>
  );
};

export { TopicProgress };
