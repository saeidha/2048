
import { Link } from 'react-router-dom';
import './Game2048.css';

const LandingPage = () => {
  return (
    <div style={{ textAlign: 'center', paddingTop: '50px' }}>
      <img src="/logo.png" alt="Logo" className="logo" />
      <h1>Welcome to Linea 2048</h1>
      <p>The classic 2048 game, on the Linea blockchain.</p>
      <div className="submit-game">
        <Link to="/app">Play Game</Link>
      </div>
    </div>
  );
};

export default LandingPage;
