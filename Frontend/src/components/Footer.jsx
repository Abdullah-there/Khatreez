import React from 'react'
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import "../assets/Footer.css";
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='footer'>
        <div className='footer-main'>
            <h1>Khatreez</h1>
            <div className='main-div'> 
                <ul className='main-div-ul'>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/articles">Articles</NavLink></li>
                <li><NavLink to="/contact">Contact Us</NavLink></li>
                </ul>
            </div>
            <div className='opt'>
                    <a href="https://www.instagram.com/khatreeez" target="_blank" rel="noopener noreferrer" className='footer-opt'><InstagramIcon/></a>
                    <a href="https://www.facebook.com/your_facebook" target="_blank" rel="noopener noreferrer" className='footer-opt'><FacebookIcon/></a>
                    <a href="https://www.x.com/katreez" target="_blank" rel="noopener noreferrer" className='footer-opt'><XIcon/></a>
            </div>
        </div>
        <div className='footer-end'>
            <p>2025 All Rights Reserverd</p>
            <p></p>
        </div>
    </footer>
  )
}

export default Footer