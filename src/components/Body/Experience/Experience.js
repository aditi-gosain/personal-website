import React from 'react'
import Separator from '../../Common/Separator/Separator'
import { WorkData } from '../../data/work'
import './Experience.css'
import WorkCard from './WorkCard';

function Experience() {
  const data = WorkData;
  return (
    <div className="experience">
      <Separator/>
      <label className='section-title'>Where I've Worked</label>
      <div className='work-list'>
      {data.map((item) => {
        return <WorkCard item={item}/>
      })}
      </div>
    </div>
  )
}

export default Experience