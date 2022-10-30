import React from 'react'
import logopng from '../images/1.png'
import './Css/Navbar.css'
import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <>
      {/* NABVAR */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
        <div className="container-fluid ">
          <a className="navbar-brand logoPng" to="#">
            {/* <img
              className="logoPng"
              // src={logopng}
              alt="HappyDog"

            /> */}
            HappyDog
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item ms-5">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item ms-5">
                <Link className="nav-link" to="/blogs">
                  Blogs
                </Link>
              </li>
              <li className="nav-item ms-5">
                <Link className="nav-link" to="/doggroomer">
                  Dog Groommer
                </Link>
              </li>

              {/* Dropdown start*/}
              <li className="nav-item dropdown ms-5">
                <Link
                  className="nav-link dropdown-toggle"
                  to="/iteam"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Iteam
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link className="dropdown-item" to="/action">
                      Action
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/else">
                      Something else here
                    </Link>
                  </li>
                </ul>
              </li>
              {/* Dropdown End*/}

              <li className="nav-item  ms-5">
                <Link className="nav-link" to="/login">
                  login
                </Link>
              </li>

              <li className="nav-item ms-5">
                <Link className="nav-link" to="/doggroomer">
                  
                </Link>
              </li>
              <li className="nav-item ms-5">
                <Link className="nav-link" to="/doggroomer">
                 
                </Link>
              </li>
              <li className="nav-item ms-5">
                <Link className="nav-link" to="/doggroomer">
                </Link>
              </li>
              <li className="nav-item ms-5">
                <Link className="nav-link" to="/doggroomer">
                </Link>
              </li> <li className="nav-item ms-5">
                <Link className="nav-link" to="/doggroomer">
                </Link>
              </li>

              <li className="nav-item dropdown ms-5">
                <Link
                  className="nav-link dropdown-toggle profillgo"
                  to="/profile1"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >

                </Link>
                <ul className="dropdown-menu pull-right" aria-labelledby="navbarDropdown">
                  <li>
                    <Link className="dropdown-item" to="/profile">
                      Profile
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/payment">
                      Payment
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/history">
                      History
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/setting">
                      Setting
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/logout">
                      Logout
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>

            {/* ----------------------------------------------- */}
            {/* <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            
            </ul> */}

          </div>
        </div>
      </nav>


    </>
  )
}
export default Navbar;