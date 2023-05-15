import { ResourcesAndVerses } from '../../molecules/ResourcesAndVerses/ResourcesAndVerses';
import { ResourcesComponent } from '../../molecules/ResourcesContent/Resources';
import './ResourcePage.css';
export const ResourcesPage = () => {
  return (
    <div className="content-view_resources">
      <ResourcesComponent />
      <ResourcesAndVerses />
    </div>
  );
};
