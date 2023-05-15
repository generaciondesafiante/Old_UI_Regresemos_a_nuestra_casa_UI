import { LearningPahtProgress } from '../../molecules/LearninPathProgress/LearningPathProgress';
import { LearningPathTitleClass } from '../../molecules/LearningPahtTitleClass/LearningPathTitleClass';
import { LearningPathVideoClass } from '../../molecules/LearningPathVideoClass/LearningPathVideoClass';
import './LearningPath.css';

export const LearningPaht = () => {
  return (
    <div className="learningPath">
      <LearningPathVideoClass />
      <LearningPathTitleClass />
      <LearningPahtProgress />
    </div>
  );
};
