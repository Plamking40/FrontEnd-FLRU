import React from "react";
import Navbar from "../Navbar";
import "./quizs.css";
import { useState, useEffect } from "react";
import Axios from "axios";
import Book1 from "../../Img/Asset/book1.png";
import Book2 from "../../Img/Asset/book2.png";
import { Route, Routes, Link } from "react-router-dom";
import { Button, Form, Row, Col, Modal, FloatingLabel } from "react-bootstrap";
import EditQuizs from "./EditQuizs";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { BiBookAdd } from "react-icons/bi";

export default function Quizs() {
  const [question, setQuestion] = useState([]);

  const getQuestion = () => {
    Axios.get("https://flru-learning.herokuapp.com/question")
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

  const [showADD, setShowADD] = useState(false);
  const handleADDClose = () => setShowADD(false);
  const handleADDShow = () => setShowADD(true);

  const [Quiz, setQuiz] = useState();
  const [Type, setType] = useState();
  const [ScoreMax, setScoreMax] = useState();
  const [EndTime, setEndTime] = useState();
  const [Total, setTotal] = useState();
  const [RankType, setRankType] = useState();
  const [Content, setContent] = useState();

  const handleADDSubmit = async () => {
    const dataQuestion = [
      {
        quiz: Quiz,
        type: Type,
        score_max: ScoreMax,
        end_time: EndTime,
        total: Total,
        is_active: true,
        rankType: RankType,
        content: Content,
        questions: {},
      },
    ];
    Axios.post(
      "https://flru-learning.herokuapp.com/question/create-question",
      dataQuestion
    ).then(async (res) => {
      await swal({
        icon: "success",
        title: `SIGN UP `,
        text: `Thank you, for applying for membership.`,
      });
      console.log(res.data);

      window.location.reload();
    });
  };

  return (
    <div className="QuizsContainer">
      <Navbar />
      <div className="QuizsTitle">
        <p className="textQuizsTitle">Quiz Mangement</p>
      </div>

      <div className="tabQuizContainer">
        <div className="AddQuizContainer">
          <BiBookAdd className="IconAddQuiz" onClick={handleADDShow} />
        </div>

        {question.map((item) => {
          return (
            <div className="EditQuizContainer">
              <img className="ImgQuizContainer" src={Book2} />
              <p className="SkillsTitle">{item.quiz}</p>
              <Button
                variant="primary"
                href={`/EditQuiz/${item._id}`}
                className="BtnHead"
              >
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
      {/* Model for ADD User */}
      <div className="model-box-view">
        <Modal show={showADD} onHide={handleADDClose} size="lg">
          <Modal.Header closeButton>
            <Modal.Title>ADD Quiz</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Row className="g-2 mb-3">
                <Col md>
                  <FloatingLabel
                    controlId="floatingInput"
                    label="Quiz"
                    className="mb-3 mt-3"
                  >
                    <Form.Control
                      type="text"
                      placeholder="name@example.com"
                      onChange={(e) => setQuiz(e.target.value)}
                    />
                  </FloatingLabel>
                </Col>
                <Col md>
                  <FloatingLabel
                    controlId="floatingInput"
                    label="Type"
                    className="mb-3 mt-3"
                  >
                    <Form.Control
                      type="text"
                      placeholder="name@example.com"
                      onChange={(e) => setType(e.target.value)}
                    />
                  </FloatingLabel>
                </Col>
              </Row>
              <Row className="g-2 mb-3">
                <Col md>
                  <FloatingLabel
                    controlId="floatingInput"
                    label="Score_max"
                    className="mb-3 mt-3"
                  >
                    <Form.Control
                      type="number"
                      placeholder="name@example.com"
                      onChange={(e) => setScoreMax(e.target.value)}
                    />
                  </FloatingLabel>
                </Col>
                <Col md>
                  <FloatingLabel
                    controlId="floatingInput"
                    label="End_time"
                    className="mb-3 mt-3"
                  >
                    <Form.Control
                      type="number"
                      placeholder="name@example.com"
                      onChange={(e) => setEndTime(e.target.value)}
                    />
                  </FloatingLabel>
                </Col>
                <Col md>
                  <FloatingLabel
                    controlId="floatingInput"
                    label="Totol"
                    className="mb-3 mt-3"
                  >
                    <Form.Control
                      type="number"
                      placeholder="name@example.com"
                      onChange={(e) => setTotal(e.target.value)}
                    />
                  </FloatingLabel>
                </Col>
              </Row>
              <Row className="g-2">
                <Col md>
                  <FloatingLabel
                    controlId="floatingSelect"
                    label="Rank with selects"
                  >
                    <Form.Select
                      aria-label="Floating label select example"
                      onChange={(e) => setRankType(e.target.value)}
                    >
                      <option>Open this Select Menu</option>
                      <option value="none">None</option>
                      <option value="toeic">TOEIC</option>
                      <option value="crud">CRUD</option>
                    </Form.Select>
                  </FloatingLabel>
                </Col>
                <Col md>
                  <FloatingLabel
                    controlId="floatingTextarea2"
                    label="Content"
                    className="mb-3"
                  >
                    <Form.Control
                      as="textarea"
                      placeholder="Leave a comment here"
                      style={{ height: "100px" }}
                      onChange={(e) => setContent(e.target.value)}
                    />
                  </FloatingLabel>
                </Col>
              </Row>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleADDClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleADDSubmit}>
              ADD Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
}
