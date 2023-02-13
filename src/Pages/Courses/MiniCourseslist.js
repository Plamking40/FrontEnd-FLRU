import React from "react";
import Sidebar from "../../Component/Sidebar";
import MiniCourse from "../../Component/Courses/MiniCourse";

export default function Minicourseslist() {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <MiniCourse />
    </div>
  );
}
