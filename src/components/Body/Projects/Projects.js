import React from 'react'
import Separator from '../../Common/Separator/Separator';
import { ProjectData } from '../../data/projects'
import ProjectCard from './ProjectCard';
import './Projects.css'

function Projects() {
    const data = ProjectData;
  return (
    <div className='projects'>
    <Separator/>
    <label className='section-title'>Some Things I've Built</label>
    <div>
        {data.map((project) => {
            return <ProjectCard project={project}/>
        })}
    </div>
    <div className='project-button'><a href="xyz">View All Projects</a></div>
    </div>
  )
}

export default Projects