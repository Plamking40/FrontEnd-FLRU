import React from "react";
import "./navbar.css";
import Notification from ".././Img/Icons/notification.png";
import Search from ".././Img//Icons/search.png";
import Proflie from ".././Img/Icons/boy.jpg";

export default function Navbar() {
  const key = JSON.parse(window.localStorage.getItem("UserRole"));
  return (
    <div className="MainNavbarContainer">
      <div className="proflieItemContainer">
        <div className="proflieItem">
          <p>
            {key?.firstname} {key?.lastname}
            <br />
            <label>{key?.status.toUpperCase()}</label>
          </p>
          <img src={`${Proflie}`} className="ProflieIcon" alt="" />
        </div>
      </div>
    </div>
  );
}
