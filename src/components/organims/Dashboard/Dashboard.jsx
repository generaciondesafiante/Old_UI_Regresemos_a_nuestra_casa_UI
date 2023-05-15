import { ResourcesAndVerses } from '../../molecules/ResourcesAndVerses/ResourcesAndVerses';
import { Welcome } from '../../molecules/WelcomeHome/Welcome';

import './Dashboard.css';
export const Dashboard = () => {
  return (
    <div className="contentView">
      <Welcome />
      <ResourcesAndVerses />
    </div>
  );
};
