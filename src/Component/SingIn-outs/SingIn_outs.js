import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
import "./SingIn_outs.css";
import { Form, FloatingLabel, Table, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Axios from "axios";

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
    getSign();
    if (key?.status != "Admin") {
      history("/");
    }
    const interval = setInterval(() => {
      setTime((data) => new Date().toLocaleTimeString());
      setDate((data) => new Date().toLocaleDateString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const [sign, setSign] = useState([]);

  const handleSign = async () => {
    await Axios.post(
      "https://flru-learning.herokuapp.com/Signinout/create-signinout",
      {
        user_id: barcode,
        timestamp: timestamp,
        status: "SignIn",
      }
    )
      .then((res) => {
        console.log(res.data);
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getSign = async () => {
    await Axios.get("https://flru-learning.herokuapp.com/Signinout")
      .then((res) => {
        console.log(res.data);
        setSign(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
          <div
            style={{
              display: "flex",
              justifyContent: "centen",
              alignItems: "center",
            }}
          >
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
            <Button onClick={handleSign} className="m-2">
              Click
            </Button>
          </div>
        </div>
      </div>
      <div className="BodyContainer">
        <div className="table-data-sign">
          <Table>
            <thead>
              <tr className="table-warning">
                <th></th>
                <th>First Name</th>
                <th>Status</th>
                <th>Timestamp</th>
              </tr>
            </thead>
            <tbody>
              {sign?.map((item, index) => {
                const data = new Date(item.timestamp);
                return (
                  <tr>
                    <th>{index + 1}</th>
                    <td>{item.user_id}</td>
                    <td>{item.status}</td>
                    <td>{data.toUTCString()}</td>
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
