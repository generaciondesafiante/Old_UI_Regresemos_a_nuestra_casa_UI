import { Navigate, Route, Routes } from 'react-router-dom';
import { RegisterPageNavbar } from '../auth/registerPageNavbar/ResgisterPageNavbar';
import { LoginPageNavbar } from '../auth/sesionPageNabvar/SesionPageNavbar';
import { Home } from '../pages/Home/Home';
import { PrivateRoutes, PublicRoutes } from '../models/routes';
import { AuthGuards } from '../guards/AuthGuards';
import { HomeViewFavorit } from '../components/organims/homeViewFavorit/HomeViewFavorit';
import { useEffect, useState } from 'react';
import { Sidebar } from '../components/molecules/Sidebar/Sidebar';
import { Profile } from '../components/organims/Profile/Profile';
import { ResourcesPage } from '../components/organims/ResourcesPage/ResourcesPage';
import { Path } from '../components/organims/Path/Path';
import { LearningPaht } from '../components/organims/LearningPath/LearningPath';
import { Dashboard } from '../components/organims/Dashboard/Dashboard';

export const AppRoutes = () => {
  const [isLogged, setIsLogged] = useState(false);
  const [videosData, setVideosData] = useState([]);
  const [idVideo, setIdVideo] = useState(1);

  const handleIsLogged = (response) => {
    setIsLogged(response);
  };

  useEffect(() => {
    fetch('http://localhost:8080/api/auth/videos')
      .then((response) => response.json())
      .then((data) => setVideosData(data))
      .catch((error) => console.error(error));
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
            element={<Path videosData={videosData} />}
          />

          <Route
            path={`${PrivateRoutes.LEARNINGPATH}/:curso/:${idVideo}`}
            element={
              <LearningPaht
                videosData={videosData}
                setIdVideo={setIdVideo}
                idVideo={idVideo}
              />
            }
          />

          <Route path={PrivateRoutes.RESOURCE} element={<ResourcesPage />} />
          <Route path={PrivateRoutes.FAVORITE} element={<HomeViewFavorit />} />
        </Route>
      </Routes>
      {isLogged ? <Sidebar /> : ''}
    </>
  );
};
