import { useState, useEffect } from "react";
import { Button, Card } from "react-bootstrap";
import "./allQuiz.css";
import Axios from "axios";
import { Route, Routes } from "react-router-dom";
import QuizUser from "./QuizUser";
import ImgQuiz from "../../Img/Asset/book2.png";

export default function AllQuiz() {
  const [question, setQuestion] = useState([]);

  const getQuestion = () => {
    Axios.get("http://localhost:8080/question/AllQuiz")
      .then((res) => {
        setQuestion(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getQuestion();
  }, []);

  return (
    <div className="AllQuiz">
      <div className="container-AllQuiz">
        <p className="tab-allquiz">Home &raquo; Quiz</p>
        <div className="QuizFull">
          <h1>Quiz</h1>
          <div className="Btn-Type">
            <Button className="btn btn-warning ">All</Button>
            <Button className="btn btn-warning ">English</Button>
          </div>
          {question.map((item) => {
            return (
              <div className="Card-Quiz">
                <Card style={{ width: "12rem" }}>
                  <img variant="top" src={ImgQuiz} />
                  <Card.Body>
                    <Card.Title>{item.quiz}</Card.Title>
                    <Card.Text>{item.type}</Card.Text>
                    <Button variant="danger" href={`/QuizUser/${item._id}`}>
                      View Quiz
                    </Button>
                    <Routes>
                      <Route path="/QuizUser">
                        <Route path=":id" element={<QuizUser />} />
                      </Route>
                    </Routes>
                  </Card.Body>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
