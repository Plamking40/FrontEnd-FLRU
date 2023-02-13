import "./profile.css";
import Reward1 from "../../Img/Reward/Reward1.png";
import Reward2 from "../../Img/Reward/Reward2.png";
import Reward3 from "../../Img/Reward/Reward3.png";
import Reward4 from "../../Img/Reward/Reward4.png";
import Reward5 from "../../Img/Reward/Reward5.png";
import Reward6 from "../../Img/Reward/Reward6.png";
import Reward7 from "../../Img/Reward/Reward7.png";
import ProgressBar from "react-bootstrap/ProgressBar";
import Axios from "axios";
import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { Form, Row, Col } from "react-bootstrap";

export default function Profile() {
  const [quest, setQuest] = useState([]);
  const [level, setLevel] = useState([]);
  const [userLv, SetUserLv] = useState(110);
  const [profileName, setProfileName] = useState([]);

  const history = useNavigate();

  const key = JSON.parse(window.localStorage.getItem("UserRole"));

  const getLevel = () => {
    Axios.get("http://localhost:8080/levels")
      .then((res) => {
        setLevel(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

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

  const getProfileUser = async () => {};

  useEffect(() => {
    getLevel();
    getProfile();
    console.log(level);
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
            {level.map((item) => {
              if (userLv >= item.Exp_max) {
                switch (item.Name) {
                  case "Silver I":
                    return (
                      <>
                        <img className="ImgRank" src={Reward2}></img>
                        <p>{item.Name}</p>
                      </>
                    );
                    break;
                  case "Silver II":
                    return (
                      <>
                        <img className="ImgRank" src={Reward3}></img>
                        <p>{item.Name}</p>
                      </>
                    );
                    break;
                  default:
                    break;
                }
                return;
              }
            })}
            <h3>{key.user_id}</h3>
            <p>
              {key.firstname} {key.lastname}
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
                      <Form.Control type="text" placeholder="Enter Firstname" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                      <Form.Label>Lastname</Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Enter Lastname"
                      />
                    </Form.Group>
                  </Row>
                  <Row className="g2">
                    <Form.Group as={Col} controlId="formGridEmail">
                      <Form.Label>Email</Form.Label>
                      <Form.Control type="email" placeholder="Enter Email" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridEmail">
                      <Form.Label>Tel</Form.Label>
                      <Form.Control type="tel" placeholder="Enter Tel" />
                    </Form.Group>
                  </Row>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
