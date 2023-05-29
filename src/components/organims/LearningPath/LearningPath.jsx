import { LearningPathTitleClass } from '../../molecules/LearningPahtTitleClass/LearningPathTitleClass';
import { LearningPahtProgress } from '../../molecules/LearningPathProgress/LearningPathProgress';
import { LearningPathVideoClass } from '../../molecules/LearningPathVideoClass/LearningPathVideoClass';
import './LearningPath.css';

export const LearningPaht = () => {
  return (
    <div className="learningPath-container">
      <LearningPathVideoClass />
      <LearningPathTitleClass />
      <LearningPahtProgress />
    </div>
  );
};
