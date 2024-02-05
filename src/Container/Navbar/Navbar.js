import React from 'react';
import myImage from './images/logo.svg';
import  Nav from './Nav.css';

export default function Navbar() {
  return (
    <div>
      <nav>
        <img src={myImage} alt="Description of the image" />
      </nav>

      <div>
        <ul>
            <li><a href='#'>Home</a></li>
            <li><a href='#'>About Me</a></li>
            <li><a href='#'>Projects</a></li>
            <li><a href='#'>Skills</a></li>
            <li><a href='#'>Tesimonials</a></li>
        </ul>
      </div>

    </div>

  );
}
