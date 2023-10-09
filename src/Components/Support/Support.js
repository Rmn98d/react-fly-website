import React from 'react'
import PlaneWindow from '../../assets/planeWindow.png'
import '/fly/src/index.css';




function Support() {
  return (
    <div className='support container section'> 
      <div className='sectionContainer'>

        <div className='titlesDiv'>
          <small>travel support</small>
          <h1>plan yor travel with confidence</h1>
          <p>find help with booking and travel plans, see what to expect along the journey</p>
        </div>

        <div className='infoDiv '>
        
         <div className='textDiv grid'>

          <div className='singleInfo'>
            <span className='number'>01</span>
            <h4>travel requirement for Dubai</h4>
            <p>find help with booking and travel plans, see what to expect along the journey to your favourite designation</p>
          </div>
        
       
        
          <div className='singleInfo'>
            <span className='number colorOne'>02</span>
            <h4>Chaffeur service at your arrival</h4>
            <p>find help with booking and travel plans, see what to expect along the journey to your favourite designation</p>
          </div>
     
      
       
          <div className='singleInfo'>
            <span className='number colorTwo'>03</span>
            <h4>Multi-risk travel insurance </h4>
            <p>find help with booking and travel plans, see what to expect along the journey to your favourite designation</p>
          </div>
         </div>

         <div className='imgDiv'>
        <img className='' src={PlaneWindow} alt='img'/>
       </div>

        </div>

       
      </div>
    </div>
  )
}

export default Support;