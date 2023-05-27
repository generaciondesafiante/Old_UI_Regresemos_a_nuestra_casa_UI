// import { Link } from 'react-router-dom';
// import { PrivateRoutes } from '../../../models/routes';
import { LearningPahtProgress } from '../../molecules/LearninPathProgress/LearningPathProgress';
import { LearningPathTitleClass } from '../../molecules/LearningPahtTitleClass/LearningPathTitleClass';
import { LearningPathVideoClass } from '../../molecules/LearningPathVideoClass/LearningPathVideoClass';
import './LearningPath.css';
// import { Link } from 'react-router-dom';
export const LearningPaht = ({ videosData }) => {
  return (
    <div className="learningPath">
      <LearningPathVideoClass videosData={videosData} />
      <LearningPathTitleClass videosData={videosData} />
      {/* <Link to={`${PrivateRoutes.LEARNINGPATH}/${topic}`}> */}

      <LearningPahtProgress videosData={videosData} />

      {/* <LearningPahtProgress videosData={videosData} /> */}
    </div>
  );
};
