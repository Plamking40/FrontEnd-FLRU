import React from "react";
import "./team.css";
import Sidebar from "../../Component/Sidebar";
import TeamMembers from "../../Component/Team/TeamMembers";

export default function Team() {
  return (
    <div className="teamContainer">
      <Sidebar />
      <TeamMembers />
    </div>
  );
}
