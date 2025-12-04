
import './page.css';

const SupportPage = () => {
  return (
    <div className="page-wrapper">
      <header className="policy-header">
            <div className="container">
                <img src="/logo.png" alt="2048 Game Logo" className="policy-logo" />
            </div>
        </header>

      <main className="support-section">
        <div className="container support-container">
          {/* --- Intro Content --- */}
          <div className="support-header text-center">
            <h1>Get in Touch</h1>
            <p className="lead-text">
              Need help with the 2048 Game on Linea? Running into issues with transactions or gameplay? We're here to assist.
            </p>
          </div>

          {/* --- The Support Form --- */}
          <div className="form-wrapper alt-bg">
            <h2>Submit a Ticket</h2>
            <p className="form-intro">Please fill out the details below. We aim to respond within 24-48 hours.</p>
            
            <form>
              <div className="form-group">
                <label htmlFor="email" className="form-label">Your Email Address <span className="required">*</span></label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  className="form-input" 
                  placeholder="name@example.com" 
                  required 
                />
              </div>

              {/* Added Wallet Address Field - Crucial for Web3 Support */}
              <div className="form-group">
                <label htmlFor="wallet" className="form-label">Public Wallet Address (Optional)</label>
                <input 
                  type="text" 
                  id="wallet" 
                  name="wallet" 
                  className="form-input" 
                  placeholder="0x..." 
                />
                <small className="form-helper-text">If your issue is related to a transaction or high score, please provide your public Linea address.</small>
              </div>

              <div className="form-group">
                <label htmlFor=" subject" className="form-label">Subject <span className="required">*</span></label>
                <select id="subject" name="subject" className="form-input" required>
                    <option value="">Select an issue type...</option>
                    <option value="bug">Report a Game Bug</option>
                    <option value="transaction">Blockchain/Transaction Issue</option>
                    <option value="feedback">Feature Request / Feedback</option>
                    <option value="other">Other</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="content" className="form-label">Description <span className="required">*</span></label>
                <textarea 
                  id="content" 
                  name="content" 
                  rows={8} 
                  className="form-input textarea" 
                  placeholder="Please describe your issue in detail. Include browser, device, and transaction hashes if applicable."
                  required
                ></textarea>
              </div>

              <div className="form-submit-container">
                <button type="submit" className="btn btn-primary btn-large">Submit Ticket</button>
              </div>
            </form>
          </div>
        </div>
      </main>
      
      {/* Optional Footer */}
      {/* <Footer /> */}
    </div>
  );
};

export default SupportPage;