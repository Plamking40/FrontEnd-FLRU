import "./Rank.css";
import Reward1 from "../../Img/Reward/Reward1.png";
import Reward2 from "../../Img/Reward/Reward2.png";
import Reward3 from "../../Img/Reward/Reward3.png";
import Reward4 from "../../Img/Reward/Reward4.png";
import Reward5 from "../../Img/Reward/Reward5.png";
import Reward6 from "../../Img/Reward/Reward6.png";
import Reward7 from "../../Img/Reward/Reward7.png";
import ProgressBar from "react-bootstrap/ProgressBar";
import Boy from "../../Img/Icons/boy.jpg";
import Axios from "axios";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function Rank() {
  const [quest, setQuest] = useState([]);
  const [level, setLevel] = useState([]);

  const getQuest = () => {
    Axios.get("http://localhost:8080/quests")
      .then((res) => {
        setQuest(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getLevel = () => {
    Axios.get("http://localhost:8080/levels")
      .then((res) => {
        setLevel(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const history = useNavigate();

  const key = JSON.parse(window.localStorage.getItem("UserRole"));

  useEffect(() => {
    getQuest();
    getLevel();

    if (key?.status != "Student") {
      history("/");
    }
  }, []);

  const DataReward = [
    {
      id: 1,
      img: `${Reward1}`,
    },
    {
      id: 2,
      img: `${Reward2}`,
    },
    {
      id: 3,
      img: `${Reward3}`,
    },
    {
      id: 4,
      img: `${Reward4}`,
    },
    {
      id: 5,
      img: `${Reward5}`,
    },
    {
      id: 6,
      img: `${Reward6}`,
    },
    {
      id: 7,
      img: `${Reward7}`,
    },
  ];

  const [userLv, SetUserLv] = useState(1);
  const [userExp, SetUserExp] = useState(110);

  function ExpBar() {
    if (userLv == 100 || userLv > 100) {
      SetUserLv(userLv + 1);
    } else if (userLv == 200 || userLv > 200) {
      SetUserLv(userLv + 1);
    }
    return (
      <div className="ExpBar">
        FLRU Level {userLv}
        <ProgressBar
          now={userExp}
          label={`${userExp} / 100`}
          variant="success"
          className="ExpBarProgress"
        />
      </div>
    );
  }

  return (
    <div className="Rank">
      <div className="container-Rank">
        <div className="RankFull">
          <p>Home &raquo; Quiz &raquo; Result</p>
        </div>
        <div className="RarkBody">
          <div className="ProfileRank">
            <img className="ProfileRankImg" src={Boy} alt="" />
            {level.map((item) => {
              if (userExp >= item.Exp_max) {
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
            <h3>{key?.user_id.toUpperCase()}</h3>
            <p>
              {key?.firstname} {key?.lastname}
            </p>
          </div>
          <div className="RankBoard">
            <div className="head-RankBoard">
              <h2>Hello,Jane</h2>
              <ExpBar />
            </div>
            {/* <div className="Body-RankBoard">
              <h2>Badge Collection</h2>
              <img src="" alt="" />
            </div> */}
            <div className="Body-RankBoard">
              <div className="Body-Head-level">
                <h2>FLRU Level</h2>
              </div>
              <ul class="step-wizard-list">
                <li class="step-wizard-item">
                  <span class="progress-count">1</span>
                  <span class="progress-label">Bronze</span>
                </li>
                <li class="step-wizard-item">
                  <span class="progress-count">2</span>
                  <span class="progress-label">Silver</span>
                </li>
                <li class="step-wizard-item current-item">
                  <span class="progress-count">3</span>
                  <span class="progress-label">Gold</span>
                </li>
                <li class="step-wizard-item">
                  <span class="progress-count">4</span>
                  <span class="progress-label">Platinum</span>
                </li>
              </ul>
              <h4>Reward</h4>
              <div className="Reward-Rank">
                {DataReward.map((item) => {
                  return (
                    <>
                      <div className="Reward-Rank-btn">
                        <img src={item.img} alt="" />
                      </div>
                    </>
                  );
                })}
              </div>
              <h4>Goal</h4>
              <div className="Goal-Rank">
                {quest.map((item) => {
                  return (
                    <div className="Body-Goal-Rank">
                      {/* <h5>{item.quest}</h5> */}
                      <p>{item.content}</p>
                      <ProgressBar
                        variant="success"
                        now={20}
                        label={20}
                        max={item.exp}
                      />
                    </div>
                  );
                })}
              </div>
              <h4>Guide</h4>
              <div className="Guide-Rank">
                <div className="item-Guide-Rank">
                  <p>TOEIC- Listening</p>
                  <p>Fri.30/9/2022 10:00 - 11:00</p>
                  <p>Prof.A</p>
                  <img src={Boy} alt="" />
                  <div className="item-Guide-Footer">
                    <p>2 / 15</p>
                    <Button variant="warning">Reserve</Button>
                  </div>
                </div>
                <div className="item-Guide-Rank">
                  <p>TOEIC- Listening</p>
                  <p>Fri.30/9/2022 10:00 - 11:00</p>
                  <p>Prof.A</p>
                  <img src={Boy} alt="" />
                  <div className="item-Guide-Footer">
                    <p>2 / 15</p>
                    <Button variant="warning">Reserve</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
