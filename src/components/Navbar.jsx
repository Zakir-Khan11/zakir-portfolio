// import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";
import { CiMenuFries } from "react-icons/ci";
import { TiHome } from "react-icons/ti";
import { IoMdContact } from "react-icons/io";
import { FcTodoList } from "react-icons/fc";
import { useState } from 'react';
export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const handleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <header className='nav-bar'>
      <div className='logo'>
        <img src="logo-navbar.png" alt="logo" />
      </div>
      <nav className={showMenu ? 'mobile-menu' : 'web-menu'}>
      <ul style={{display: 'flex' , gap: '20px'}}>
        <li>
            <Link className='nav-link' to="/"><TiHome />Home</Link>
            </li>
        <li>
            <Link className='nav-link' to="/contact"><IoMdContact />Contact</Link>
            </li>
        <li>
            <Link className='nav-link' to="/todoapp"><FcTodoList />TodoApp</Link>
            </li>
        <li>
            <Link className='nav-link' to="/about">About</Link>
            </li>
      </ul>
      </nav>
      <div className='ham-menu'>
        <button onClick={handleMenu}>
          <CiMenuFries />
        </button>
      </div>
    </header>
  );
}
