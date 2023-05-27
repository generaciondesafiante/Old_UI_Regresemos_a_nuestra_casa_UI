import './TopicTracking.css';

const TopicTracking = ({ topic, lastTopic, lessonNumber, onClick }) => {
  return (
    <div className="classRoomRoute-subcontent">
      <div className="classRoomRoute-title">{topic}</div>

      <div className="classRoomRoute-iconCircle" onClick={onClick}>
        {lessonNumber}
      </div>

      <div className={`classRoomRoute-line ${lastTopic ? 'hide' : ''}`}></div>
    </div>
  );
};

export { TopicTracking };
