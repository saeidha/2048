import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import GamePage from './GamePage';
import SupportPage from './support';
import PrivacyPolicy from './PrivacyPolicy';

const AppRouter = () => {
  const host = window.location.host;

  if (host === 'app.2028game.site') {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<GamePage />} />
        </Routes>
      </Router>
    );
  } else if (host === 'support.2028game.site') {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<SupportPage />} />
        </Routes>
      </Router>
    );
  } else if (host === 'privacy-policy.2028game.site') {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<PrivacyPolicy />} />
        </Routes>
      </Router>
    );
  } else {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </Router>
    );
  }
};

export default AppRouter;
