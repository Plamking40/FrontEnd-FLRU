import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import "./QuizUser.css";
import Axios from "axios";
import { useParams, Route, Routes } from "react-router-dom";
import StartQuizs from "./StartQuiz";
import Quiz from "../../Img/Asset/quiz.png";

export default function QuizUser() {
  const [question, setQuestion] = useState([]);
  const { id } = useParams();

  const QuizData = [
    {
      quiz: "English Skills",
      content:
        "The English Skills Test assesses listening, reading, grammar, andvocabulary skills with instructions on how to practice and developthe necessary skills.",
      Total: 40,
      score_max: 100,
      end_time: 25,
    },
  ];

  const getQuestion = (id) => {
    Axios.get(`http://localhost:8080/question/edit-question/${id}`).then(
      (response) => {
        setQuestion(response.data);
      }
    );
  };

  useEffect(() => {
    getQuestion(id);
  }, []);

  return (
    <div className="QuizUser">
      <div className="container-AllQuiz">
        <div className="Emg-con">
          {QuizData.map((item) => {
            return (
              <>
                <div className="contentEng-r">
                  <h1>{question.quiz}</h1>
                  <p>{question.content}</p>
                  <p>Type : {question.type}</p>
                  <p>
                    Total : {question.totol} Items ({question.score_max} Marks)
                  </p>
                  <p>Time in Total: {question.end_time} minutes</p>
                  <Routes>
                    <Route path="/StartQuizs">
                      <Route path=":id" element={<StartQuizs />} />
                    </Route>
                  </Routes>
                  <Button
                    variant="primary"
                    className="fa fa-plu m-1"
                    href={`/StartQuizs/${id}`}
                  >
                    Start Quiz
                  </Button>
                  <Button variant="warning" className="fa fa-plu m-1" href="#">
                    Continue
                  </Button>
                </div>
              </>
            );
          })}
          <div className="contentEng-l">
            <img src={Quiz} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
