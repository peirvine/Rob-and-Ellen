import React from 'react';
import Image from 'react-bootstrap/Image'

import er from '../../images/ellenandroblogo.png'

import './Footer.scss';

export default function Footer() {
  return (
    <div className="footer">
      <Image className="logo" src={er} />
      <div id="wordBox">
        <p className="firstline">	&copy;{new Date().getFullYear()} Rob and Ellen</p>
        <p>Designed inspired by Zola &bull; Made with Love by <a href="https://minnedev.com" target="_blank" rel="noreferrer">Peter</a></p>
      </div>
    </div>
  )
}
