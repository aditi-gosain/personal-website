import React from 'react'
import './ArchiveRow.css'

// function ArchiveRow({project}){
//     return(
//     <div className='archive-row'>
//         <p>{project.year}</p>
//         <p>{project.title}</p>
//         <div className='project-techstack'>
//             {project.techstack.map((tag) =>{
//                 return (<label className='tag'>{tag}</label>)
//             })}
//         </div>
//         <div className='project-links'>
//             {project.github&& (<a className='project-link' href={project.github}>
//                 <div className='link-button'>
//                 <i class="fi fi-brands-github"></i>
//           </div>
//             </a>)}
//             {project.demo&& (<a className='project-link' href={project.demo}>
//                 <div className='link-button'><i class="fi fi-bs-link-alt"></i></div>
//             </a>)}
//         </div>
//     </div>
//     )
// }

function ArchiveRow({project}){
    return(
    <tr className='archive-row'>
        <td>{project.year}</td>
        <td className='project-name'>{project.title}</td>
        <td className='project-techstack'>
            {project.techstack.map((tag, index) =>{
                return (<label>{(index? ", ": "") + tag}</label>)
            })}
        </td>
        <td className='project-links'>
            {project.github&& (<a className='project-link' href={project.github}>
                <div className='link-button'>
                <i class="fi fi-brands-github"></i>
          </div>
            </a>)}
            {project.demo&& (<a className='project-link' href={project.demo}>
                <div className='link-button'><i class="fi fi-bs-link-alt"></i></div>
            </a>)}
        </td>
    </tr>
    )
}

export default ArchiveRow