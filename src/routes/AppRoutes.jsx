import { useEffect, useState } from 'react';

import { Navigate, Route, Routes } from 'react-router-dom';
import { Favorite } from '@mui/icons-material';

import { AuthGuards } from '../guards/AuthGuards';
import { PrivateRoutes, PublicRoutes } from '../models/routes';

import { Dashboard } from '../components/organims/Dashboard/Dashboard';
import { Home } from '../pages/Home/Home';
import { LearningPaht } from '../components/organims/LearningPath/LearningPath';
import { LoginPageNavbar } from '../auth/sesionPageNabvar/SesionPageNavbar';
import { Path } from '../components/organims/Path/Path';
import { Profile } from '../components/organims/Profile/Profile';
import { RegisterPageNavbar } from '../auth/registerPageNavbar/ResgisterPageNavbar';
import { ResourcesPage } from '../components/organims/ResourcesPage/ResourcesPage';
import { Sidebar } from '../components/molecules/Sidebar/Sidebar';

export const AppRoutes = () => {
  const [isLogged, setIsLogged] = useState(false);
  const [courseData, setCourseData] = useState({});
  const [idVideo, setIdVideo] = useState(null);
  const [currentUrl, setCurrentUrl] = useState('');

  const handleIsLogged = (response) => {
    setIsLogged(response);
  };

  useEffect(() => {
    if (!courseData.content) {
      fetch('https://regresemos-cms.herokuapp.com/api/auth/course')
        .then((response) => response.json())
        .then((data) => setCourseData(data))
        .catch((error) => console.error(error));
    }
  }, []);

  return (
    <>
      <Routes>
        {/* //TODO routes Public */}

        <Route path="*" element={<Navigate to={PrivateRoutes.DASHBOARD} />} />

        <Route path="/" element={<Navigate to={PublicRoutes.HOME} />} />

        <Route path={PublicRoutes.LOGIN} element={<LoginPageNavbar />} />
        <Route path={PublicRoutes.REGISTER} element={<RegisterPageNavbar />} />
        <Route path={PublicRoutes.HOME} element={<Home />} index />

        {/* //TODO routes Private */}
        <Route element={<AuthGuards handleIsLogged={handleIsLogged} />}>
          <Route paht="/" element={<Navigate to={PrivateRoutes.DASHBOARD} />} />
          <Route paht="*" element={<Navigate to={PrivateRoutes.DASHBOARD} />} />
          <Route path={PrivateRoutes.PROFILE} element={<Profile />} />
          <Route path={PrivateRoutes.DASHBOARD} element={<Dashboard />} />

          <Route
            path={PrivateRoutes.PATH}
            element={
              <Path
                courseData={{
                  name: courseData.name,
                  endpoint: courseData.endpoint,
                }}
                idVideo={idVideo}
                setCurrentUrl={setCurrentUrl}
              />
            }
          />

          <Route
            path={`${PrivateRoutes.LEARNINGPATH}${currentUrl}`}
            element={
              <LearningPaht
                courseData={courseData}
                setIdVideo={setIdVideo}
                setCurrentUrl={setCurrentUrl}
                idVideo={idVideo}
              />
            }
          />

          <Route path={PrivateRoutes.RESOURCE} element={<ResourcesPage />} />
          <Route path={PrivateRoutes.FAVORITE} element={<Favorite />} />
        </Route>
      </Routes>
      {isLogged ? <Sidebar /> : ''}
    </>
  );
};
