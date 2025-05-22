import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

// Hinweis: Fügen Sie im <head> Ihrer index.html Folgendes hinzu:
// <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">

function App() {
  const [activeSection, setActiveSection] = useState('dashboard')

  return (
    <div className="dashboard">
      <aside className="sidebar" style={{ position: 'fixed', top: 0, left: 0, width: '220px', height: '100vh', overflowY: 'auto' }}>
        <h1>Conflict Studios</h1>
        <ul>
          <li>
            <a href="#" onClick={() => setActiveSection('dashboard')}>
              <span className="material-icons" style={{verticalAlign: 'middle', marginRight: '8px'}}>bar_chart</span>
              Sells
            </a>
          </li>
          <li>
            <a href="#" onClick={() => setActiveSection('about-us')}>
              <span className="material-icons" style={{verticalAlign: 'middle', marginRight: '8px'}}>info</span>
              Über uns
            </a>
          </li>
          <li>
            <a href="#" onClick={() => setActiveSection('projects')}>
              <span className="material-icons" style={{verticalAlign: 'middle', marginRight: '8px'}}>folder</span>
              Projekte
            </a>
          </li>
          <li>
            <a href="#" onClick={() => setActiveSection('services')}>
              <span className="material-icons" style={{verticalAlign: 'middle', marginRight: '8px'}}>build</span>
              Services
            </a>
          </li>
          <li>
            <a href="#" onClick={() => setActiveSection('team')}>
              <span className="material-icons" style={{verticalAlign: 'middle', marginRight: '8px'}}>group</span>
              Team
            </a>
          </li>
          <li>
            <a href="#" onClick={() => setActiveSection('admin-console')}>
              <span className="material-icons" style={{verticalAlign: 'middle', marginRight: '8px'}}>admin_panel_settings</span>
              Admin-Konsole
            </a>
          </li>
        </ul>
      </aside>
      <main className="main-content" style={{ marginLeft: '220px', scrollBehavior: 'smooth' }}>
        <header className="main-header">
          <input type="text" className="search-bar" placeholder="Suche..." />
          <div className="user-info">
            <img src={reactLogo} alt="User Avatar" className="user-avatar" />
            <span>Benutzer</span>
          </div>
        </header>
        <section id="dashboard" style={{ display: activeSection === 'dashboard' ? 'block' : 'none' }}>
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
        <section id="about-us" style={{ display: activeSection === 'about-us' ? 'block' : 'none' }}>
          <h2>Über uns</h2>
          <p>Willkommen bei DevFirma! Wir sind ein innovatives Entwicklungsunternehmen.</p>
        </section>
        <section id="projects" style={{ display: activeSection === 'projects' ? 'block' : 'none' }}>
          <h2>Projekte</h2>
          <p>Hier finden Sie eine Übersicht unserer aktuellen und abgeschlossenen Projekte.</p>
        </section>
        <section id="services" style={{ display: activeSection === 'services' ? 'block' : 'none' }}>
          <h2>Services</h2>
          <p>Wir bieten eine Vielzahl von Dienstleistungen an, um Ihre Anforderungen zu erfüllen.</p>
        </section>
        <section id="team" style={{ display: activeSection === 'team' ? 'block' : 'none' }}>
          <h2>Team</h2>
          <p>Lernen Sie unser talentiertes und engagiertes Team kennen.</p>
        </section>
        <section id="admin-console" style={{ display: activeSection === 'admin-console' ? 'block' : 'none' }}>
          <h2>Admin-Konsole</h2>
          <p>Verwalten Sie Ihre Einstellungen und Benutzerrechte in der Admin-Konsole.</p>
        </section>
      </main>
    </div>
  )
}

export default App
