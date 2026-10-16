import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

function App() {
  return (
    <main className="page">
      <header className="topbar">
        <span className="spark">✳</span>
        <span className="top-label">A NEW WEBSITE IS ON ITS WAY</span>
      </header>

      <section className="hero">
        <div className="brand">
          <img className="logo wide" src="/4-united-humans/logos/logo.png" alt="4 United Humans logo" />

        </div>
        <div className="rule"><span>✦</span></div>
        <p className="eyebrow">A new chapter begins</p>
        <h1>Something meaningful is coming.</h1>
        <p className="description">We are preparing a new space. Please check back soon.</p>
        <div className="status"><i></i> LAUNCHING SOON</div>
        <a className="contact" href="mailto:annofbo.official@gmail.com">
          <span className="arrow">↗</span>
          <span><small>FOR ENQUIRIES</small><strong>annofbo.official@gmail.com</strong></span>
        </a>
      </section>

      <footer className="footer">
        <span>4 United Humans</span>
        <span className="footer-center">COMING SOON <b>✳</b></span>
        <span>© {new Date().getFullYear()}</span>
      </footer>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
