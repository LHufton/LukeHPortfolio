import React, { useEffect } from 'react'
import { useForm, ValidationError } from '@formspree/react'
import './App.css'
import Navbar from './components/Navbar'
import Lead from './components/Lead'
import About from './components/About'
import Experience from './components/Experience'
import Project from './components/Project'
import Skill from './components/Skill'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Send me an email</h1>
        <ContactForm />
      </header>
    </div>
  )
}
;<React.StrictMode>
  <Navbar />
  <Lead />
  <About />
  <Experience />
  <Project />
  <Skill />
  <Contact />
  <Footer />
</React.StrictMode>

function ContactForm() {
  const [state, handleSubmit] = useForm('xrgwqjoj')
  if (state.succeeded) {
    return <p>Thanks for joining!</p>
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email Address</label>
      <input id="email" type="email" name="email" />
      <ValidationError prefix="Email" field="email" errors={state.errors} />

      <label htmlFor="message">Message</label>
      <textarea id="message" name="message" />
      <ValidationError prefix="Message" field="message" errors={state.errors} />

      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
  )
}

export default App
