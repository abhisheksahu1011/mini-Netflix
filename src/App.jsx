import React from 'react'
import Home from './Pages/Home';
import Player from './Pages/Player'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavScrollExample from './Components/NavBar';
import NotFound from './Pages/NotFound';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavScrollExample />

        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/action2' element={<Player/>} />
          <Route path='*' element={<NotFound/>} />

        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
