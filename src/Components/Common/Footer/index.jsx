import React from 'react'
import './style.css';
import { FaFacebook } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { BsGithub, BsInstagram, BsTwitterX } from 'react-icons/bs';

function Footer() {

  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }


  return (
    <div className='footer'>
       
      <div className='logo-heading'>
        <h2 className="logo" onClick={() => topFunction()}>
          CoinWatchr<span>.</span>
        </h2>
        <p>© 2023 <i>CoinWatchr</i>. All Rights Reserved.</p>
      </div> 
      <div className="footer-links">
        <p>Contact Us</p>
        <p>Privacy Policy</p>
        <p>Terms of Service</p>
      </div>
      <div className="footer-info">
        <p>Address : </p>
        <p>12/144 Main Street</p>
        <p>Near Zudio, WhiteField</p>
        <p>Banglore,Karnataka-06</p> 
      </div>
      <div className="social-links">
        <a href="https://facebook.com">
          <FaFacebook className="social-link" />
        </a>
        <a href="mailto:shameerbem@gmail.com">
          <MdEmail className="social-link" />
        </a>
        <a href="https://www.twitter.com">
          <BsTwitterX className="social-link" />
        </a>
        <a href="https://www.instagram.com">
          <BsInstagram className="social-link" />
        </a>
        <a href="https://github.com/ShemeerCoder-01">
          <BsGithub className="social-link" />
        </a>
      </div>
    </div>
  )
}

export default Footer;