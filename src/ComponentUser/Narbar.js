import React, { useEffect, useState } from "react";
import Logo from "../Img/Logo.png";
import "./narbar.css";
import { Form, Modal, Button } from "react-bootstrap";
import swal from "sweetalert";
import Axios from "axios";
import { Await, json, useNavigate } from "react-router-dom";
import Profile from ".././Img/Icons/boy.jpg";
import { AiFillCaretDown } from "react-icons/ai";

/** Icon Drop */
import Logout from ".././Img/Icons/log-out.png";
import User from ".././Img/Icons/user.png";
import Quality from ".././Img/Icons/quality.png";

export default function Narbar() {
  const headersList = {
    Accept: "*/*",
    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiYXdkcXciLCJlbWFpbCI6InBsYW1raW5nNDBAZ21haWwuY29tIiwiaWF0IjoxNjc2MTQ5Njg3LCJleHAiOjE2NzYxNTY4ODd9.nc-wsH-EpVSLMdgdsH-s5l8UVih69c5UmBvOOoBTPO8`,
    "Content-Type": "application/json",
  };

  const bodyContent = JSON.stringify({
    username: "",
    password: "",
  });

  const reqOptions = {
    url: "localhost:8080/users/profile",
    method: "GET",
    headers: headersList,
    data: bodyContent,
  };

  // useEffect(() => {
  //   const response = Axios.request(reqOptions);
  //   console.log("Token : " + response.data);
  // });

  const [showLogin, setShowLogin] = useState(false);
  const handleCloseLogin = () => setShowLogin(false);
  const handleShowLogin = () => setShowLogin(true);

  const [showRegister, setShowRegister] = useState(false);
  const handleCloseRegister = () => setShowRegister(false);
  const handleShowRegister = () => setShowRegister(true);

  const [userid, setUserID] = useState();
  const [password, setPassword] = useState();
  const [firstname, setFirstname] = useState();
  const [lastname, setLastname] = useState();
  const [email, setEmail] = useState();
  const [tel, setTel] = useState();
  const [membership, setMembership] = useState("no");

  const [status, setStatus] = useState("student");

  const loginUser = () => {
    // console.log(userid + "  " + password);
    Axios.post("http://localhost:8080/users/login-user", {
      user_id: userid,
      password: password,
    })
      .then(async (res) => {
        window.localStorage.setItem("token", "Bearer " + res.data.token);

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

        let response = await Axios.request(reqOptions);
        console.log(response.data);
        window.localStorage.setItem(
          "UserRole",
          JSON.stringify(response.data.data)
        );
        if (response.data.data.status == "Student") {
          history("/");
          handleCloseLogin();
          await swal({
            icon: "success",
            title: `SIGN IN ${userid}`,
            text: `Welcome, Student to FLEU Website`,
            button: false,
          });
        } else if (response.data.data.status == "Admin") {
          history("/home");
          await swal({
            icon: "success",
            title: `SIGN IN ${userid}`,
            text: `Welcome, Admin to FLEU Website`,
            button: false,
          });
        } else if (response.data.data.status == "Staff") {
          history("/home");
          await swal({
            icon: "success",
            title: `SIGN IN ${userid}`,
            text: `Welcome, Staff to FLEU Website`,
            button: false,
          });
        } else if (response.data.data.status == "Teacher") {
          history("/home");
          await swal({
            icon: "success",
            title: `SIGN IN ${userid}`,
            text: `Welcome, Teacher to FLEU Website`,
            button: false,
          });
        } else {
          await swal({
            icon: "warning",
            title: `SIGN UP Error`,
            text: `Please confirm the conditions for applying for membership.`,
            button: false,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSubmitRegister = () => {
    // const dataRegister = [
    //   {
    //     user_id: userid,
    //     password: password,
    //     firstname: firstname,
    //     lastname: lastname,
    //     status: "Student",
    //     email: email,
    //     tel: tel,
    //   },
    // ];
    // console.log(dataRegister);
    if (membership === "yes") {
      Axios.post("http://localhost:8080/users/create-usersv2", {
        user_id: userid,
        password: password,
        firstname: firstname,
        lastname: lastname,
        status: "Student",
        email: email,
        tel: tel,
      }).then((res) => {
        console.log(res.data.token);
        swal({
          icon: "success",
          title: `SIGN UP ${userid}`,
          text: `Thank you, ${firstname}  ${lastname} for applying for membership.`,
        });
        setShowRegister(false);
      });
    } else {
      swal({
        icon: "warning",
        title: `SIGN UP Error`,
        text: `Please confirm the conditions for applying for membership.`,
      });
    }
  };

  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick((curr) => !curr);
  };

  const history = useNavigate();
  const [open, setOpen] = useState(false);

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

  function ShowProfile() {
    const key = JSON.parse(window.localStorage.getItem("UserRole"));
    if (key?.status === "Student") {
      return (
        <>
          <li className="profile-l">
            <a
              onClick={() => {
                setOpen(!open);
              }}
            >
              <p>
                {key?.status.toUpperCase()} : {key?.user_id.toUpperCase()}
                <br />
                <span>
                  {key?.firstname} {key?.lastname}
                </span>
              </p>
              <img
                src={Profile}
                className="img-profile"
                style={{ borderRadius: "50%" }}
                alt="Image Profile"
              />
              <AiFillCaretDown />
            </a>
            <div className={`dropdown-menu ${open ? "active" : "inactive"}`}>
              <h3>
                {key?.user_id}
                <br />
                <span>
                  {key?.firstname} {key?.lastname}
                </span>
              </h3>
              <hr style={{ margin: "10px" }} />
              <ul style={{ padding: "10px 15px" }}>
                <li className="dropdownItem">
                  <img src={User}></img>
                  <a href="/Profiles">Profile</a>
                </li>
                <li className="dropdownItem">
                  <img src={Quality}></img>
                  <a href="/Ranking">Rank</a>
                </li>
                <hr style={{ margin: "10px" }} />
                <li className="dropdownItem">
                  <img src={Logout}></img>
                  <a href="#" onClick={handLogOut}>
                    SignOut
                  </a>
                </li>
              </ul>
            </div>
          </li>
        </>
      );
    } else {
      return (
        <>
          <li>
            <a className="nav-links-In" onClick={handleShowLogin}>
              Log In
            </a>
          </li>
          <li>
            <a className="nav-links-mobile" onClick={handleShowRegister}>
              Sign Up
            </a>
          </li>
        </>
      );
    }
  }

  return (
    <>
      <nav className="NavbarItem">
        <h1 className="logo">
          <img src={Logo} width="60" height="60" />
        </h1>
        <div className="menu-icons" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li>
            <a href={"/"} className="nav-links">
              <i className="fa-solid fa-house-user"></i>
              Home
            </a>
          </li>
          <li>
            <a href={"/AllQuizs"} className="nav-links">
              <i className="fa-solid fa-circle-info"></i>
              Quiz
            </a>
          </li>
          <li>
            <a href={"/MiniCourse"} className="nav-links">
              <i className="fa-solid fa-house-user"></i>
              Mini Courses
            </a>
          </li>
          <li>
            <a href={"/AboutUS"} className="nav-links">
              <i className="fa-solid fa-house-user"></i>
              About US
            </a>
          </li>
          <ShowProfile />
        </ul>
      </nav>

      {/*  Login  */}
      <Modal show={showLogin} onHide={handleCloseLogin} className="p-5">
        <Modal.Body className="mt-5">
          <div className="login-card-logo">
            <img src={Logo} alt="logo" />
          </div>
          <div className="login-card-header">
            <h1>Sign In</h1>
            <div>Please Sign in with FLRU, Login with ID Student</div>
          </div>
          <form
            action="javascript:void(0);"
            className="login-card-form px-5 py-4"
            onSubmit={() => {
              loginUser();
            }}
          >
            <div className="form-item">
              <span class="form-item-icon material-symbols-outlined">
                person
              </span>
              <input
                type="text"
                placeholder="StudentID"
                onChange={(e) => setUserID(e.target.value)}
                autoFocus
              />
            </div>
            <div className="form-item">
              <span class="form-item-icon material-symbols-outlined">lock</span>
              <input
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit">Sign In</button>
          </form>
        </Modal.Body>
        <div className="login-card-footer mb-5">
          Don't have an account?{" "}
          <a
            href="#"
            onClick={() => {
              setShowLogin(false);
              setShowRegister(true);
            }}
          >
            Create a free account
          </a>
          .
        </div>
      </Modal>

      {/*  Register  */}
      <Modal show={showRegister} onHide={handleCloseRegister} className="p-5">
        <Modal.Body className="mt-3 mb-4">
          <div className="login-card-header p-2">
            <h1>Create Account</h1>
          </div>
          <form
            action="javascript:void(0);"
            className="login-card-form mx-5"
            onSubmit={() => {
              handleSubmitRegister();
            }}
          >
            <div className="form-item">
              <span class="form-item-icon material-symbols-outlined">
                person
              </span>
              <input
                type="text"
                placeholder="Enter Stdents"
                onChange={(e) => setUserID(e.target.value)}
                autoFocus
              />
            </div>
            <div className="form-item">
              <span class="form-item-icon material-symbols-outlined">lock</span>
              <input
                type="password"
                placeholder="Enter Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="form-item">
              <span class="form-item-icon material-symbols-outlined">
                badge
              </span>
              <input
                type="text"
                placeholder="Enter Firstname"
                onChange={(e) => setFirstname(e.target.value)}
              />
            </div>
            <div className="form-item">
              <span class="form-item-icon material-symbols-outlined">
                badge
              </span>
              <input
                type="text"
                placeholder="Enter Lastname"
                onChange={(e) => setLastname(e.target.value)}
              />
            </div>
            <div className="form-item">
              <span class="form-item-icon material-symbols-outlined">
                email
              </span>
              <input
                type="email"
                placeholder="Enter Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-item">
              <span class="form-item-icon material-symbols-outlined">call</span>
              <input
                type="tel"
                placeholder="Enter Call"
                onChange={(e) => setTel(e.target.value)}
              />
            </div>
            <div className="form-item-other">
              <div className="checkbox">
                <input
                  type="checkbox"
                  value="yes"
                  onChange={(e) => setMembership(e.target.value)}
                />
                <label htmlFor="rememberMeCheckb">
                  i have read,understood,and accepted the PRIVACY POLICY for
                  membership.
                </label>
              </div>
            </div>
            <button type="submit">Sign Up</button>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}
