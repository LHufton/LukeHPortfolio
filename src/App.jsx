import React from 'react'
import { useForm, ValidationError } from '@formspree/react'
import './App.css'

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
