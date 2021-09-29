import React, { useState,useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import './style.css'
function NavBar() {
    const [scrolled,setScrolled]=useState(false);

    const handleScroll=() => {
      const offset=window.scrollY;
      if(offset > 200 ){
        setScrolled(true);
      }
      else{
        setScrolled(false);
      }
    }
    useEffect(() => {
      window.addEventListener('scroll',handleScroll)
    })
  
    let x=[' '];
    if(scrolled){
      x.push('scrolled');
    }
    
    return (
        <nav className={`navbar navbar-expand-lg navbar-light px-4 py-0  ${x.join("")}`}>
            <div className="container-fluid">
                <NavLink className="navbar-brand logo" to="/"><h1>S2 <span>Solution</span></h1></NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse nav_link" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink exact activeClassName="nav_bar_active" className="nav-link" aria-current="page" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink exact activeClassName="nav_bar_active" className="nav-link" to="/about">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink exact activeClassName="nav_bar_active" className="nav-link" to="/service">Services</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink exact activeClassName="nav_bar_active" className="nav-link" to="/review">Reviews</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink exact activeClassName="nav_bar_active" className="nav-link" to="/contact">Contact Us</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
      </nav>
    )
}

export default NavBar
