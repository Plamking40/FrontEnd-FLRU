import "./profile.css";
import Axios from "axios";
import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import { Form, Row, Col, Table } from "react-bootstrap";

export default function Profile() {
  const [profileName, setProfileName] = useState([]);
  const [user_id, setUser_id] = useState();

  const history = useNavigate();

  const key = JSON.parse(window.localStorage.getItem("UserRole"));

  const getProfile = async () => {
    let headersList = {
      Accept: "*/*",
      "User-Agent": "Thunder Client (https://www.thunderclient.com)",
      Authorization: window.localStorage.getItem("token"),
      "Content-Type": "application/json",
    };

    let reqOptions = {
      url: "http://localhost:8080/users/profile",
      method: "GET",
      headers: headersList,
      data: {},
    };

    let response = Axios.request(reqOptions);
    setProfileName(response);

    // if (response.status != 200) {
    //   console.log(response.status);
    //   history("/");
    // }
  };

  const [ProfileID, setProfileID] = useState([]);

  const getProfileUser = async () => {
    await Axios.post(`http://localhost:8080/users/login-profile`, {
      user_id: "B6316532",
    }).then((response) => {
      setProfileID(response.data);
    });
  };

  const [historyData, setHistoryData] = useState([]);

  const getHistory = async () => {
    await Axios.post(`http://localhost:8080/QuizHistory/get-History`, {
      user_id: "B6316532",
    }).then((response) => {
      setHistoryData(response.data);
    });
  };

  useEffect(() => {
    if (key?.status != "Student") {
      history("/");
    }
    getProfileUser();
    getHistory();
    console.log(historyData);
  }, []);

  return (
    <div className="Profile">
      <div className="container-Profile">
        <div className="ProfileBody">
          <div className="Profiles">
            <img
              className="ProfileRankImg"
              src="https://scontent.fnak3-1.fna.fbcdn.net/v/t1.15752-9/327373069_1782240815490151_5594021947731530814_n.png?_nc_cat=102&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeHhR4de_9xzxvEEHKXcXtutzbPNH5anbtDNs80flqdu0IibIJxp5RCyOfVwI2oOKuA9v7BogY2I-eoCUescKMYX&_nc_ohc=EBWBMuJa4hgAX9VWqGM&_nc_ht=scontent.fnak3-1.fna&oh=03_AdRMCeAds555YCeGiSGXJVwN3TeUL1zPhfF8-qpkYvOIEQ&oe=63F8E50C"
              alt=""
            />

            <h3>{ProfileID?.user_id}</h3>
            <p>
              {ProfileID?.firstname} {ProfileID?.lastname}
            </p>
          </div>
          <div className="ProfilesBoard">
            <div className="Body-Profiles">
              <div className="Body-Head-Profiles">
                <h2>PROFILE</h2>
              </div>
              <div className="Body-Input">
                <Form>
                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                      <Form.Label>Firstname</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter Firstname"
                        defaultValue={ProfileID?.firstname}
                      />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                      <Form.Label>Lastname</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter Lastname"
                        defaultValue={ProfileID?.lastname}
                      />
                    </Form.Group>
                  </Row>
                  <Row className="g2">
                    <Form.Group as={Col} controlId="formGridEmail">
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Enter Email"
                        defaultValue={ProfileID?.email}
                      />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridEmail">
                      <Form.Label>Tel</Form.Label>
                      <Form.Control
                        type="tel"
                        placeholder="Enter Tel"
                        defaultValue={ProfileID?.tel}
                      />
                    </Form.Group>
                  </Row>
                </Form>
              </div>
              <div className="History">
                <div className="Head-History">
                  <h2>HISTORY</h2>
                </div>
                <div className="Body-History">
                  <Table>
                    <thead>
                      <tr id="tr1">
                        <th></th>
                        <th>Quiz</th>
                        <th>Score</th>
                        <th>Timestamp</th>
                      </tr>
                    </thead>
                    <tbody>
                      {historyData?.map((item, index) => {
                        const date = new Date(item.created_at);
                        return (
                          <>
                            <tr>
                              <td>{index + 1}</td>
                              <td>{item.quiz}</td>
                              <td>{item.score}</td>
                              <td>{date.toLocaleDateString("en-US")}</td>
                            </tr>
                          </>
                        );
                      })}
                    </tbody>
                  </Table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
