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
          <div className="dashboard-grid">
            <div className="dashboard-cards-row">
              <div className="dashboard-card sales">
                <div className="dashboard-card-header">
                  <span className="dashboard-card-title">2200</span>
                  <span className="dashboard-card-label">Sales</span>
                </div>
                <div className="dashboard-card-footer">
                  <a href="#" className="dashboard-card-link">View All →</a>
                  <span className="dashboard-card-change positive">+20%</span>
                  <span className="dashboard-card-period">this month</span>
                </div>
              </div>
              <div className="dashboard-card orders">
                <div className="dashboard-card-header">
                  <span className="dashboard-card-title">4400</span>
                  <span className="dashboard-card-label">Orders</span>
                </div>
                <div className="dashboard-card-footer">
                  <a href="#" className="dashboard-card-link">View All →</a>
                  <span className="dashboard-card-change positive">+30%</span>
                  <span className="dashboard-card-period">this month</span>
                </div>
              </div>
              <div className="dashboard-card invoices">
                <div className="dashboard-card-header">
                  <span className="dashboard-card-title">6600</span>
                  <span className="dashboard-card-label">Invoices</span>
                </div>
                <div className="dashboard-card-footer">
                  <a href="#" className="dashboard-card-link">View All →</a>
                  <span className="dashboard-card-change positive">+60%</span>
                  <span className="dashboard-card-period">this month</span>
                </div>
              </div>
              <div className="dashboard-card payments">
                <div className="dashboard-card-header">
                  <span className="dashboard-card-title">8800</span>
                  <span className="dashboard-card-label">Payments</span>
                </div>
                <div className="dashboard-card-footer">
                  <a href="#" className="dashboard-card-link">View All →</a>
                  <span className="dashboard-card-change negative">+90%</span>
                  <span className="dashboard-card-period highlight">this month</span>
                </div>
              </div>
            </div>
            <div className="dashboard-main-row">
              <div className="dashboard-chart-card">
                <div className="dashboard-chart-title">Sales</div>
                {/* Platzhalter für Chart */}
                <div className="dashboard-bar-chart">
                  <div className="bar-group">
                    <div className="bar" style={{height: '30%'}}></div>
                    <span className="bar-label">Sales</span>
                  </div>
                  <div className="bar-group">
                    <div className="bar" style={{height: '60%'}}></div>
                    <span className="bar-label">Visits</span>
                  </div>
                  <div className="bar-group">
                    <div className="bar" style={{height: '80%'}}></div>
                    <span className="bar-label">Income</span>
                  </div>
                  <div className="bar-group">
                    <div className="bar" style={{height: '100%'}}></div>
                    <span className="bar-label">Revenue</span>
                  </div>
                </div>
              </div>
              <div className="dashboard-social-card">
                <div className="social-title">Social Media</div>
                <ul className="social-list">
                  <li>
                    <span className="icon twitter"></span>
                    Twitter Follower
                    <span className="amount">12,300</span>
                  </li>
                  <li>
                    <span className="icon youtube"></span>
                    YouTube Abonnenten
                    <span className="amount">8,900</span>
                  </li>
                  <li>
                    <span className="icon discord"></span>
                    Discord Member
                    <span className="amount">2,150</span>
                  </li>
                  <li>
                    <span className="icon tiktok"></span>
                    TikTok Follower
                    <span className="amount">5,600</span>
                  </li>
                  <li>
                    <span className="icon instagram"></span>
                    Instagram Follower
                    <span className="amount">7,800</span>
                  </li>
                </ul>
              </div>
              <div className="dashboard-promo-card">
                <div className="promo-title">Design<br/>Smarter<br/>Faster<br/><span className="promo-highlight">Make things<br/>Better</span></div>
                <button className="promo-order">Order Now →</button>
              </div>
            </div>
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
