import "./Login.css";
import Logo from "../../Img/Logo.png";
import { useState, useEffect } from "react";
import Axios from "axios";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [users, setUsers] = useState([]);

  const [showRegister, setShowRegister] = useState(false);

  const [userid, setUserID] = useState();
  const [password, setPassword] = useState();
  const [firstname, setFirstname] = useState();
  const [lastname, setLastname] = useState();
  const [status, setStatus] = useState();
  const [email, setEmail] = useState();
  const [tel, setTel] = useState();
  const [membership, setMembership] = useState("no");

  const handleSubmitLogin = () => {
    console.log("userid" + userid);
    console.log("users.user_id" + users[0].user_id);
    if (userid == users.user_id) {
      swal({
        icon: "success",
        title: `SIGN IN ${userid}`,
        text: `Welcome", ${firstname}  ${lastname} to FLEU Website`,
      });
    } else {
      swal({
        icon: "error",
        title: `SIGN IN ${userid}`,
        text: `UserID , Password is incorrect`,
      });
    }
  };

  const handleSubmitRegister = () => {
    const dataRegister = [
      {
        user_id: userid,
        password: password,
        firstname: firstname,
        lastname: lastname,
        status: status,
        email: email,
        tel: tel,
      },
    ];

    console.log(membership);

    if (membership === "yes") {
      Axios.post("http://localhost:8080/users/create-users", dataRegister).then(
        (res) => {
          swal({
            icon: "success",
            title: `SIGN UP ${userid}`,
            text: `Thank you, ${firstname}  ${lastname} for applying for membership.`,
          });
          console.log(res.data);
          setShowRegister(false);
        }
      );
    } else {
      swal({
        icon: "warning",
        title: `SIGN UP Error`,
        text: `Please confirm the conditions for applying for membership.`,
      });
    }
  };

  const loginUser = () => {
    // console.log(userid + "  " + password);
    Axios.post("http://localhost:8080/users/login-user", {
      user_id: userid,
      password: password,
    })
      .then(async (res) => {
        console.log(res.data);

        if (res.data.Role == "student") {
          history("/");
          await swal({
            icon: "success",
            title: `SIGN IN ${userid}`,
            text: `Welcome, Student to FLEU Website`,
          });
        } else if (res.data.Role == "admin") {
          history("/home");
          await swal({
            icon: "success",
            title: `SIGN IN ${userid}`,
            text: `Welcome, Admin to FLEU Website`,
          });
        } else if (res.data.Role == "staff") {
          history("/home");
          await swal({
            icon: "success",
            title: `SIGN IN ${userid}`,
            text: `Welcome, Staff to FLEU Website`,
          });
        } else if (res.data.Role == "teacher") {
          history("/home");
          await swal({
            icon: "success",
            title: `SIGN IN ${userid}`,
            text: `Welcome, Teacher to FLEU Website`,
          });
        } else {
          await swal({
            icon: "warning",
            title: `SIGN UP Error`,
            text: `Please confirm the conditions for applying for membership.`,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const history = useNavigate();

  return (
    <div className="login-card-container">
      {showRegister ? (
        <>
          <div className="login-card">
            <div className="login-card-header">
              <h1>Create Account</h1>
            </div>
            <form
              action="javascript:void(0);"
              className="login-card-form"
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
                <span class="form-item-icon material-symbols-outlined">
                  lock
                </span>
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
                  checklist
                </span>
                <input
                  type="text"
                  placeholder="Enter Status"
                  onChange={(e) => setStatus(e.target.value)}
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
                <span class="form-item-icon material-symbols-outlined">
                  call
                </span>
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
          </div>
        </>
      ) : (
        <>
          <div className="login-card">
            <div className="login-card-logo">
              <img src={Logo} alt="logo" />
            </div>
            <div className="login-card-header">
              <h1>Sign In</h1>
              <div>Please Sign in with FLRU, Login with ID Student</div>
            </div>
            <form
              action="javascript:void(0);"
              className="login-card-form"
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
                <span class="form-item-icon material-symbols-outlined">
                  lock
                </span>
                <input
                  type="password"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              {/* <div className="form-item-other">
                <div className="checkbox">
                  <input type="checkbox" id="rememberMeCheckbox" />
                  <label htmlFor="rememberMeCheckb">Remember Me</label>
                </div>
                <a href="#">I forgot my password !</a>
              </div> */}
              <button type="submit">Sign In</button>
            </form>
            <div className="login-card-footer">
              Don't have an account?{" "}
              <a
                href="#"
                onClick={() => {
                  setShowRegister(true);
                }}
              >
                Create a free account
              </a>
              .
            </div>
          </div>
        </>
      )}
    </div>
  );
}
