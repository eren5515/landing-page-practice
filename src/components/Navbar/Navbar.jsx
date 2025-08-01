"use client"
import logo from "../../images/Logo.png";
import Image from "next/image";
import "@/components/Navbar/Navbar.scss";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="nav">
      <Link href="/" className="nav-logo">
        <Image src={logo} alt="Logo" /> 
      </Link>
      
      <button 
        className={`hamburger ${isMenuOpen ? 'active' : ''}`} 
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div className="nav-list desktop-menu">
        <Link href="/" className="nav-list-item text -sm -medium -secondary-color">
          Home
        </Link>
        <a className="nav-list-item text -sm -medium -secondary-color" href="">
          Features
        </a>
        <a className="nav-list-item text -sm -medium -secondary-color" href="">
          Community
        </a>
        <Link href="/blog" className="nav-list-item text -sm -medium -secondary-color">
          Blog
        </Link>
        <a className="nav-list-item text -sm -medium -secondary-color" href="">
          Pricing
        </a>
        <button className="custom-button text -sm -medium -white">
          Register Now →
        </button>
      </div>

      <div className={`mobile-menu ${isMenuOpen ? 'active' : ''}`}>
        <Link href="/" className="mobile-menu-item text -sm -medium -secondary-color" onClick={closeMenu}>
          Home
        </Link>
        <a className="mobile-menu-item text -sm -medium -secondary-color" href="" onClick={closeMenu}>
          Features
        </a>
        <a className="mobile-menu-item text -sm -medium -secondary-color" href="" onClick={closeMenu}>
          Community
        </a>
        <Link href="/blog" className="mobile-menu-item text -sm -medium -secondary-color" onClick={closeMenu}>
          Blog
        </Link>
        <a className="mobile-menu-item text -sm -medium -secondary-color" href="" onClick={closeMenu}>
          Pricing
        </a>
        <button className="custom-button text -sm -medium -white" onClick={closeMenu}>
          Register Now →
        </button>
      </div>

      {isMenuOpen && <div className="nav-overlay" onClick={closeMenu}></div>}
    </nav>
  );
}
