import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <div className="footer">
      <p className="firstline">	&copy;{new Date().getFullYear()} Rob and Ellen</p>
      <p>Designed inspired by Zola &bull; Made with Love by <a href="https://minnedev.com" target="_blank" rel="noreferrer">Peter</a></p>
    </div>
  )
}
