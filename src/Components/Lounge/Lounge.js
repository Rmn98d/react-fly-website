import '/fly/src/index.css';

import loungeImg from '/fly/src/assets/loungeImg.png'




function Lounge() {
  return (
    <div className='lounge container section'>
    <div className='sectionContainer '>
    
    <div className='imgDiv'>
     <img  className='loungeImg' src={loungeImg} alt="lounge img"/>
    </div>

    <div className='textDiv '>
     <h2>Unaccompained Minor Lounge</h2>
    </div>

    <div className='grids grid'>
     <div className='singleGrid'>
      <span className='gridTitle'>
      help through the airport 
      </span>
     <p>
      you can also call airlines from your phone and book a flight ticket to one of your favourite desigmnations
     </p>
    
     </div>

     <div className='singleGrid'>
      <span className='gridTitle'>
       Priority Boarding
      </span>
     <p>
      you can also call airlines from your phone and book a flight ticket to one of your favourite desigmnations
     </p>
    
     </div>

     <div className='singleGrid'>
      <span className='gridTitle'>
      care on the flight
      </span>
     <p>
      you can also call airlines from your phone and book a flight ticket to one of your favourite desigmnations
     </p>
    
     </div>

     <div className='singleGrid'>
      <span className='gridTitle'>
      Chauffeur-drive services
      </span>
     <p>
      you can also call airlines from your phone and book a flight ticket to one of your favourite desigmnations
     </p>
    
     </div>
    </div>

    </div>

    </div>
  )
}

export default Lounge