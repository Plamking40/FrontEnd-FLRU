import React from "react";
import "./quiz.css";
import Sidebar from "../../Component/Sidebar";
import Insertquizs from "../../Component/Quizs/Insertquizs";

export default function Insertquiz() {
  return (
    <div className="QuizContainer">
      <Sidebar />
      <Insertquizs />
    </div>
  );
}
