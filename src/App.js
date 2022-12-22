import React from 'react'
import Home from './components/Home'
import {Routes, Route} from 'react-router-dom';
import ProjectArchive from './components/ProjectArchive';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/projects-archive' element={<ProjectArchive/>}/>
    </Routes>
  )
}

export default App