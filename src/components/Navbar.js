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
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNO5P5zDnNQN9aS8A6J0D2RhtIL81cAiFWaw&usqp=CAU"
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