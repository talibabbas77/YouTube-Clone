import React from "react";
import "./Navbar.css";
import { RiMenu2Fill } from "react-icons/ri";
// import logo from "../../Assets/logo.png";
import { CiSearch } from "react-icons/ci";
import { RiVideoUploadLine } from "react-icons/ri";
import { IoMdNotificationsOutline } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";

const Navbar = ({ setSidebar }) => {
  return (
    <nav className="flex-div">
      <div className="nav-left flex-div">
        <div
          className="menu-icon"
          onClick={() => setSidebar((prev) => (prev === false ? true : false))}
        >
          <RiMenu2Fill />
        </div>
        <Link to="/" className="logo">
          <img src="" alt="Logo" />
        </Link>
      </div>
      <div className="nav-middle flex-div">
        <div className="search-box flex-div">
          <input type="text" placeholder="Search" />
          <a href="/" className="search-icon">
            <CiSearch />
          </a>
        </div>
      </div>
      <div className="nav-right flex-div">
        <a href="/">
          <RiVideoUploadLine />
        </a>
        <a href="/">
          <IoMdNotificationsOutline />
        </a>
        <a href="/" className="user-icon">
          <CgProfile />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
