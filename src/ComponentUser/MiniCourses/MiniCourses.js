import React from "react";
import "./minicourses.css";
import { Link } from "react-router-dom";
import { Table, Button } from "react-bootstrap";

export default function Minicourses() {
  return (
    <div className="Minicourses">
      <div className="container-Minicourses">
        <div className="MinicoursesTable">
          <div className="Minicourses-r">
            <Button variant="warning">Show how to use</Button>
          </div>
          <div className="Minicourses-l">
            <div className="TableShowData">
              <Table hover striped="row">
                <thead>
                  <tr>
                    <th>DAY</th>
                    <th>09.00-10.00 AM</th>
                    <th>10.00-11.00 AM</th>
                    <th>11.00-12.00 AM</th>
                    <th></th>
                    <th>01.00-02.00 PM</th>
                    <th>02.00-03.00 PM</th>
                    <th>03.00-04.00 PM</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>MON</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>TUE</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>WED</td>
                    <td>Larry the Bird</td>
                    <td>@twitter</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>THU</td>
                    <td>Larry the Bird</td>
                    <td>@twitter</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>FRI</td>
                    {Array.from({ length: 7 }).map((_, index) => (
                      <td key={index}>Table cell {index}</td>
                    ))}
                  </tr>
                </tbody>
              </Table>
            </div>
            <div className="TableShowCourses">
              <div className="FindMiniCourse">
                <p>Find Mini Course</p>
                <input type="text" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
