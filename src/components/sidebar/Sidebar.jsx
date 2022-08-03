import React from "react";
import "./sidebar.css";
import { AiFillTablet, AiOutlineSearch, AiFillSetting } from "react-icons/ai";
import { BsLaptopFill, BsPhone, BsTvFill, BsWatch } from "react-icons/bs";
import { MdOutlineAnalytics, MdOutlineAccountCircle } from "react-icons/md";

const Sidebar = () => {
  return (
    <div class="sidebar">
      <div className="items">
        <div className="top">
          <AiOutlineSearch className="icon" />
          <MdOutlineAnalytics className="icon" />
        </div>
        <div className="center">
          <BsPhone className="icon" />
          <AiFillTablet className="icon" />
          <BsLaptopFill className="icon" />
          <BsTvFill className="icon" />
          <BsWatch className="icon" />
        </div>
        <div className="bottom">
          <MdOutlineAccountCircle className="icon" />
          <AiFillSetting className="icon" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
