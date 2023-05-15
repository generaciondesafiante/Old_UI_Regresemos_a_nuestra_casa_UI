import './TopicTracking.css';

const TopicTracking = ({ topic, lastTopic, lessonNumber }) => {
  return (
    <div className="classRoomRoute-subcontent">
      <p className="classRoomRoute-title">{topic}</p>
      <div className="classRoomRoute-iconCircle">{lessonNumber}</div>
      <div className={`classRoomRoute-line ${lastTopic ? 'hide' : ''}`}></div>
    </div>
  );
};

export { TopicTracking };
