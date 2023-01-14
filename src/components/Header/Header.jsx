import React from 'react';
import Navbar from './Navbar';
import Search from './Search';
import Logo from './logo.png';
import './HeaderStyles.css';
import RightIcons from './RightIcons';
const Header = () => {
  return (
    <header className='header'>
      <div className='d-flex'>
        <div className='logo'>
            <img src={Logo} alt={Logo}/>
        </div>
        <Search />
        <RightIcons />
        </div>
        <Navbar />
    </header>
  );
}

export default Header;
