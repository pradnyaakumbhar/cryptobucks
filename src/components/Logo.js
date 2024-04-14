import React from 'react';
import { Link } from 'react-router-dom';
import logoSvg from '../assets/logo.svg';

const Logo = () => {
  return (
    <Link
      to="/"
      className="absolute top-6 left-6 [text-decoration:none] text-lg text-cyan flex items-center"
    >
      <img src={logoSvg} alt="CryptoBucks" />
      <span>CryptoBucks</span>
    </Link>
  );
};

export default Logo;
