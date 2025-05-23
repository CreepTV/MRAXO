import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

// Hinweis: Fügen Sie im <head> Ihrer index.html Folgendes hinzu:
// <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">

function App() {
  const [activeSection, setActiveSection] = useState('dashboard')
  const [searchTerm, setSearchTerm] = useState('')

  const handleSearch = (event) => {
    setSearchTerm(event.target.value.toLowerCase())
  }

  const highlightText = (text) => {
    if (!searchTerm) return text
    const regex = new RegExp(`(${searchTerm})`, 'gi')
    return text.replace(regex, '<span class="highlight">$1</span>')
  }

  const sections = [
    { id: 'dashboard', title: 'Dashboard', content: '...' },
    { id: 'about-us', title: 'Über uns', content: 'Willkommen bei DevFirma! Wir sind ein innovatives Entwicklungsunternehmen.' },
    { id: 'projects', title: 'Projekte', content: 'Hier finden Sie eine Übersicht unserer aktuellen und abgeschlossenen Projekte.' },
    { id: 'services', title: 'Services', content: 'Wir bieten eine Vielzahl von Dienstleistungen an, um Ihre Anforderungen zu erfüllen.' },
    { id: 'team', title: 'Team', content: 'Lernen Sie unser talentiertes und engagiertes Team kennen.' },
    { id: 'admin-console', title: 'Admin-Konsole', content: 'Verwalten Sie Ihre Einstellungen und Benutzerrechte in der Admin-Konsole.' }
  ]

  const filteredSections = searchTerm
    ? sections.filter(section =>
        section.title.toLowerCase().includes(searchTerm) || section.content.toLowerCase().includes(searchTerm)
      )
    : sections

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
          <input
            type="text"
            className="search-bar"
            placeholder="Suche..."
            value={searchTerm}
            onChange={handleSearch}
          />
          <div className="user-info">
            <img src={reactLogo} alt="User Avatar" className="user-avatar" />
            <span>Benutzer</span>
          </div>
        </header>
        {filteredSections.map(section => (
          <section
            key={section.id}
            id={section.id}
            style={{ display: 'block' }}
            dangerouslySetInnerHTML={{ __html: `<h2>${highlightText(section.title)}</h2><p>${highlightText(section.content)}</p>` }}
          />
        ))}
      </main>
    </div>
  )
}

export default App
