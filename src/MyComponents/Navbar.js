import React, { useState } from "react";




import './Navbar.css'


export default function Header() {
 
  return (
    <div>
       <nav className="navbar navbar-expand-lg fixed-top navbar-dark" id ="newnav">
  <div className="container-fluid" id="navbar">
    <a className="navbar-brand" href="/" >BIRCTC</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
   
      <li>
          <a className="nav-link active" aria-current="page" href="/translate">Search</a>
        </li>
        <li>
        
          <a className="nav-link active" href="https://www.mapmyindia.com/api/advanced-maps/doc/sample/mapmyindia-maps-near-by-api-example">Register</a>
        </li>
        
        <li>
      
          <a className="nav-link active" href="/weather">Login</a>
        </li>
        
        <li className="nav-item " id="lastitem">
          <a className="nav-link  active " href="/profile" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Your Profile
          </a>
         
        </li>
      </ul>
      
    </div>
  </div>
</nav>
    </div>
  )
}
