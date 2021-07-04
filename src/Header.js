import React, { Component } from "react";

class Header extends Component
{
    render()
    {
        return(



          <div>
          <header>
<div className="collapse bg-dark py-2" id="navbarHeader">
  <div className="container">
    <div className="row">
    <nav class="navbar navbar-expand-lg  bg-dark">
  
  <button class="navbar-toggler " type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarText">
    <ul class="navbar-nav mx-4">
      <li class="nav-item active mx-4 ">
        <a class="nav-link text-light" href="#">Home </a>
      </li>
      <li class="nav-item mx-2">
        <a class="nav-link text-light" href="#">Features</a>
      </li>
      <li class="nav-item mx-2">
        <a class="nav-link text-light" href="#">Enterprise</a>
      </li>
      <li class="nav-item mx-2">
        <a class="nav-link text-light" href="#">Support</a>
      </li>
      <li class="nav-item mx-2">
        <a class="nav-link text-light" href="#">Pricing</a>
      </li>
    </ul>
     
    <input class="form-control mx-2" type="search" placeholder="Search" aria-label="Search"></input> 
  </div>
  <button class="btn btn-outline-light mx-3 " type="submit">Sign Up</button>
</nav>
    </div>
  </div>
</div>
<div className="navbar navbar-dark bg-dark shadow-sm py-3">
  <div className="container">
    <a href="#" className="navbar-brand d-flex align-items-center">
    <img src="images/logo1.png" class="bi me-2" style={{width:"50px", height:"50px"}}></img>
      
      <strong><h2><b>SCP <h6>Secure, Contain, Protect</h6></b></h2></strong>
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  </div>
</div>
</header>



          

    
  <br></br><br></br>
</div>


        );
    }
}

export default Header;


