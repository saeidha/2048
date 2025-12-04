
import Header from './Header';
import './theme.css';

const SupportPage = () => {
  return (
    <div>
      <Header />
      <div style={{ padding: '2rem' }}>
        <h1>Support</h1>
        <p>Please fill out the form below and we will get back to you as soon as possible.</p>
        <form>
          <div style={{ marginBottom: '1rem' }}>
            <label htmlFor="email" style={{ display: 'block', marginBottom: '0.5rem' }}>Email</label>
            <input type="email" id="email" name="email" style={{ width: '100%', padding: '0.5rem' }} />
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <label htmlFor="content" style={{ display: 'block', marginBottom: '0.5rem' }}>Content</label>
            <textarea id="content" name="content" rows={10} style={{ width: '100%', padding: '0.5rem' }}></textarea>
          </div>
          <button type="submit" style={{ padding: '0.5rem 1rem', backgroundColor: 'var(--primary-color)', color: 'white', border: 'none', cursor: 'pointer' }}>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default SupportPage;
