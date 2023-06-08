import { ResourcesAndVerses } from '../../molecules/ResourcesAndVerses/ResourcesAndVerses';
import { UserWelcome } from '../../molecules/UserWelcome/UserWelcome';
import './Dashboard.css';

export const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <UserWelcome />
      <ResourcesAndVerses />
    </div>
  );
};
