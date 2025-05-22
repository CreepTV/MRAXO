import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="dashboard">
      <header>
        <h1>DevFirma Dashboard</h1>
        <nav>
          <ul>
            <li><a href="#about">Über uns</a></li>
            <li><a href="#projects">Projekte</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#team">Team</a></li>
            <li><a href="#admin">Admin-Konsole</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <section id="about">
          <h2>Über uns</h2>
          <p>Willkommen bei DevFirma! Wir sind ein innovatives Entwicklungsunternehmen.</p>
        </section>
        <section id="projects">
          <h2>Projekte</h2>
          <p>Hier sind einige unserer neuesten Projekte.</p>
        </section>
        <section id="services">
          <h2>Services</h2>
          <p>Wir bieten eine Vielzahl von Dienstleistungen an, um Ihre Bedürfnisse zu erfüllen.</p>
        </section>
        <section id="team">
          <h2>Team</h2>
          <p>Lernen Sie unser talentiertes Team kennen.</p>
        </section>
        <section id="admin">
          <h2>Admin-Konsole</h2>
          <p>Verwalten Sie Ihre Einstellungen und Daten hier.</p>
        </section>
      </main>
      <footer>
        <p>&copy; 2025 DevFirma. Alle Rechte vorbehalten.</p>
      </footer>
    </div>
  )
}

export default App
