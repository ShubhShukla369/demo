import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
  {/* Container wrapper */}
  <div className="container-fluid">
    {/* Navbar brand */}
    <a className="navbar-brand me-2" href="https://mdbgo.com/">
      <img
        src="data:image/jpeg;base64,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"
        height={60}
        alt="MDB Logo"
        loading="lazy"
        style={{ marginTop: "-1px" }}
      />
    </a>
    {/* Toggle button */}
    <button
      className="navbar-toggler"
      type="button"
      data-mdb-toggle="collapse"
      data-mdb-target="#navbarButtonsExample"
      aria-controls="navbarButtonsExample"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i className="fas fa-bars" />
    </button>
    {/* Collapsible wrapper */}
    <div className="collapse navbar-collapse" id="navbarButtonsExample">
      {/* Left links */}
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link" href="#" to="/home">
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Types of Issues
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Counselling Services
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Session &amp; Fees
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Blog
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Contact
          </a>
        </li>
      </ul>
      {/* Left links */}
      <div className="d-flex align-items-center">
        <button type="button" className="btn btn-link px-3 me-2">
          <i className="fa fa-phone" aria-hidden="true">
            +919580477026
          </i>
        </button>
        <NavLink  className="nav-link btn btn-primary me-3" to="/login">
          Login
        </NavLink>
      </div>
    </div>
    {/* Collapsible wrapper */}
  </div>
  {/* Container wrapper */}
</nav>

    </div>
    
  )
}

export default Navbar