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
import { ForgetPasswordPage } from '../pages/ForgetPasswordPage/ForgetPasswordPage';
import { ResetPasswrodPage } from '../pages/ResetPasswordPage/ResetPasswordPage';
import { ChangePasswordProfile } from '../components/organims/ChangePasswordProfile/ChangePasswordProfile';

export const AppRoutes = () => {
  const [isLogged, setIsLogged] = useState(false);
  const [coursesData, setCoursesData] = useState([
    {
      name: '',
      endpoint: '',
      currentVideo: null,
      content: [],
    },
  ]);
  const [currentCourseURL, setCurrentCourseURL] = useState('');

  const handleIsLogged = (response) => {
    setIsLogged(response);
  };

  useEffect(() => {
    if (coursesData[0].content.length === 0) {
      fetch('https://regresemos-cms.herokuapp.com/api/course/coursedata')
        .then((response) => response.json())
        .then((data) => {
          setCoursesData(data);
        })
        .catch((error) => console.error(error));
    }
  }, []);

  return (
    <>
      <Routes>
        {/* // ----- TODO routes Public */}
        <Route path="*" element={<Navigate to={PrivateRoutes.DASHBOARD} />} />
        <Route path="/" element={<Navigate to={PublicRoutes.HOME} />} />
        <Route path={PublicRoutes.LOGIN} element={<LoginPageNavbar />} />
        <Route path={PublicRoutes.REGISTER} element={<RegisterPageNavbar />} />
        <Route path={PublicRoutes.HOME} element={<Home />} index />
        <Route
          path={PublicRoutes.FORGETPASSWORD}
          element={<ForgetPasswordPage />}
        />
        <Route
          path={PublicRoutes.RESETPASSWORD}
          element={<ResetPasswrodPage />}
        />

        {/* // ----- TODO routes Private */}
        <Route element={<AuthGuards handleIsLogged={handleIsLogged} />}>
          <Route path="/" element={<Navigate to={PrivateRoutes.DASHBOARD} />} />
          <Route path="*" element={<Navigate to={PrivateRoutes.DASHBOARD} />} />
          <Route path={PrivateRoutes.PROFILE} element={<Profile />} />
          <Route path={PrivateRoutes.DASHBOARD} element={<Dashboard />} />
          <Route
            path={PrivateRoutes.CHANGEPASSWORDPROFILE}
            element={<ChangePasswordProfile />}
          />

          <Route
            path={PrivateRoutes.PATH}
            element={
              <Path
                coursesData={coursesData}
                setCoursesData={setCoursesData}
                setCurrentCourseURL={setCurrentCourseURL}
              />
            }
          />

          <Route
            path={`${PrivateRoutes.LEARNINGPATH}${currentCourseURL}`}
            element={
              <LearningPaht
                coursesData={coursesData}
                setCoursesData={setCoursesData}
                currentCourseURL={currentCourseURL}
                setCurrentCourseURL={setCurrentCourseURL}
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
