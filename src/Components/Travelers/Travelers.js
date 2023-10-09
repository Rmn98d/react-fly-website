import React from 'react'
import parisImg from '/fly/src/assets/paris.jpg'
import dubaiImg from '/fly/src/assets/dubai.jpg'
import newyorkImg from '/fly/src/assets/newyork.jpg'
import londonImg from '/fly/src/assets/london.jpg'


import traveler1 from '/fly/src/assets/traveler3.jpg'
import traveler2 from '/fly/src/assets/traveler2.jpg'
import traveler3 from '/fly/src/assets/traveler1.jpg'
import traveler4 from '/fly/src/assets/traveler4.jpg'


import '/fly/src/index.css';



const travelers = [
  {
    id: 1,
    destinationImage: parisImg,
    travelerImage: traveler1,
    travelerName: 'isratech',
    socialLink: '@isratech8',
  },
  {
    id: 2,
    destinationImage: dubaiImg,
    travelerImage: traveler2,
    travelerName: 'naresh lamer',
    socialLink: '@nareshlamer',
  },
  {
    id: 3,
    destinationImage: newyorkImg,
    travelerImage: traveler3,
    travelerName: 'Wilson Lindey',
    socialLink: '@wilsonlindey',
  },

  {
    id: 4,
    destinationImage: londonImg,
    travelerImage: traveler4,
    travelerName: 'nicole web',
    socialLink: '@nicoleweb',
  }

]


function Travelers() {
  return (
    <div className='travelers container section'>
      <div className='sectionContainer'>
        <h2>Top travelers of this month!</h2>


        <div className='travelersContainer grid'>
          {travelers.map(({id,destinationImage,travelerImage,travelerName,socialLink }) => {
            return (

              <div key={id} className='singleTraveler'>
                <img src={destinationImage} alt='paris' className='destinationImage' />

                <div className='travelersDetails'>

                  <div className='travelersPicture'>
                    <img src={travelerImage} alt='traveler img' className='travelerImage'></img>
                  </div>

                  <div className='travelerName'>
                    <span>{travelerName}</span>
                    <p>{socialLink}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Travelers