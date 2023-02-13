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

  const handleADDSubmit = async () => {
    const dataRegister = [
      {
        // user_id: user_id,
        // password: password,
      },
    ];

    console.log(dataRegister);

    if (dataRegister) {
      Axios.post(
        "https://flru-learning.herokuapp.com/users/create-users",
        dataRegister
      ).then(async (res) => {
        await swal({
          icon: "success",
          title: `SIGN UP `,
          text: `Thank you,  for applying for membership.`,
        });
        console.log(res.data);
        setShowADD(false);
        window.location.reload();
      });
    } else {
      await swal({
        icon: "warning",
        title: `SIGN UP Error`,
        text: `Please confirm the conditions for applying for membership.`,
      });
    }
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
            <Modal.Title>ADD USER</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Row className="g-2 mb-3">
                <Col md>
                  <Form.Floating>
                    <Form.Control
                      type="text"
                      placeholder="UserID"
                      // onChange={(e) => setUser_id(e.target.value)}
                    />
                    <label htmlFor="floatingPasswordCustom">UserID</label>
                  </Form.Floating>
                </Col>
                <Col md>
                  <Form.Floating>
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      // onChange={(e) => setPassword(e.target.value)}
                    />
                    <label htmlFor="floatingPasswordCustom">Password</label>
                  </Form.Floating>
                </Col>
              </Row>
              <Row className="g-2 mb-3">
                <Col md>
                  <Form.Floating>
                    <Form.Control
                      type="text"
                      placeholder="Firstname"
                      // onChange={(e) => setFirstname(e.target.value)}
                    />
                    <label htmlFor="floatingPasswordCustom">Firstname</label>
                  </Form.Floating>
                </Col>
                <Col md>
                  <Form.Floating>
                    <Form.Control
                      type="text"
                      placeholder="Lastname"
                      // onChange={(e) => setLastname(e.target.value)}
                    />
                    <label htmlFor="floatingPasswordCustom">Lastname</label>
                  </Form.Floating>
                </Col>
                <Col md>
                  <FloatingLabel
                    controlId="floatingSelectGrid"
                    label="Works with selects"
                  >
                    <Form.Select
                      aria-label="Floating label select example"
                      // onChange={(e) => setStatus(e.target.value)}
                    >
                      <option>Open this Select Status</option>
                      <option value="Student">Student</option>
                      <option value="Staff">Staff</option>
                      <option value="Teacher">Teacher</option>
                      <option value="Admin">Admin</option>
                    </Form.Select>
                  </FloatingLabel>
                </Col>
              </Row>
              <Row className="g-2">
                <Col md>
                  <Form.Floating>
                    <Form.Control
                      type="email"
                      placeholder="Email Addres"
                      // onChange={(e) => setEmail(e.target.value)}
                    />
                    <label htmlFor="floatingPasswordCustom">Email Addres</label>
                  </Form.Floating>
                </Col>
                <Col md>
                  <Form.Floating>
                    <Form.Control
                      type="tel"
                      placeholder="Tel"
                      // onChange={(e) => setTel(e.target.value)}
                    />
                    <label htmlFor="floatingPasswordCustom">Tel</label>
                  </Form.Floating>
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
