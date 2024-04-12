import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Information } from './information/information'
//import { Notes } from '../public/notes'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'

function App() {
  const [username, setUsername] = useState(localStorage.getItem('userLoggedIn') || '')

  return (
    <BrowserRouter>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      <Routes>
        <Route path='/information' element={<Information />} />
        //<Route path='/notes' element={<Notes />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

function NotFound() {
  return <main className='pageNotFound'>404: Page not found. How did you end up here?</main>;
}

export default App
