import React from "react";
import "./minicourses.css";
import { Link } from "react-router-dom";
import { Table, Button, Form, FloatingLabel } from "react-bootstrap";
import Calendar from "react-calendar";

export default function Minicourses() {
  return (
    <div className="Minicourses">
      <div className="container-Minicourses">
        <div className="MinicoursesTable">
          <div className="Minicourses-r">
            <Calendar className="p-2 mb-2" />
            <Button variant="warning">Show how to use</Button>
            <p>RECOMMEMD</p>
            <iframe
              width="250"
              src="https://www.youtube.com/embed/QOI7_QgQSBs?autoplay=1&mute=0"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;"
              allowfullscreen
            ></iframe>
          </div>
          <div className="Minicourses-l">
            <div className="TableShowData">
              <Table hover striped="row" bordered>
                <thead>
                  <tr>
                    <th>DAY</th>
                    <th>09.00-10.00 AM</th>
                    <th>10.00-11.00 AM</th>
                    <th>11.00-12.00 AM</th>
                    <th id="th4"></th>
                    <th>01.00-02.00 PM</th>
                    <th>02.00-03.00 PM</th>
                    <th>03.00-04.00 PM</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>MON</td>
                    <td></td>
                    <td>
                      <h5>Speaking</h5>
                      <p>Room:1</p>
                    </td>
                    <td></td>
                    <td id="th4"></td>
                    <td></td>
                    <td></td>
                    <td>
                      <h5>TOEIC</h5>
                      <p>Room:1</p>
                    </td>
                  </tr>
                  <tr>
                    <td>TUE</td>
                    <td>
                      <h5>CEFR</h5>
                      <p>Room:1</p>
                    </td>
                    <td></td>
                    <td>
                      <h5>TOEIC</h5>
                      <p>Room:1</p>
                    </td>
                    <td id="th4"></td>
                    <td>
                      <h5>Speaking</h5>
                      <p>Room:1</p>
                    </td>
                    <td>
                      <h5>CEFR</h5>
                      <p>Room:1</p>
                    </td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>WED</td>
                    <td></td>
                    <td></td>
                    <td>
                      <h5>TOEIC</h5>
                      <p>Room:1</p>
                    </td>
                    <td id="th4"></td>
                    <td></td>
                    <td></td>
                    <td>
                      <h5>Speaking</h5>
                      <p>Room:1</p>
                    </td>
                  </tr>
                  <tr>
                    <td>THU</td>
                    <td></td>
                    <td>
                      <h5>CEFR</h5>
                      <p>Room:1</p>
                    </td>
                    <td>
                      <h5>Speaking</h5>
                      <p>Room:1</p>
                    </td>
                    <td id="th4"></td>
                    <td>
                      <h5>TOEIC</h5>
                      <p>Room:1</p>
                    </td>
                    <td></td>
                    <td>
                      <h5>CEFR</h5>
                      <p>Room:1</p>
                    </td>
                  </tr>
                  <tr>
                    <td>FRI</td>
                    {Array.from({ length: 7 }).map((_, index) => (
                      <td key={index} id={`th${index + 1}`}>
                        <h5>CEFR</h5>
                        <p>Room:{index}</p>
                      </td>
                    ))}
                  </tr>
                </tbody>
              </Table>
            </div>
            <div className="TableShowCourses">
              <div className="FindMiniCourse">
                <FloatingLabel
                  controlId="floatingInput"
                  label="Find Mini Course"
                  className="mx-5 my-3"
                >
                  <Form.Control type="text" placeholder="name@example.com" />
                </FloatingLabel>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
