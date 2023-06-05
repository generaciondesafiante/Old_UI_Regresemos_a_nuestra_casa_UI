import './LearningPathTitleClass.css';
export const LearningPathTitleClass = ({ descriptionData }) => {
  return (
    <div className="classRoomInfo-container">
      <p className="classRoomInfo-topic">{descriptionData.courseName}</p>
      <div className="classRoomInfo-line"></div>
      <h2 className="classRoomInfo-title">{descriptionData.lessonName}</h2>
      <div className="classRoomInfo-subcontent">
        <p>{descriptionData.lessonDescription}</p>
      </div>
    </div>
  );
};
