import React from 'react'
import './ProjectArchive.css'
import MyHeader from '../MyHeader/MyHeader'
import Footer from '../Footer/Footer'
import ArchiveRow from './ArchiveRow/ArchiveRow'
import {ArchiveData} from '../data/archive'


function ProjectArchive() {
  const data = ArchiveData;
  // return (
  //   <div className="project-archive">
  //   <div>
  //       <MyHeader/>
  //   </div>
  //   <div className='archive-body'>
  //   <label className='archive-title'>Archive</label>
  //   <p className='archive-intro'>A list of things I have worked on</p>
  //   <div className='archive-header'>
  //     <p>Year</p>
  //     <p>Title</p>
  //     <p>Tech Stack</p>
  //     <p>Links</p>
  //   </div>
  //   <div>
  //       {data.map((project) => {
  //           return <ArchiveRow project={project}/>
  //       })}
  //   </div>
  //   </div>
  //   <div>
  //       <Footer/>
  //   </div>
  //   </div>
  // )

  return (
    <div className="project-archive">
    <div>
        <MyHeader/>
    </div>
    <div className='archive-body'>
    <label className='archive-title'>Archive</label>
    <p className='archive-intro'>A list of things I have worked on</p>
    <table className='archive-table'>
    <thead className='table-head'>
    <tr>
      <th>Year</th>
      <th>Title</th>
      <th className='project-techstack'>Tech Stack</th>
      <th>Links</th>
    </tr>
    </thead>
    <tbody>
        {data.map((project) => {
            return <ArchiveRow project={project}/>
        })}
    </tbody>
    </table>
    <div>
        <Footer/>
    </div>
    </div>
    </div>
  )
}

export default ProjectArchive

