import './page.css'; 

const PrivacyPolicy = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="page-wrapper">
        {/* --- Header Section with Logo --- */}
        <header className="policy-header">
            <div className="container">
                <img src="/logo.png" alt="2048 Game Logo" className="policy-logo" />
            </div>
        </header>

        {/* --- Main Content Section --- */}
        <main className="container policy-container mb-3">
            <div className="policy-content">
                <h1>Privacy Policy</h1>
                <p className="lead-text">Last Updated: January 1, 2025</p>
                <p>
                Thank you for playing the 2048 Game on Linea ("we," "us," or "our"). We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about this privacy notice or our practices with regard to your personal information, please contact us via our support channels.
                </p>
                <p>
                This privacy policy describes how we might use your information if you:
                </p>
                <ul>
                    <li>Visit our website at 2048game.site</li>
                    <li>Connect your Web3 wallet to our decentralized application (dApp)</li>
                    <li>Engage with us in other related ways ― including any sales, marketing, or events</li>
                </ul>

                {/* --- Crucial Web3 Section --- */}
                <div className="blockchain-notice">
                <h3>🚨 Important Blockchain Notice</h3>
                <p>
                    Please be aware that your transactions are recorded on the Linea public blockchain. 
                    **Information stored on the blockchain is public, immutable, and permanent.** We do not control and cannot delete information that is written to the blockchain, such as your wallet address and transaction data related to high scores.
                </p>
                </div>

            <h2>1. Information We Collect</h2>

            <h3>A. Personal Information You Disclose to Us</h3>
            <p>We collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and Services, when you participate in activities on the Website (such as submitting a high score), or otherwise when you contact us.</p>
            <p>The personal information that we collect depends on the context of your interactions with us and the Website, the choices you make, and the products and features you use. The personal information we collect may include the following:</p>
            <ul>
                <li>**Crypto Wallet Addresses:** To interact with our dApp, you must connect a Web3 wallet (e.g., MetaMask). We collect your public wallet address to identify your account and associate it with your in-game scores.</li>
                <li>**Support Data:** If you contact us for support, we may collect your email address or social media handle and the contents of your message.</li>
            </ul>

            <h3>B. Information Automatically Collected</h3>
            <p>We automatically collect certain information when you visit, use, or navigate the Website. This information does not reveal your specific identity (like your name or contact information) but may include device and usage information, such as:</p>
            <ul>
                <li>IP address (Internet Protocol address)</li>
                <li>Browser type and version</li>
                <li>Time zone setting and location</li>
                <li>Operating system and platform</li>
                <li>Other technology on the devices you use to access this Website</li>
            </ul>

            <h2>2. How We Use Your Information</h2>
            <p>We use personal information collected via our Website for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations.</p>
            <ul>
                <li>**To facilitate account creation and login process:** We use your wallet address to allow you to connect to the dApp without needing a traditional username and password.</li>
                <li>**To manage on-chain leaderboards:** Your wallet address is publicly associated with your high scores on the smart contract.</li>
                <li>**To protect our Services:** We may use your information as part of our efforts to keep our Website safe and secure (e.g., for fraud monitoring and prevention).</li>
                <li>**To improve user experience:** We may use aggregated, non-identifiable data to analyze usage trends and improve game performance.</li>
            </ul>

            <h2>3. Sharing Your Information</h2>
            <p>We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations.</p>
            <p>We may process or share your data that we hold based on the following legal basis:</p>
            <ul>
                 <li>**Public Blockchain Data:** As mentioned, your wallet address and game transaction history will be publicly available on the Linea blockchain explorer.</li>
                <li>**Service Providers:** We may share technical data (like IP addresses) with third-party vendors, service providers, contractors, or agents who perform services for us or on our behalf and require access to such information to do that work (e.g., website hosting, analytics providers).</li>
            </ul>

            <h2>4. Cookies and Tracking Technologies</h2>
            <p>We may use cookies and similar tracking technologies (like web beacons and pixels) to access or store information. Specific information about how we use such technologies and how you can refuse certain cookies is set out in our Cookie Policy.</p>

            <h2>5. Data Security</h2>
            <p>We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorized third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information.</p>

            <h2>6. Your Privacy Rights</h2>
            <p>Depending on your location (such as the EEA, UK, or California), you may have certain rights regarding your personal information, such as the right to access, correct, or delete the data we hold about you. To make such a request, please contact us through our support channels. Note that we cannot delete data already written to the blockchain.</p>

            <h2>7. Changes to This Policy</h2>
            <p>We may update this privacy policy from time to time. The updated version will be indicated by an updated "Last updated" date and the updated version will be effective as soon as it is accessible. We encourage you to review this privacy policy frequently to be informed of how we are protecting your information.</p>

            <h2>8. Contact Us</h2>
            <p>If you have questions or comments about this policy, you may contact us by visiting our Support page.</p>
            </div>
        </main>

        {/* --- Footer Section with Copyright --- */}
        <footer className="policy-footer alt-bg">
            <div className="container">
                <p className="copyright">
                    © {currentYear} 2048 Game on Linea. All rights reserved. | <a href="https://app.2048game.site/">Back to Game</a>
                </p>
            </div>
        </footer>
    </div>
  );
};

export default PrivacyPolicy;