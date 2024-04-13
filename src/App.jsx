import { useState } from 'react'
import React from 'react'
import { Information } from './information/information'
import { Notes } from './notes/notes'
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import './App.css'

function App() {
  
  return (
    <BrowserRouter>
      <header className='container-fluid'>
        <nav className='navbar'>
          <menu className='navbar-nav'>
            <NavLink className='nav-link' to='information'>
              Information
            </NavLink>
            <NavLink className='nav-link' to='notes'>
              Notes
            </NavLink>
          </menu>
        </nav>
      </header>

      <Routes>
        <Route path='/information' element={<Information />} />
        <Route path='/notes' element={<Notes />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

function NotFound() {
  return <main className='pageNotFound'>404: Page not found. How did you end up here?</main>;
}

export default App
