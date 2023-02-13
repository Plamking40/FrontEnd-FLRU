import React from "react";
import HomeRightbar from "../../Component/HomeRightbar/HomeRightbar";
import Sidebar from "../../Component/Sidebar";

export default function Home() {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <HomeRightbar />
    </div>
  );
}
