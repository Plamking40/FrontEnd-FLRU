import React from "react";
import Sidebar from "../../Component/Sidebar";
import Course from "../../Component/Courses/Course";

export default function Courses() {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <Course />
    </div>
  );
}
