import React from 'react';
import './FooterStyles.css';
const Footer = () => {
  return (
    <footer>
        <div className='footer-d-block'>
            <div className='footer-d-flex'>
                <div className='box'>
                    <h2>Quick Links</h2>
                    <ul>
                        <li>Dresses</li>
                        <li>Jeans</li>
                        <li>Tops</li>
                        <li>Accessories</li>
                        <li>Jackets</li>
                        <li>Shoes</li>
                    </ul>
                </div>
                <div className='box'>
                    <h2>Payments Method</h2>
                    <ul>
                        <li>Stripes</li>
                        <li>Paypal</li>
                        <li>Cash</li>
                    </ul>
                </div>
                <div className='box'><h2>Shipping Methods</h2>
                    <ul>
                        <li>Pepstore</li>
                        <li>CourierIt</li>
                        <li>Take Alot</li>
                    </ul>
                </div>
            </div>
            <div className='created-by'>Created by Mpho Johannes Tema | &copy; all rights reserved 2023</div>
        </div>   
    </footer>
  );
}

export default Footer;
