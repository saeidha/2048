
import './theme.css'; 

const LandingPage = () => {
  const APP_URL = "https://app.2048game.site/";
  const PRIVACY_URL = "https://privacy-policy.2048game.site/";
  const SUPPORT_URL = "https://support.2048game.site/";

  return (
    <div className="landing-page-container">
      {/* Optional: If Header contains navigation, keep it. Otherwise remove. */}
      {/* <Header /> */}

      {/* --- Hero Section --- */}
      <section className="hero-section">
        <div className="hero-background-image">
          <img src="/banner.png" alt="2048 Game Banner" />
          <div className="hero-overlay"></div>
        </div>
        
        <div className="hero-content container">
          <div className="logo-container">
            <img src="/logo.png" alt="2048 Game Logo" className="brand-logo" />
          </div>
          {/* Note: The highlight span keeps the Linea blue color for emphasis */}
          <h1 className="hero-title">Merge to 2048. <span className="highlight">Prove it on-chain.</span></h1>
          <h2 className="hero-subtitle">
            The classic 2048 gameplay you know, supercharged by Linea zkEVM. 
            Compete globally with immutable scores or challenge your friends directly. 
            Ultra-low gas, high-stakes bragging rights.
          </h2>
          <div className="cta-group">
            {/* Removed Leaderboard button, only Launch App remains */}
            <a href={APP_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary">LAUNCH APP</a>
          </div>
        </div>
      </section>

      {/* --- Features Section 1 (Why Linea) --- */}
      <section className="content-section alt-bg">
        <div className="container two-column-grid">
          <div className="text-block">
            <h2>Powered by <span className="linea-purple">Linea zkEVM</span>.</h2>
            <p className="lead-text">We chose Linea to give you the best of both worlds: Ethereum-grade security and lightning-fast, near-zero cost transactions.</p>
          </div>
          <ul className="feature-list">
            <li>
              <strong>⚡ No Lag:</strong> Smooth, responsive gameplay.
            </li>
            <li>
              <strong>⛽ Micro-Gas:</strong> Submitting your high score to the blockchain costs pennies, not dollars.
            </li>
            <li>
              <strong>🔒 Secured by Math:</strong> Your achievements are verified by zero-knowledge proofs.
            </li>
          </ul>
        </div>
      </section>

      {/* --- Features Section 2 (Competition) --- */}
      <section className="content-section">
        <div className="container two-column-grid reverse-mobile">
          <ul className="feature-list">
            <li>
              <strong>🛡️ Cheat-Proof:</strong> Smart contracts verify every move.
            </li>
            <li>
              <strong>📜 Permanent Record:</strong> Your legacy on-chain holds forever.
            </li>
          </ul>
          <div className="text-block">
            <h2>Immutable Glory.</h2>
            <p>Forget easily faked screenshots. In this arena, your skill is cryptographically proven. When you hit a new high score, you submit a transaction to Linea, permanently etching your achievement onto the blockchain global leaderboard.</p>
          </div>
        </div>
      </section>

      {/* --- Features Section 3 (Social) --- */}
      <section className="content-section alt-bg">
        <div className="container">
          <div className="center-text-block mb-2">
            <h2>Settle the Score with Friends.</h2>
            <p>2048 game is better when you’re beating someone you know. Connect your wallet to find friends, create private leagues, and track head-to-head stats.</p>
          </div>
           <div className="feature-cards-grid">
              <div className="feature-card">
                  <h3>🤝 Direct Challenges</h3>
                  <p>Send a "beat my score" challenge link to a rival.</p>
              </div>
              <div className="feature-card">
                  <h3>📊 Friend Leaderboards</h3>
                  <p>Filter the rankings to see who among your circle is the true puzzle master.</p>
              </div>
           </div>
        </div>
      </section>

      {/* --- How To Play Section --- */}
      <section className="content-section">
        <div className="container">
          <h2 className="text-center mb-3">How to Stack.</h2>
          <div className="steps-grid">
            <div className="step-card">
              <div className="step-number">1</div>
              <h3>Connect</h3>
              <p>Connect your Web3 wallet (like MetaMask) and switch to the Linea network.</p>
            </div>
            <div className="step-card">
              <div className="step-number">2</div>
              <h3>Merge</h3>
              <p>Play the classic game. Slide tiles to merge matching numbers. 2 becomes 4... aim for the 2048 tile.</p>
            </div>
            <div className="step-card">
              <div className="step-number">3</div>
              <h3>Submit</h3>
              <p>Hit a personal best? Sign a lightning-fast Linea transaction to mint your score.</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- Footer CTA Section --- */}
      <footer className="footer-section alt-bg">
        <div className="container text-center">
          <h2>Ready to test your mind against the chain?</h2>
          <div className="cta-group mb-3 mt-2">
             {/* Note: The footer button keeps the original primary Linea color */}
             <a href={APP_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-large">LAUNCH APP</a>
          </div>
          
          <div className="footer-links">
            <a href={PRIVACY_URL} target="_blank" rel="noopener noreferrer">Privacy Policy</a>
            <span className="separator">|</span>
            <a href={SUPPORT_URL} target="_blank" rel="noopener noreferrer">Support</a>
          </div>
          <p className="copyright">© 2025 2048 game. Built on Linea. | 2048game.site</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;