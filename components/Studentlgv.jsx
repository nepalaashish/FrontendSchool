import React from "react";

import { Link, useNavigate } from 'react-router-dom'
const Header = () => {
  const navigate = useNavigate();
  const handleClose = () => {

    sessionStorage.removeItem("accessToken")
    navigate('/')
  };

  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              
              
              <li class="nav-item">
                <a class="nav-link" href="/Applyleave">
                  Apply for leave 
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/Updateprofile">
                  Update your profile 
                </a>
              </li>
              
              
              
              {/* <li class="nav-item">
                <a class="nav-link" href="#">
                  Patient Register
                </a>
              </li> */}
              
              { sessionStorage.getItem("accessToken")&&<li class="nav-item">
                <a class="nav-link" onClick={handleClose}>Log Out</a>
              </li>}
            </ul>
           
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
