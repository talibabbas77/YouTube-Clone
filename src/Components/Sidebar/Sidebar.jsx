import React from "react";
import "./Sidebar.css";
import { IoHomeSharp } from "react-icons/io5";
import { SiYoutubeshorts } from "react-icons/si";
import { GiArmoredBoomerang } from "react-icons/gi";
import { IoGameControllerOutline } from "react-icons/io5";
import { MdOutlineSportsBaseball } from "react-icons/md";
import { PiTelevisionSimple } from "react-icons/pi";
import { GrTechnology } from "react-icons/gr";
import { MdLibraryMusic } from "react-icons/md";
import { FaRegNewspaper } from "react-icons/fa6";
import chaiaurcode from "../../Assets/chaiaurcode.jpg";
import pakwheels from "../../Assets/pakwheels.jpg";
import tabishhashmi from "../../Assets/tabishhashmi.jpg";

const Sidebar = ({ sidebar, category, setCategory }) => {
  return (
    <div className={`sidebar ${sidebar ? "" : "small-sidebar"}`}>
      <div className="shortcut-links">
        <div
          className={`side-link ${category === 0 ? "active" : ""}`}
          onClick={() => setCategory(0)}
        >
          <IoHomeSharp className="icon" />
          <p>Home</p>
        </div>
        <div
          className={`side-link ${category === 23 ? "active" : ""}`}
          onClick={() => setCategory(23)}
        >
          <SiYoutubeshorts className="icon" />
          <p>Comedy</p>
        </div>
        <div
          className={`side-link ${category === 22 ? "active" : ""}`}
          onClick={() => setCategory(22)}
        >
          <GiArmoredBoomerang className="icon" />
          <p>Trending</p>
        </div>
        <hr />
        <div className="subscribed-list">
          <h3>Explore</h3>
          <div
            className={`side-link ${category === 20 ? "active" : ""}`}
            onClick={() => setCategory(20)}
          >
            <IoGameControllerOutline className="icon" />
            <p>Gaming</p>
          </div>
          <div
            className={`side-link ${category === 17 ? "active" : ""}`}
            onClick={() => setCategory(17)}
          >
            <MdOutlineSportsBaseball className="icon" />
            <p>Sports</p>
          </div>
          <div
            className={`side-link ${category === 24 ? "active" : ""}`}
            onClick={() => setCategory(24)}
          >
            <PiTelevisionSimple className="icon" />
            <p>Entertainment</p>
          </div>
          <div
            className={`side-link ${category === 28 ? "active" : ""}`}
            onClick={() => setCategory(28)}
          >
            <GrTechnology className="icon" />
            <p>Technology</p>
          </div>
          <div
            className={`side-link ${category === 10 ? "active" : ""}`}
            onClick={() => setCategory(10)}
          >
            <MdLibraryMusic className="icon" />
            <p>Music</p>
          </div>
          <div
            className={`side-link ${category === 25 ? "active" : ""}`}
            onClick={() => setCategory(25)}
          >
            <FaRegNewspaper className="icon" />
            <p>News</p>
          </div>
        </div>
        <hr />
      </div>
      <div className="subscribed-list">
        <h3>Subscriptions</h3>
        <div className="side-link">
          <img src={chaiaurcode} alt="" />
          <p>Chai aur Code</p>
        </div>
        <div className="side-link">
          <img src={pakwheels} alt="" />
          <p>PakWheels</p>
        </div>
        <div className="side-link">
          <img src={tabishhashmi} alt="" />
          <p>Hasna Mana Hai</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
