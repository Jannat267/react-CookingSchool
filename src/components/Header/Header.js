import React from 'react';
import { NavLink,Link } from 'react-router-dom';
import cook_book from '../../images/cooking-school.png';
import './Header.css';

const Header = () => {
    return (
      <div className="header  fs-4 ">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
       <NavLink className="navbar-brand" to="/home">
        <img src={cook_book}  alt="" width="100" height="80" />
       </NavLink>
    
    <div className="collapse navbar-collapse text-coral">
      <ul className="navbar-nav me-10 mb-1 mb-lg-0">

        <li className="nav-item text-coral">
          <Link className="nav-link active hover-item"  to="/home">Home</Link>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link active"  to="/about">About Us</NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link active"  to="/services">Classes</NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link active"  to="/contact">Contact Us</NavLink>
        </li>
      </ul>
     
    </div>
  
    </nav>
    </div>

    );
};

export default Header;