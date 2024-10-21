import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [btn,setbtn]=useState("login")
   

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        {/* <img src="/path/to/your/logo.png" alt="Logo" /> */}
        <h1>hungryBuddy</h1>
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/service">Services</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <div>
        <button onClick={()=>{
          return btn==="login"?setbtn("logout"):setbtn("login")
        }}>{btn}</button>
      </div>
    </nav>
  );
};
export default Header
