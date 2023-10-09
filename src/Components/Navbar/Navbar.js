import React, { useEffect, useState } from 'react';
import '/fly/src/index.css';

import { SiConsul } from 'react-icons/si';
import { BsPhoneVibrate } from 'react-icons/bs';
import { AiOutlineGlobal } from 'react-icons/ai';
import { CgMenuGridO } from 'react-icons/cg';
import fly from '../../assets/fly1.png';

function Navbar() {
  const [data, setData] = useState(false);
  const [navbarClassName, setNavbarClassName] = useState('navbarTwo');

  const showNavbar = () => {
    setData(!data);
  };

  const addBgColor = () => {
    if (window.scrollY >= 10) {
      setNavbarClassName('navbarTwo navbar_with_Bg');
    } else {
      setNavbarClassName('navbarTwo');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', addBgColor);
    return () => {
      window.removeEventListener('scroll', addBgColor);
    };
  }, []); 

  return (
    <div className='navbar flex'>
      <div className='navbarOne flex'>
        <div className='icon'>
          <SiConsul />
        </div>
        <div className='flex none'>
          <li className='flex icon'>
            <BsPhoneVibrate /> Support
          </li>
          <li className='flex icon'>
            <AiOutlineGlobal /> Language
          </li>
        </div>

        <div className='atb flex'>
          <span>sign In</span>
          <span>sign out</span>
        </div>
      </div>

      <div className={navbarClassName}>
        <div className='logoDiv'>
          <img src={fly} alt='not found' className='Logo' />
        </div>

        {data && (
          <div className='navbarMenu'>
            <ul className='menu flex'>
              <li className='menuItem'>Home</li>
              <li className='menuItem'>About</li>
              <li className='menuItem'>Offers</li>
              <li className='menuItem'>Seats</li>
              <li className='menuItem'>Destinations</li>
            </ul>
            <button className='btn flex btnOne'>contact</button>
          </div>
        )}

        <div className='navbarMenu2'>
            <ul className='menu flex'>
              <li className='menuItem'>Home</li>
              <li className='menuItem'>About</li>
              <li className='menuItem'>Offers</li>
              <li className='menuItem'>Seats</li>
              <li className='menuItem'>Destinations</li>
            </ul>
            <button className='btn flex btnOne'>contact</button>
          </div>

        <button className='btn flex btnTwo'>contact</button>
        <div onClick={showNavbar} className='toggleIcon'>
          <CgMenuGridO className='icon' />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
