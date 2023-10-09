import React from 'react'
import '/fly/src/index.css'

function Subscribe() {
  return (
    <div className='subscribe section'>
    <div className='sectionContainer container'>
     <h2>Subscribe NewsLetters and get Latest News</h2>
     <div className='inputDiv flex'>
      <input type='text' placeholder='enter your email address'/>
      <button className='btn'> subscribe</button>
     </div>
    </div>

    </div>
  )
}

export default Subscribe;