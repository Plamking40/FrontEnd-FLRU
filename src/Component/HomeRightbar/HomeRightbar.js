import React, { useEffect } from "react";
import "./homerightbar.css";
import Navbar from "../Navbar";
import {
  PieChart,
  Pie,
  Cell,
  ComposedChart,
  Line,
  LineChart,
  Bar,
  BarChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { useNavigate } from "react-router-dom";

export default function HomeRightbar() {
  const key = JSON.parse(window.localStorage.getItem("UserRole"));
  const history = useNavigate();

  useEffect(() => {
    if (key?.status != "Admin") {
      history("/");
    }
  });

  const data1 = [
    {
      name: "09.00 AM",
      uv: 12,
      fill: "#FFBABA",
    },
    {
      name: "10.00 AM",
      uv: 9,
      fill: "#FFBABA",
    },
    {
      name: "11.00 AM",
      uv: 21,
      fill: "#FFBABA",
    },
    {
      name: "12.00 PM",
      uv: 0,
      fill: "#FFBABA",
    },
    {
      name: "01.00 PM",
      uv: 51,
      fill: "#FF5F5F",
    },
    {
      name: "02.00 PM",
      uv: 27,
      fill: "#FFBABA",
    },
    {
      name: "03.00 PM",
      uv: 10,
      fill: "#FFBABA",
    },
  ];

  const data2 = [
    {
      name: "Page A",
      uv: 1000,
      fill: "#bab4b4",
    },
    {
      name: "Page B",
      uv: 600,
      fill: "#bab4b4",
    },
    {
      name: "Page C",
      uv: 900,
      fill: "#bab4b4",
    },
    {
      name: "Page D",
      uv: 2500,
      fill: "#bab4b4",
    },
    {
      name: "Page E",
      uv: 1890,
      fill: "#bab4b4",
    },
    {
      name: "Page F",
      uv: 3500,
      fill: "#f4b64b",
    },
    {
      name: "Page G",
      uv: 390,
      fill: "#bab4b4",
    },
  ];

  const data3 = [
    {
      name: "Page A",
      uv: 1000,
      fill: "#bab4b4",
    },
    {
      name: "Page B",
      uv: 4000,
      fill: "#f77535",
    },
    {
      name: "Page C",
      uv: 900,
      fill: "#bab4b4",
    },
    {
      name: "Page D",
      uv: 400,
      fill: "#bab4b4",
    },
    {
      name: "Page E",
      uv: 1890,
      fill: "#bab4b4",
    },
    {
      name: "Page F",
      uv: 1500,
      fill: "#bab4b4",
    },
    {
      name: "Page G",
      uv: 390,
      fill: "#bab4b4",
    },
  ];

  const data4 = [
    {
      name: "Page A",
      Task_Created: 4000,
      Task_Completed: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      Task_Created: 3000,
      Task_Completed: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      Task_Created: 2000,
      Task_Completed: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      Task_Created: 2780,
      Task_Completed: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      Task_Created: 1890,
      Task_Completed: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      Task_Created: 2390,
      Task_Completed: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      Task_Created: 3490,
      Task_Completed: 4300,
      amt: 2100,
    },
  ];

  const data5 = [
    {
      name: "Jan",
      uv: 590,
      amt: 2400,
      fill: "#bab4b4",
    },
    {
      name: "Feb",
      uv: 868,
      amt: 1506,
      fill: "#bab4b4",
    },
    {
      name: "Mar",
      uv: 1397,
      amt: 989,
      fill: "#bab4b4",
    },
    {
      name: "Aar",
      uv: 1800,
      amt: 1228,
      fill: "#bab4b4",
    },
    {
      name: "May",
      uv: 1210,
      amt: 1100,
      fill: "#bab4b4",
    },
    {
      name: "Jun",
      uv: 3400,
      amt: 1700,
      fill: "#413ea0",
    },
    {
      name: "Jul",
      uv: 590,
      amt: 1400,
      fill: "#bab4b4",
    },
    {
      name: "Aug",
      uv: 868,
      amt: 1506,
      fill: "#bab4b4",
    },
    {
      name: "Sep",
      uv: 1397,
      amt: 989,
      fill: "#bab4b4",
    },
    {
      name: "Oct",
      uv: 1480,
      amt: 1228,
      fill: "#bab4b4",
    },
    {
      name: "Nov",
      uv: 1520,
      amt: 1100,
      fill: "#bab4b4",
    },
    {
      name: "Dec",
      uv: 1400,
      amt: 1700,
      fill: "#bab4b4",
    },
  ];

  const data6 = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 300 },
    { name: "Group D", value: 200 },
  ];
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
  return (
    <div className="mainHomeRightbar">
      <Navbar />
      <div className="dashboardHerd">
        <p className="dashHerdTitle">Dashboard</p>
      </div>
      <div className="bodyContainer">
        <div className="body-l">
          <div className="BarchatContainer">
            <p className="DayTitle">Web. 19 October 2022</p>
            <div className="DayBtnContainer">
              <button className="DayBtn">Today</button>
              <button className="DayBtn">Daily</button>
              <button className="DayBtn">Weekly</button>
              <button className="DayBtn">Monthly</button>
              <button className="DayBtn">Semester</button>
            </div>
            <div className="DatBarChart">
              <BarChart width={730} height={250} data={data1}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="pv" fill="#8884d8" />
                <Bar dataKey="uv" fill="#82ca9d" />
              </BarChart>
            </div>
            <div className="useronlineContainer">
              <div className="userOnline">
                <h2 className="userTitle">Current User</h2>
                <p className="userNum">18</p>
              </div>
              <div className="userOnline">
                <h2 className="userTitle">Total user (Today)</h2>
                <p className="userNum">60</p>
              </div>
            </div>
          </div>
        </div>

        <div className="body-r">
          <div className="OngoingCourseContainer">
            <p className="OngoingCourseHead">Ongoing Course</p>
            <div className="nameCourse">
              <div className="nameCourse1"></div>
              <p className="nameCourse2">Vocabulary</p>
              <div className="nameCourse3">
                <p>Start 11.00 AM</p>
                <p>End 12.00 AM</p>
              </div>
            </div>
          </div>
          <div className="calendarContainer">
            <p>October, 2565</p>
          </div>
          <div className="UserAlltimeContainer">
            <p>TatalUser(All time)</p>
            <p>325</p>
            <p>Total Courses</p>
            <p>9</p>
          </div>
        </div>
      </div>
      <div>
        <div className="ItemContainer">
          <div className="ItemContainer1">
            <div className="subitemContainer">
              <p className="taskProgress">Task Progress</p>
              <p className="taskCounter">212</p>
              <p className="currentmonth1">Current Month</p>
            </div>
            <div className="barchartContainer">
              <BarChart width={166} height={100} data={data1}>
                <Tooltip />
                <Bar dataKey="uv" fill="fill" />
              </BarChart>
            </div>
          </div>
          <div className="ItemContainer1">
            <div className="subitemContainer">
              <p className="taskProgress">Task Completed</p>
              <p className="taskCounter1">301</p>
              <p className="currentmonth1">Current Month</p>
            </div>
            <div className="barchartContainer">
              <BarChart width={166} height={100} data={data2}>
                <Tooltip />
                <Bar dataKey="uv" fill="fill" />
              </BarChart>
            </div>
          </div>
          <div className="ItemContainer1">
            <div className="subitemContainer1">
              <p className="taskProgress">Monthly Task Summary</p>
              <p className="taskCounter2">1294</p>
              <p className="currentmonth1">Current Month</p>
            </div>
            <div className="barchartContainer">
              <BarChart width={166} height={100} data={data3}>
                <Tooltip />
                <Bar dataKey="uv" fill="fill" />
              </BarChart>
            </div>
          </div>
        </div>
        <div className="MiddleTaskChart">
          <p className="TaskCretedvsCompletad">
            Task Created vs Task Completed
          </p>
          <LineChart
            width={1150}
            height={200}
            data={data4}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="Task_Created" stroke="#8884d8" />
            <Line type="monotone" dataKey="Task_Completed" stroke="#82ca9d" />
          </LineChart>
        </div>
        <div className="TaskContainer">
          <div className="TaskChart">
            <p className="taskContainertext">Your Team Performance This Week</p>
            <PieChart width={300} height={300}>
              <Pie
                data={data6}
                cx={160}
                cy={100}
                startAngle={180}
                endAngle={0}
                innerRadius={50}
                outerRadius={80}
                fill="#8884d8"
                paddingAngle={5}
                dataKey="value"
              >
                {data6.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
            </PieChart>
            <p className="teamPerformance">
              Your Team Performance is 5% better then last week
            </p>
            <button className="WiewDetailsBtn">View Details</button>
          </div>
          <div className="MonthlyEarning">
            <p className="taskContainertext">Monthly Earning Performance</p>
            <ComposedChart
              width={800}
              height={260}
              data={data5}
              margin={{
                top: 20,
                right: 20,
                bottom: 20,
                left: 20,
              }}
            >
              <CartesianGrid stroke="#f5f5f5" />
              <XAxis dataKey="name" scale="band" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="uv" barSize={20} fill="#413ea0" />
              <Line type="monotone" dataKey="uv" stroke="#ff7300" />
            </ComposedChart>
          </div>
        </div>
      </div>
    </div>
  );
}
