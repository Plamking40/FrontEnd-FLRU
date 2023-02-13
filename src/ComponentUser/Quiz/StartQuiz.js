import React, { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import ProgressBar from "react-bootstrap/ProgressBar";
import "./startQuiz.css";
import Axios from "axios";
import BGrank from "../../Img/Asset/BG-rank.png";
import swal from "sweetalert";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function StartQuiz() {
  const [selectedValue, setSelectedValue] = useState("");

  function handleChange(event) {
    setSelectedValue(event.target.value);
  }

  const [optionslocal, setOptionsLocal] = useState([]);
  const [rankCompares, setRankCompares] = useState("");
  const [Compares, setCompares] = useState("");

  async function NextQuiz() {
    const nextQuestion = currentQuestion + 1;
    const datauser = JSON.parse(window.localStorage.getItem("UserRole"));

    console.log(datauser?.user_id);

    if (nextQuestion == question?.questions?.length) {
      let headersList = {
        "Content-Type": "application/json",
      };

      let bodyContent = JSON.stringify({
        user_id: datauser?.user_id,
        options: JSON.parse(window.localStorage.getItem("is_right")),
        Quiz_id: id,
      });

      let reqOptions = {
        url: "http://localhost:8080/QuizHistory/create-QuizHistory",
        method: "POST",
        headers: headersList,
        data: bodyContent,
      };

      axios.request(reqOptions).then((res) => {
        console.log("res: ", res.data);
        if (res.data.status == "success") {
          setScore(res.data.score);
          setScoreListening(res.data.scoreListening);
          setScoreWriting(res.data.scoreWriting);
          setScoreSpeaking(res.data.scoreSpeaking);
          setScoreReading(res.data.scoreReading);
          setRankCompares(res.data.rankType);
          setCompares(res.data.Compares);
        }
      });

      setShowScore(true);
    }
    setCurrentQuestion(nextQuestion);
    optionslocal.push(selectedValue);
    window.localStorage.setItem("is_right", JSON.stringify(optionslocal));
    setSelectedValue("");
  }

  const [question, setQuestion] = useState(null);

  const [rankType, setRankType] = useState();

  const { id } = useParams();

  const getQuestion = (id) => {
    Axios.get(`http://localhost:8080/question/StartQuizs/${id}`).then(
      (response) => {
        console.log(response.data);
        setQuestion(response.data);
      }
    );
  };

  const getRankType = () => {
    Axios.get(`http://localhost:8080/rankcompares`).then((response) => {
      console.log(response.data);
      setRankType(response.data);
    });
  };

  useEffect(() => {
    getQuestion(id);
    getRankType();
    console.log(question);
  }, []);

  const EngRank = [
    {
      title: "CEFR",
      rank: "A1",
      score: 1,
    },
    {
      title: "CEFR",
      rank: "A2",
      score: 2,
    },
    {
      title: "CEFR",
      rank: "A3",
      score: 3,
    },
    {
      title: "CEFR",
      rank: "A4",
      score: 4,
    },
    {
      title: "CEFR",
      rank: "A5",
      score: 5,
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [showScore, setShowScore] = useState(false);

  const [scoreListening, setScoreListening] = useState(0);
  const [scoreSpeaking, setScoreSpeaking] = useState(0);
  const [scoreWriting, setScoreWriting] = useState(0);
  const [scoreReading, setScoreReading] = useState(0);

  const [score, setScore] = useState(0);

  return (
    <div className="QuizUser">
      {showScore ? (
        <>
          <div className="contalner-StartQuiz">
            <div className="StartQuiz-con">
              <div className="QuizResult">
                <h1 className="QuizResultTitle">Quiz Result</h1>
                <div className="BtnTypeChart">
                  <Button variant="warning">Overall</Button>
                  <Button variant="light">Chart</Button>
                </div>
                <div className="ViewFull">
                  {rankType.map((item) => {
                    let i = 0;
                    if (rankCompares == item.compares) {
                      if (score)
                        return (
                          <>
                            <div className="ViewAsScore">
                              <p>{rankCompares}</p>
                              <h1>{Compares}</h1>
                            </div>
                          </>
                        );
                    }
                  })}
                  <div className="OverallScore">
                    <p>Overall Score</p>
                    <h1>
                      {score}/{question?.questions?.length}
                    </h1>
                  </div>
                  <div className="TypeScore">
                    <p>Listening</p>
                    <ProgressBar
                      now={scoreListening}
                      label={scoreListening}
                      max={question?.questions?.length}
                    />
                    <p>Speaking</p>
                    <ProgressBar
                      now={scoreSpeaking}
                      label={scoreSpeaking}
                      max={question?.questions?.length}
                    />
                    <p>Reading</p>
                    <ProgressBar
                      now={scoreWriting}
                      label={scoreWriting}
                      max={question?.questions?.length}
                    />
                    <p>Writing</p>
                    <ProgressBar
                      now={scoreReading}
                      label={scoreReading}
                      max={question?.questions?.length}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="Suggestion">
            <h2>Suggestion</h2>
            <div className="SuggestionBody">
              <h4>Listening</h4>
              <p>
                มินต์วอล์คไฮไลท์ ซูมแมคเคอเรลกับดักเรตโฟม สเปกรุสโซคูลเลอร์
                สวีทเอสเพรสโซดยุคไลฟ์ คอร์รัปชั่นแอสเตอร์ระโงกคลิป
                สถาปัตย์ราเม็งดีกรี มั้ยแคนูโปรเจ็คชัตเตอร์ โบรชัวร์บูติก
              </p>
            </div>
          </div>
          <div className="RecommendedCourse">
            <h2>Recommended Course</h2>
            <div className="ViewSchedule">
              <div className="head-color"></div>
              <p>TOEIC-Listening</p>
              <p>TBA</p>
              <p>Prof.A</p>
              <img src={BGrank} alt="" />
              <Button variant="primary">View Schedule</Button>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="contalner-StartQuiz">
            <div className="StartQuiz-con">
              <div className="StartQuizBody">
                <div className="next-Quiz">
                  <p>
                    Question {currentQuestion + 1} /{" "}
                    {question?.questions?.length}
                  </p>
                </div>

                <div className="Quiz-Part">
                  <h2>
                    {currentQuestion + 1}.
                    {question?.questions?.[currentQuestion].question}
                  </h2>
                  <p id="p1">
                    PART I - {question?.questions?.[currentQuestion].type}
                  </p>
                  <div className="BtnAnswer">
                    {question?.questions?.[currentQuestion].options.map(
                      (item, index) => {
                        return (
                          <>
                            <label class="rad-label">
                              <input
                                class="rad-input"
                                type="radio"
                                value={item}
                                checked={selectedValue === item}
                                onChange={handleChange}
                              />
                              <div class="rad-design"></div>
                              <div class="rad-text">{item}</div>
                            </label>
                          </>
                        );
                      }
                    )}
                  </div>
                  <div className="NextBtn" onClick={NextQuiz}>
                    <p>Next</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
