import React from 'react'
import './ProjectCard.css'

function ProjectCard({project}) {
  return (
    <div className='project-card'>
        <div className='project-info'>
        <label className='project-title'>{project.title}</label>
        <div className='project-links'>
            {project.demo&& (<a className='project-link' href={project.demo}>
                <div className='link-button'><i class="fi fi-bs-link-alt"></i></div>
            </a>)}
            {project.github&& (<a className='project-link' href={project.github}>
                <div className='link-button'>
                {/* <i class="devicon-github-original colored"></i> */}
                <i class="fi fi-brands-github"></i>
          </div>
            </a>)}
        </div>
        <p>{project.about}</p>
        <div className='project-tags'>
            {project.tags.map((tag) =>{
                return (<label className='tag'>{tag}</label>)
            })}
        </div>
        </div>
        <img src={project.image} className='project-photo'/>
    </div>
  )
}

export default ProjectCard