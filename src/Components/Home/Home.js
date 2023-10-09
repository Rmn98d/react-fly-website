import React from 'react'
import '/fly/src/index.css';

import homeVideo from '../../assets/home.mp4'
import planeImg from '../../assets/plane.png'

function Home() {
  return (
    <div className='home flex container'>
    <div className='mainText'>
      <h1>Create Ever Lasting Memories With Us </h1>
    </div>


    <div className='planeImage flex'>
     <div className='videoDiv'>
      <video src={homeVideo} autoPlay muted loop className='video'></video>
     </div>

    <img src={planeImg} alt='planeImg' className='plane'></img>

    </div>

    </div>
  )
}

export default Home