import React from 'react'
import '/fly/src/index.css';

import {HiOutlineLocationMarker} from 'react-icons/hi'
import {RiAccountPinCircleLine} from 'react-icons/ri'
import {SlCalender} from 'react-icons/sl'


function Search() {
  return (
    <div className='search container section'>
      <div className='sectionContainer grid'>
        <div className='btns flex'>
          <div className='singleBtn'>
            <span>Economy</span>
          </div>

          <div className='singleBtn'>
            <span>Bussines Class</span>
          </div>

          <div className='singleBtn'>
            <span>First Class</span>
          </div>

        </div>

        <div className='searchInputs flex'>
          <div className='singleInput flex' >
            <div className='iconDiv'>
              <HiOutlineLocationMarker  className='icon'/>
            </div>
            
            <div className='texts'>
              <h4>Location</h4>
              <input type='text' placeholder='wher do you want to go ?'></input>
            </div>
          </div>
      

       
          <div className='singleInput flex' >
            <div className='iconDiv'>
              <RiAccountPinCircleLine  className='icon'/>
            </div>
            
            <div className='texts'>
              <h4>Travelers</h4>
              <input type='text' placeholder='add guest '></input>
            </div>
          </div>
       
          <div className='singleInput flex' >
            <div className='iconDiv'>
              <SlCalender  className='icon'/>
            </div>
            
            <div className='texts'>
              <h4>check In </h4>
              <input type='text' placeholder='add date'></input>
            </div>
          </div>
        
       
          <div className='singleInput flex' >
            <div className='iconDiv'>
              <SlCalender  className='icon'/>
            </div>
            
            <div className='texts'>
              <h4>check out </h4>
              <input type='text' placeholder='add date'></input>
            </div>
          </div>
        

            <button className='btn btn-block flex'>search Flight</button>

       </div> 
      </div>

    </div>
  )
}

export default Search