import './LearningPathTitleClass.css';
export const LearningPathTitleClass = () => {
  return (
    <>
      <div className="learningPathTitleClass-container">
        <p className="learningPathTitleClass-topic">Tema 1</p>
        <div className="learningPathTitleClass-line"></div>
        <h1 className="learningPathTitleClass-title">Historia de una familia</h1>
        <div className="learningPathTitleClass-subcontent">
          <p className="learningPathTitleClass-questions">Identidad ¿quiénes somos?</p>
          <p className="learningPathTitleClass-questionsTwo">¿De quiénes venimos?</p>
          <p className="learningPathTitleClass-invitation">
            ¡Conoce la historia de esta familia de la cuál tú eres parte!
          </p>
          <p className="learningPathTitleClass-subtopic">¡Sección 1! Hasta Israel.</p>
        </div>
      </div>
    </>
  );
};
