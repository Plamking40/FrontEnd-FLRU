import React from "react";
import Navbar from "../Navbar";
import "./quizs.css";
import { useState, useEffect } from "react";
import Axios from "axios";
import Book1 from "../../Img/Asset/book1.png";
import Book2 from "../../Img/Asset/book2.png";
import { Route, Routes, Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import EditQuizs from "./EditQuizs";
import { useNavigate } from "react-router-dom";

export default function Quizs() {
  const [question, setQuestion] = useState([]);

  const getQuestion = () => {
    Axios.get("http://localhost:8080/question")
      .then((res) => {
        setQuestion(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const key = JSON.parse(window.localStorage.getItem("UserRole"));
  const history = useNavigate();

  useEffect(() => {
    if (key?.status != "Admin") {
      history("/");
    }
    getQuestion();
  }, []);

  return (
    <div className="QuizsContainer">
      <Navbar />
      <div className="QuizsTitle">
        <p className="textQuizsTitle">Quiz</p>
      </div>

      <div className="tabQuizContainer">
        <Link to={"/Insertquiz"} style={{ textDecoration: "none" }}>
          <div className="AddQuizContainer">
            <img className="ImgQuizContainer" src={Book1} />
            <h3>Add Quiz</h3>
          </div>
        </Link>
        {question.map((item) => {
          return (
            <div className="EditQuizContainer">
              <img className="ImgQuizContainer" src={Book2} />
              <p className="SkillsTitle">{item.quiz}</p>
              <Button variant="primary" href={`/EditQuiz/${item._id}`}>
                Edit
              </Button>
              <Routes>
                <Route path="/EditQuiz">
                  <Route path=":id" element={<EditQuizs />} />
                </Route>
              </Routes>
            </div>
          );
        })}
      </div>
    </div>
  );
}
