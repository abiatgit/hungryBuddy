import { useState } from "react";
import { Link } from "react-router-dom";
import useStatus from "../utils/useStatus";
import biteLogo from '../utils/img/bite.svg';

const Header = () => {
 
  const [btn, setbtn] = useState("login");

  return (
    <div>
    <nav className="flex rounded-lg p-5 bg-white-50 items-center h-24 shadow-xl justify-between ">
       <div className=" mx-5 w-[110px] h-[170px] mt-7">
          <img src={biteLogo} alt="Logo" />
        </div>
      <div className="flex items-center justify-between ">
       
        <div className="flex mx-5">
          <ul className="flex">
      
            <li className="m-3 p-4 bg-white-lg shadow-md hover:bg-gray-100">
              <Link to="/" className="text-blue-500 hover:text-blue-700">Home</Link>
            </li>
            <li className="m-3 p-4 bg-white-lg shadow-md hover:bg-gray-100">
              <Link to="/about" className="text-blue-500 hover:text-blue-700">About</Link>
            </li>
            <li className="m-3 p-4 bg-white-lg shadow-md hover:bg-gray-100">
              <Link to="/service" className="text-blue-500 hover:text-blue-700">Services</Link>
            </li>
            <li className="m-3 p-4 bg-white-lg shadow-md hover:bg-gray-100">
              <Link to="/contact" className="text-blue-500 hover:text-blue-700">Contact</Link>
            </li>
            <li className="m-3 p-4 bg-white-lg shadow-md hover:bg-gray-100">
              <Link to="/grocery" className="text-blue-500 hover:text-blue-700">Grocery</Link>
            </li>
          </ul>
        </div>
        <div className="flex mx-5 ml-8">
        <button className="bg-yellow-500 hover:bg-white-700 text-white font-bold py-2 rounded w-10"
          onClick={() => {
            return btn === "login" ? setbtn("logout") : setbtn("login");
          }}
        >
          {btn}
        </button>
      </div>
      </div>
    </nav>
    
    </div>
  );
};
export default Header;
