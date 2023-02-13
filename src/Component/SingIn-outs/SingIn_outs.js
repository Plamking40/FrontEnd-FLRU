import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
import "./SingIn_outs.css";
import { Form, FloatingLabel, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function SingIn_outs() {
  const [timestamp, setTimestamp] = useState();
  const [barcode, setBarcode] = useState();

  const [data, setData] = useState([
    {
      id: 1,
      firstname: "1234567890",
      lastname: "John Doe",
      username: "upchh@example.com",
    },
  ]);

  const [time, setTime] = useState(0);
  const [date, setDate] = useState();

  const key = JSON.parse(window.localStorage.getItem("UserRole"));
  const history = useNavigate();
  useEffect(() => {
    if (key?.status != "Admin") {
      history("/");
    }
    const interval = setInterval(() => {
      setTime((data) => new Date().toLocaleTimeString());
      setDate((data) => new Date().toLocaleDateString());
    }, 1000);
    return () => clearInterval(interval);
  });

  return (
    <div className="SingInOutContainer1">
      <Navbar />
      <div className="UserListHead">
        <p className="UserListTitle">SingIn & SingOut</p>
      </div>
      <div className="BodyContainer">
        <div className="left-datetime-show">
          <h5>{date}</h5>
          <h1>{time}</h1>
        </div>
        <div className="right-sign-show">
          <h3>Sign In & Out</h3>
          <FloatingLabel
            controlId="floatingInput"
            label="Barcode"
            className="mb-3"
          >
            <Form.Control
              type="text"
              placeholder="name@example.com"
              onChange={(e) => setBarcode(e.target.value)}
            />
          </FloatingLabel>
        </div>
      </div>
      <div className="BodyContainer">
        <div className="table-data-sign">
          <Table>
            <thead>
              <tr className="table-warning">
                <th></th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Username</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => {
                return (
                  <tr>
                    <td>{item.id}</td>
                    <td>{item.firstname}</td>
                    <td>{item.lastname}</td>
                    <td>{item.username}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
}
