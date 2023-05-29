import { ResourcesAndVerses } from '../../molecules/ResourcesAndVerses/ResourcesAndVerses';
import { ResourcesComponent } from '../../molecules/ResourcesContent/Resources';
import './ResourcesPage.css';
export const ResourcesPage = () => {
  return (
    <div className="resourcesPage-container">
      <ResourcesComponent />
      <ResourcesAndVerses />
    </div>
  );
};
