import { useState } from 'react'
import { Information } from './information/information'
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import './App.css'

function App() {
  const [username, setUsername] = useState(localStorage.getItem('userLoggedIn') || '')

  return (
    <BrowserRouter>
      <NavLink className='nav-link' to='information'>
        Information
      </NavLink>

      <Routes>
        <Route path='/information' element={<Information />} />
        
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

function NotFound() {
  return <main className='pageNotFound'>404: Page not found. How did you end up here?</main>;
}

export default App
