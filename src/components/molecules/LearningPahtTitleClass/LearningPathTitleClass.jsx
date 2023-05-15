import './LearningPathTitleClass.css';
export const LearningPathTitleClass = () => {
  return (
    <>
      <div className="classRoomInfo-container">
        <p className="classRoomInfo-topic">Tema 1</p>
        <div className="classRoomInfo-line"></div>
        <h1 className="classRoomInfo-title">Historia de una familia</h1>
        <div className="classRoomInfo-subcontent">
          <p className="classRoomInfo-questions">Identidad ¿quiénes somos?</p>
          <p className="classRoomInfo-questionsTwo">¿De quiénes venimos?</p>
          <p className="classRoomInfo-invitation">
            ¡Conoce la historia de esta familia de la cuál tú eres parte!
          </p>
          <p className="classRoomInfo-section">¡Sección 1! Hasta Israel.</p>
        </div>
      </div>
    </>
  );
};
