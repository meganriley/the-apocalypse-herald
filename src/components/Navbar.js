import React from 'react'
import {  Link } from "react-router-dom";
import logo from '../assets/big-logo.png';


function Navbar() {
  return (
    <div class="flex">
        <img 
            src={logo} 
            alt="the apocalypse herald logo in gold lettering"
            className="h-32 w-48 w-full rounded-lg object-cover object-center"
        />
        <ul class="flex mx-8 list-style-type: none;">
            <li className="mx-8 hover:bg-cyan-600">
                <Link to="/sports">Sports</Link>
            </li>
            <li className="mx-8 hover:bg-cyan-600">
                <Link to="/entertainment">Entertainment</Link>
            </li>
            <li className="mx-8 my-20 hover:bg-cyan-600">
                <Link to="/classifieds">Classifieds</Link>
            </li>
        </ul>
    

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