import React from 'react'
import Home from './components/Home'
import {Routes, Route} from 'react-router-dom';
import ProjectsArchive from './components/ProjectsArchive';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/projects' element={<ProjectsArchive/>}/>
    </Routes>
  )
}

export default App