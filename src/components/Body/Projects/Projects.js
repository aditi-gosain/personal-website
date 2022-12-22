import {Link} from 'react-router-dom';
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
    <div className='project-button'><Link to="/projects-archive">View All Projects</Link></div>
    </div>
  )
}

export default Projects