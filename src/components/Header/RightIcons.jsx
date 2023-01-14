import React from 'react';
import { FaUser, FaShoppingCart, FaHeart } from 'react-icons/fa' 

const RightIcons = () => {
  return (
    <div className='right-icons'>
      <div className='icons'>
        <FaUser className='icon-img'/>
        <span>Sign In</span>
      </div>
      <div className='icons'>
        <FaShoppingCart className='icon-img' />
        <span>Shopping</span>
      </div>
      <div className='icons'>
        <FaHeart className='icon-img' />
        <span>Favourite</span>
      </div>
    </div>
  );
}

export default RightIcons;
