import React from 'react'
import './Footer.css';
// import {FontAwesomeIcon} from "fontawesome/fa";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/fontawesome-free-solid';

const Footer = () => {
  return (
    <div className='footer'>
      <h4>Made with <FontAwesomeIcon className='color' icon={faHeart} /> by sheffalee</h4>

      
    </div>
  )
}

export default Footer;
