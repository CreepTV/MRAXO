import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

// Hinweis: Fügen Sie im <head> Ihrer index.html Folgendes hinzu:
// <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">

function App() {
  return (
    <div className="dashboard">
      <aside className="sidebar">
        <h1>Conflict Studios</h1>
        <ul>
          <li>
            <a href="#dashboard">
              <span className="material-icons" style={{verticalAlign: 'middle', marginRight: '8px'}}>bar_chart</span>
              Sells
            </a>
          </li>
          <li>
            <a href="#about-us">
              <span className="material-icons" style={{verticalAlign: 'middle', marginRight: '8px'}}>info</span>
              Über uns
            </a>
          </li>
          <li>
            <a href="#projects">
              <span className="material-icons" style={{verticalAlign: 'middle', marginRight: '8px'}}>folder</span>
              Projekte
            </a>
          </li>
          <li>
            <a href="#services">
              <span className="material-icons" style={{verticalAlign: 'middle', marginRight: '8px'}}>build</span>
              Services
            </a>
          </li>
          <li>
            <a href="#team">
              <span className="material-icons" style={{verticalAlign: 'middle', marginRight: '8px'}}>group</span>
              Team
            </a>
          </li>
          <li>
            <a href="#admin-console">
              <span className="material-icons" style={{verticalAlign: 'middle', marginRight: '8px'}}>admin_panel_settings</span>
              Admin-Konsole
            </a>
          </li>
        </ul>
      </aside>
      <main className="main-content">
        <header className="main-header">
          <input type="text" className="search-bar" placeholder="Suche..." />
          <div className="user-info">
            <img src={reactLogo} alt="User Avatar" className="user-avatar" />
            <span>Benutzer</span>
          </div>
        </header>
        <section id="dashboard">
          <h2>Dashboard</h2>
          <div className="stats">
            <div className="card">2200 Sales</div>
            <div className="card">4400 Orders</div>
            <div className="card">6600 Invoices</div>
            <div className="card">8800 Payments</div>
          </div>
          <div className="charts">
            <div className="chart">Sales Chart</div>
            <div className="chart">Transactions Chart</div>
          </div>
        </section>
        <section id="about-us">
          <h2>Über uns</h2>
          <p>Willkommen bei DevFirma! Wir sind ein innovatives Entwicklungsunternehmen.</p>
        </section>
        <section id="projects">
          <h2>Projekte</h2>
          <p>Hier finden Sie eine Übersicht unserer aktuellen und abgeschlossenen Projekte.</p>
        </section>
        <section id="services">
          <h2>Services</h2>
          <p>Wir bieten eine Vielzahl von Dienstleistungen an, um Ihre Anforderungen zu erfüllen.</p>
        </section>
        <section id="team">
          <h2>Team</h2>
          <p>Lernen Sie unser talentiertes und engagiertes Team kennen.</p>
        </section>
        <section id="admin-console">
          <h2>Admin-Konsole</h2>
          <p>Verwalten Sie Ihre Einstellungen und Benutzerrechte in der Admin-Konsole.</p>
        </section>
      </main>
    </div>
  );
}

export default App;
