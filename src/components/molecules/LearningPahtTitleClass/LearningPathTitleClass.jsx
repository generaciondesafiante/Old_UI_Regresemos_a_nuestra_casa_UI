import './LearningPathTitleClass.css';

export const LearningPathTitleClass = ({ descriptionData }) => {
  return (
    <div className="learningPathTitleClass-container">
      <p className="learningPathTitleClass-topic">
        {descriptionData.courseName}
      </p>
      <div className="learningPathTitleClass-line"></div>
      <h2 className="learningPathTitleClass-title">
        {descriptionData.lessonName}
      </h2>
      <div className="learningPathTitleClass-subcontent">
        <p>{descriptionData.lessonDescription}</p>
      </div>
    </div>
  );
};
