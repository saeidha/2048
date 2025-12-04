import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import GamePage from './GamePage';
import SupportPage from './support';
import PrivacyPolicy from './PrivacyPolicy';

const AppRouter = () => {
  const mainPage = import.meta.env.VITE_MAIN_PAGE || 'LANDING';

  let element: React.ReactElement;

  switch (mainPage) {
    case 'APP':
      element = <GamePage />;
      break;
    case 'SUPPORT':
      element = <SupportPage />;
      break;
    case 'PRIVACY':
      element = <PrivacyPolicy />;
      break;
    default:
      element = <LandingPage />;
      break;
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={element} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
