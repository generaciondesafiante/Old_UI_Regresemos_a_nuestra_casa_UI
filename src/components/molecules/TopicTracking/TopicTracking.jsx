import './TopicTracking.css';

const TopicTracking = ({ topic, lastTopic, lessonNumber, onClick }) => {
  return (
    <div className="classRoomRoute-subcontent">
      <button className="classRoomRoute-title" onClick={onClick}>
        {topic}
      </button>
      <div className="classRoomRoute-iconCircle" onClick={onClick}>
        {lessonNumber}
      </div>
      <div className={`classRoomRoute-line ${lastTopic ? 'hide' : ''}`}></div>
    </div>
  );
};

export { TopicTracking };
