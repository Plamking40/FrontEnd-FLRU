import "./sidebar.css";
import Salary from ".././Img//Icons/Salary.png";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
import { GoSignIn } from "react-icons/go";
import { BsUiChecks } from "react-icons/bs";
import { IoHome } from "react-icons/io5";
import { FaUsers } from "react-icons/fa";
import { HiTableCells } from "react-icons/hi2";
import { ImBooks } from "react-icons/im";
import { BiBookBookmark } from "react-icons/bi";
import { MdFormatListNumbered } from "react-icons/md";

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
              <IoHome className="sidebericons" />

              <p className="itemNames">Dashboard</p>
            </li>
          </Link>
          <Link to={"/team"} style={{ textDecoration: "none" }}>
            <li className="liContainer">
              <FaUsers className="sidebericons" />
              <p className="itemNames">User Mangement</p>
            </li>
          </Link>
          <Link to={"/Courses"} style={{ textDecoration: "none" }}>
            <li className="liContainer">
              <BiBookBookmark className="sidebericons" />
              <p className="itemNames">Courses Mangement</p>
            </li>
          </Link>
          <Link to={"/MiniCourses"} style={{ textDecoration: "none" }}>
            <li className="liContainer">
              <HiTableCells className="sidebericons" />
              <p className="itemNames">Mini Courses Table</p>
            </li>
          </Link>
          <Link to={"/Quiz"} style={{ textDecoration: "none" }}>
            <li className="liContainer ">
              <ImBooks className="sidebericons" />
              <p className="itemNames">Quiz Mangement</p>
            </li>
          </Link>
          <Link to={"/Rank"} style={{ textDecoration: "none" }}>
            <li className="liContainer ">
              <MdFormatListNumbered className="sidebericons" />
              <p className="itemNames">Ranking</p>
            </li>
          </Link>
          <Link to={"/SingIn_Outs"} style={{ textDecoration: "none" }}>
            <li className="liContainer">
              <BsUiChecks className="sidebericons" />
              <p className="itemNames">Sign In/Sign Out </p>
            </li>
          </Link>
          <Link to={"/"} style={{ textDecoration: "none" }}>
            <li className="liContainer" onClick={handLogOut}>
              <GoSignIn className="sidebericons" />
              <p className="itemNames">Log Out</p>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
}
