import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <header className="header">
        <a href="/" className="logo">Logo</a>
        <nav className="navbar">
            <a href = "/">About US</a>
            <a href = "/">Docs</a>
            <a href = "/">Login</a>
        </nav>
    </header>
  )
}

export default Navbar