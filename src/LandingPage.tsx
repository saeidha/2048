
import './Game2048.css';
import Header from './Header';
import './theme.css';

const LandingPage = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <Header />
      <h1>Welcome to Linea 2048</h1>
      <p>The classic 2048 game, on the Linea blockchain.</p>
      <div className="submit-game">
        <a href="https://app.2048game.site/" target="_blank" rel="noopener noreferrer">Play Game</a>
      </div>
      <div style={{ marginTop: '20px' }}>
        <a href="https://support.2048game.site/" target="_blank" rel="noopener noreferrer" style={{ marginRight: '20px' }}>Support</a>
        <a href="https://privacy-policy.2048game.site/" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
      </div>
    </div>
  );
};

export default LandingPage;
