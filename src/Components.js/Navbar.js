import React from 'react'

const Navbar = () => {
    return (
        <div>
          <div className="nav">
            <a className="logo" href = "index.html"><img src={require("../Components.js/mylogo3.png")} alt="logo" width="100px" height="50px" /></a>
            <nav>
              <ul className="nav_links">
                <li><a href="index.html">Home</a></li>  
                <li><a href="#projects">Projects</a></li>
                <li><a href="#about">About</a></li>
              </ul>
            </nav>
            <a className="contactz" href="#contact"><button>Contact</button></a>
          </div>
        </div>
    )
}


export default Navbar;