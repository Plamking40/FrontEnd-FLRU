import React, { useState, useEffect } from "react";
import Navbar from "../Navbar";
import "./Ranking.css";
import {
  Table,
  Button,
  Modal,
  Form,
  Row,
  Col,
  FloatingLabel,
} from "react-bootstrap";
import swal from "sweetalert";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Ranking() {
  const [ranks, setRanks] = useState();

  const [showADD, setShowADD] = useState(false);
  const handleADDClose = () => setShowADD(false);
  const handleADDShow = () => setShowADD(true);

  const [rname, setRname] = useState();
  const [rmin, setRmin] = useState();
  const [rmax, setRmax] = useState();

  const getRank = () => {
    Axios.get("https://flru-learning.herokuapp.com/rankcompares").then(
      (response) => {
        setRanks(response.data);
      }
    );
  };

  const dataEditAdd = [
    {
      name: rname,
      min: rname,
      max: rname,
    },
  ];

  const getEditAdd = () => {
    Axios.post(
      "https://flru-learning.herokuapp.com/users/create-users",
      dataEditAdd
    ).then((res) => {
      swal({
        icon: "success",
        title: `SIGN UP `,
        text: `Thank you, for applying for membership.`,
      });
      console.log(res.data);
    });
  };

  const key = JSON.parse(window.localStorage.getItem("UserRole"));
  const history = useNavigate();

  useEffect(() => {
    if (key?.status != "Admin") {
      history("/");
    }
    getRank();
    // getToeic();
    // getCefr();
    console.log(ranks);
  }, []);

  return (
    <div className="RankingContainer">
      <Navbar />
      <div className="UserListHead">
        <p className="UserListTitle">User list</p>
      </div>
      <div className="TabbarUserList">
        <p className="TitleUserList">Find</p>
        <input
          className="searchInputUserList"
          placeholder="Search"
          type="search"
        />
        <Button
          variant="primary"
          className="fa fa-plu m-1"
          onClick={() => {
            swal({
              icon: "warning",
              title: `กำลังปรับปรุงฟังชั่นการใช้งาน`,
            });
          }}
        >
          Search
        </Button>
        <Button
          variant="success"
          className="fa fa-plu m-1"
          onClick={() => {
            handleADDShow();
          }}
        >
          ADD NEW
        </Button>
      </div>
      <div style={{ display: "flex" }}>
        <div className="DataRankList">
          <Table>
            <thead>
              <tr>
                <th>TOEIC</th>
              </tr>
              <tr className="table-warning">
                <th>Rank</th>
                <th>MIN</th>
                <th>MAX</th>
                <th>Edit</th>
              </tr>
            </thead>
            <tbody>
              {ranks?.[0].rank.map((item) => {
                return (
                  <tr>
                    <td>{item.name}</td>
                    <th>{item.min}</th>
                    <th>{item.max}</th>
                    <th>
                      <Button variant="warning">Edit</Button>
                    </th>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
        <div className="DataRankList">
          <Table>
            <thead>
              <tr>
                <th>CEFR</th>
              </tr>
              <tr className="table-warning">
                <th>Rank</th>
                <th>MIN</th>
                <th>MAX</th>
                <th>Edit</th>
              </tr>
            </thead>
            <tbody>
              {ranks?.[1].rank.map((item) => {
                return (
                  <tr>
                    <td>{item.name}</td>
                    <th>{item.min}</th>
                    <th>{item.max}</th>
                    <th>
                      <Button variant="warning">Edit</Button>
                    </th>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
      </div>

      {/* Model for ADD User */}
      <div className="model-box-view">
        <Modal show={showADD} onHide={handleADDClose} size="lg">
          <Modal.Header closeButton>
            <Modal.Title>ADD USER</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Row className="g-3 mb-3">
                <Col md>
                  <FloatingLabel
                    controlId="floatingSelectGrid"
                    label="Rank with selects"
                  >
                    <Form.Select
                      aria-label="Floating label select example"
                      onChange={(e) => setRname(e.target.value)}
                    >
                      <option>Open this Select Rank</option>
                      <option value="TOEIC">TOEIC</option>
                      <option value="CEFR">CEFR</option>
                    </Form.Select>
                  </FloatingLabel>
                </Col>
                <Col md>
                  <Form.Floating>
                    <Form.Control
                      type="number"
                      placeholder="MIN"
                      onChange={(e) => setRmin(e.target.value)}
                    />
                    <label htmlFor="floatingPasswordCustom">MIN</label>
                  </Form.Floating>
                </Col>
                <Col md>
                  <Form.Floating>
                    <Form.Control
                      type="number"
                      placeholder="MAX"
                      onChange={(e) => setRmax(e.target.value)}
                    />
                    <label htmlFor="floatingPasswordCustom">MAX</label>
                  </Form.Floating>
                </Col>

                <Button variant="outline-dark">+</Button>
              </Row>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleADDClose}>
              Close
            </Button>
            <Button
              variant="primary"
              //  onClick={handleADDSubmit}
            >
              ADD Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
}
