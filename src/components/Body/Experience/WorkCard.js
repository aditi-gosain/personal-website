import React from 'react'
import './WorkCard.css'

function WorkCard({item}) {
  return (
    <div className='work-card'>
        <img src={item.companyLogo} className='work-logo' alt='company-logo'/>
        <div className='work-info'>
            <label className='company-designation'>{item.designation}</label>
            <label className='company-name'>{item.company}</label>
            <div className='work-dates'>
                <label>{item.dateJoining}</label> - <label>{item.dateEnd}</label>
            </div>
            <div className='work-desc'>
                <p>{item.work}</p>
            </div>
        </div>
    </div>
  )
}

export default WorkCard