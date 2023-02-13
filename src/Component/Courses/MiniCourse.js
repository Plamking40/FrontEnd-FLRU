import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
import { Table } from "react-bootstrap";
import "./minicourse.css";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export default function MiniCourse() {
  const [value, onChange] = useState(new Date());
  const Day = [
    { Day: "Mon" },
    { Day: "Tue" },
    { Day: "Wed" },
    { Day: "Thu" },
    { Day: "Fri" },
  ];

  useEffect(() => {
    console.log(value);
  });

  return (
    <div className="TeamMembers">
      <Navbar />
      <div className="UserListHead">
        <p className="UserListTitle">Mini Courses</p>
      </div>
      <div className="miniCourse-container">
        <Table bordered hover>
          <thead>
            <tr className="bg-primary text-white">
              <th></th>
              <th>9-10 AM</th>
              <th>10-11 AM</th>
              <th>11-12 AM</th>
              <th></th>
              <th>1-2 PM</th>
              <th>2-3 PM</th>
              <th>3-4 PM</th>
            </tr>
          </thead>
          <tbody>
            {Day.map((item) => {
              return (
                <tr>
                  <td className="table-primary text-black">{item.Day}</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              );
            })}
          </tbody>
        </Table>
        <div className="m-3">
          <Calendar onChange={onChange} value={value} />
        </div>
      </div>
      <div className="DataGridUserList mt-4">
        <Table bordered hover>
          <thead>
            <tr className="table-warning">
              <th>No</th>
              <th>Courses</th>
              <th>Time</th>
              <th>Room</th>
              <th>Instructor</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
}
