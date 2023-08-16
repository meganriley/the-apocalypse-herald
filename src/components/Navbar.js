import React from 'react'
import {  Link } from "react-router-dom";
import logo from '../assets/big-logo.png';


function Navbar() {
  return (
    <div>
        <img src={logo} alt="the apocalypse herald logo in gold lettering"/>
        <li>
            <Link to="/sports">Sports</Link>
        </li>
        <li>
            <Link to="/entertainment">Entertainment</Link>
        </li>
        <li>
            <Link to="/classifieds">Classifieds</Link>
        </li>
    

        <form action="/" method="get">
        {/* <label htmlFor="header-search">
            <span className="visually-hidden">Search blog posts</span>
        </label> */}
        <input
            type="text"
            id="header-search"
            placeholder="Search news articles"
            name="s" 
        />
        <button type="submit">Search</button>
    </form>
    </div>
  )
}

export default Navbar;