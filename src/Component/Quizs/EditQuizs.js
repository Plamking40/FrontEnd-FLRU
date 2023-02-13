import React from "react";
import { useState, useEffect } from "react";
import Navbar from "../Navbar";
import "./editquizs.css";
import Axios from "axios";
import { useParams } from "react-router-dom";
import { Form, FloatingLabel, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function EditQuizs() {
  const [question, setQuestion] = useState([]);
  const [showADD, setShowADD] = useState(false);
  const [showEdit, setShowEdit] = useState(false);

  const [val, setVal] = useState([]);

  const handleAdd = () => {
    const abc = [...val, []];
    setVal(abc);
  };
  const handleChane = (onChangeValue, i) => {
    const inputdata = [...val];
    inputdata[i] = onChangeValue.target.value;
    setVal(inputdata);
  };
  console.log(val);

  const handleDelete = (i) => {
    const DeleteVal = [...val];
    DeleteVal.splice(i, 1);
    setVal(DeleteVal);
  };

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const { id } = useParams();

  const getQuestion = (id) => {
    Axios.get(
      `https://flru-learning.herokuapp.com/question/edit-question/${id}`
    )
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

    getQuestion(id);
    console.log(question);
  }, []);
  return (
    <div className="EditQuizsContainer">
      <Navbar />
      <div>
        <div className="QuizsTitle">
          <p className="textQuizsTitle">Edit Quiz</p>
        </div>
        <div className="EditAnswersContainer">
          <div className="LitseningContainer">
            <div className="BodyEditeQuiz">
              <h2>
                {currentQuestion + 1}.{" "}
                {question?.questions?.[currentQuestion].question}
              </h2>
              {question?.questions?.[currentQuestion].options.map(
                (item, index) => {
                  return (
                    <div className="optionsItem">
                      <FloatingLabel
                        controlId="floatingInput"
                        label={`options ${index + 1}`}
                        className="mb-3"
                      >
                        <Form.Control type="text" value={item} />
                      </FloatingLabel>
                    </div>
                  );
                }
              )}
              <Button onClick={() => handleAdd()}>ADD Options</Button>
              {val.map((data, i) => {
                return (
                  <div className="DynamicallyAdd">
                    <div className="d-flex">
                      <FloatingLabel
                        controlId="floatingInput"
                        label={`options ${i + 1}`}
                      >
                        <Form.Control
                          type="text"
                          value={data}
                          onChange={(e) => {
                            handleChane(e, i);
                          }}
                        />
                      </FloatingLabel>
                      <Button variant="danger" onClick={() => handleDelete(i)}>
                        X
                      </Button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="TabContainer">
            <div className="TabContainerNum">
              <h3>Options</h3>
              {question.questions?.map((item, index) => {
                return (
                  <div
                    className="QuizNum"
                    onClick={() => setCurrentQuestion(index)}
                  >
                    <h2>{index + 1}</h2>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
