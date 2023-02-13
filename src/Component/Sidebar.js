import "./sidebar.css";
import Home from ".././Img//Icons/home.png";
import Teammembers from ".././Img//Icons/Teammembers.png";
import MonthlyIncome from ".././Img//Icons/monthlyIncome.png";
import Salary from ".././Img//Icons/Salary.png";
import Settings from ".././Img//Icons/settings.png";
import Teammerbers from ".././Img//Icons/Teammembers.png";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";

export default function Sidebar() {
  const history = useNavigate();

  const handLogOut = async () => {
    setTimeout(function () {
      window.location.reload(true);
      window.localStorage.clear();
    }, 2000);
    await swal({
      icon: "success",
      title: `SIGN OUT`,
      text: `Thank you for using the service.`,
      button: false,
    });
    history("/");
  };

  return (
    <div className="mainSidebarContainer">
      <div>
        <div className="adminContainer">
          <h1 className="adminText">English Language Resource</h1>
        </div>
        <ul className="ulContainer">
          <h4 className="menu">Main Menu</h4>
          <Link to={"/home"} style={{ textDecoration: "none" }}>
            <li className="liContainer">
              <img src={`${Home}`} className="sidebericons" alt="" />
              <p className="itemNames">Dashboard</p>
            </li>
          </Link>
          <Link to={"/team"} style={{ textDecoration: "none" }}>
            <li className="liContainer">
              <img src={`${Teammembers}`} className="sidebericons" alt="" />
              <p className="itemNames">User Mangement</p>
            </li>
          </Link>
          <Link to={"/Courses"} style={{ textDecoration: "none" }}>
            <li className="liContainer">
              <img src={`${Teammerbers}`} className="sidebericons" alt="" />
              <p className="itemNames">Courses Mangement</p>
            </li>
          </Link>
          <Link to={"/MiniCourses"} style={{ textDecoration: "none" }}>
            <li className="liContainer">
              <img src={`${Teammerbers}`} className="sidebericons" alt="" />
              <p className="itemNames">Mini Courses Table</p>
            </li>
          </Link>
          <Link to={"/Quiz"} style={{ textDecoration: "none" }}>
            <li className="liContainer ">
              <img src={`${MonthlyIncome}`} className="sidebericons" alt="" />
              <p className="itemNames">Quiz</p>
            </li>
          </Link>
          <Link to={"/Rank"} style={{ textDecoration: "none" }}>
            <li className="liContainer ">
              <img src={`${Salary}`} className="sidebericons" alt="" />
              <p className="itemNames">Ranking</p>
            </li>
          </Link>
          <Link to={"/SingIn_Outs"} style={{ textDecoration: "none" }}>
            <li className="liContainer">
              <img src={`${Settings}`} className="sidebericons" alt="" />
              <p className="itemNames">Sign In/Sign Out </p>
            </li>
          </Link>
          <Link to={"/"} style={{ textDecoration: "none" }}>
            <li className="liContainer" onClick={handLogOut}>
              <img src={`${Settings}`} className="sidebericons" alt="" />
              <p className="itemNames">Log Out</p>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
}
