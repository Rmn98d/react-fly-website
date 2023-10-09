import '/fly/src/index.css'
import {SlCalender} from 'react-icons/sl'
import {BsShieldCheck} from 'react-icons/bs'
import {BsBookmarkCheck} from 'react-icons/bs'



function Info() {
  return (
    <div className='info section'>
      <div className='infoContainer container'>
        <div className='titleDiv flex'>
          <h2> travel to make menories all around the world</h2>
        <button className='btn'>
          View All
        </button>
        </div>

     <div className='cardsDiv grid'>
     
      <div className='singleCard grid'>
        <div className='iconDiv flex'>
        <SlCalender className='icon'/>
        </div>  

      <span className='cardTitle'> Book & Relax</span>
      <p>you can also called airlines from your phones and book a flight ticket!</p>
      </div>


      <div className='singleCard grid'>
        <div className='iconDiv flex ColorOne'>
        <BsShieldCheck className='icon'/>
        </div>

      <span className='cardTitle'> Smart Check testingLibraryJestDom  </span>
      <p>you can also called airlines from your phones and book a flight ticket!</p>
      </div>

      <div className='singleCard grid'>
        <div className='iconDiv flex ColorTwo'>
        <BsBookmarkCheck className='icon'/>
        </div>

      <span className='cardTitle'>Save More</span>
      <p>you can also called airlines from your phones and book a flight ticket!</p>
      </div>

     </div>

      </div>
    </div>
  )
}

export default Info