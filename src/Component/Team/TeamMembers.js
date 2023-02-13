import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
import "./teammembers.css";
import Axios from "axios";
import {
  Button,
  Modal,
  Table,
  Form,
  Col,
  Row,
  FloatingLabel,
} from "react-bootstrap";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";

export default function TeamMembers() {
  const [users, setUsers] = useState([]);
  const [userEdit, setUsersEdit] = useState([]);

  ///Define here local state that store the form data
  const [user_id, setUser_id] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [status, setStatus] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");

  const getUsers = async () => {
    await Axios.get("https://flru-learning.herokuapp.com/users").then(
      (response) => {
        setUsers(response.data);
      }
    );
  };

  const key = JSON.parse(window.localStorage.getItem("UserRole"));
  const history = useNavigate();

  useEffect(() => {
    if (key?.status != "Admin") {
      history("/");
    }

    getUsers();
  }, []);

  const handleDelete = async (id, userid) => {
    await swal({
      title: "Are you sure?",
      text: `${userid} deleted , you will not be able to recover!`,
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then(async (willDelete) => {
      if (willDelete) {
        await Axios.delete(
          `https://flru-learning.herokuapp.com/users/delete-users/${id}`
        ).then(async (res) => {
          await swal(`Your ${userid} has been deleted!`, {
            icon: "success",
          });
          window.location.reload();
        });
      } else {
        swal("You Undelete");
      }
    });
  };

  const [showADD, setShowADD] = useState(false);
  const handleADDClose = () => setShowADD(false);
  const handleADDShow = () => setShowADD(true);

  const [showEdit, setShowEdit] = useState(false);

  const handleEditClose = () => setShowEdit(false);
  const handleEditShow = (id) => {
    Axios.get(
      `https://flru-learning.herokuapp.com/users/get-edit-user/${id}`
    ).then(async (res) => {
      setUsersEdit(res.data);
      setUser_id(res.data.user_id);
      setFirstname(res.data.firstname);
      setLastname(res.data.lastname);
      setStatus(res.data.status);
      setEmail(res.data.email);
      setTel(res.data.tel);
      console.log(res.data);
    });
    setShowEdit(true);
  };

  const handleADDSubmit = async () => {
    const dataRegister = [
      {
        user_id: user_id,
        password: password,
        firstname: firstname,
        lastname: lastname,
        status: status,
        email: email,
        tel: tel,
      },
    ];

    console.log(dataRegister);

    if (user_id) {
      Axios.post(
        "https://flru-learning.herokuapp.com/users/create-users",
        dataRegister
      ).then(async (res) => {
        await swal({
          icon: "success",
          title: `SIGN UP ${user_id}`,
          text: `Thank you, ${firstname}  ${lastname} for applying for membership.`,
        });
        console.log(res.data);
        setShowADD(false);
        window.location.reload();
      });
    } else {
      await swal({
        icon: "warning",
        title: `SIGN UP Error`,
        text: `Please confirm the conditions for applying for membership.`,
      });
    }
  };

  const handleEditSubmit = async (id) => {
    console.log(id);
    await Axios.put(
      `https://flru-learning.herokuapp.com/users/update-users/${id}`,
      {
        firstname: firstname,
        lastname: lastname,
        status: status,
        email: email,
        tel: tel,
      }
    ).then(async (result) => {
      if (result.data.status === 200) {
        await swal({
          icon: "success",
          title: `UPDATE ${user_id}`,
          text: `Thank you, ${firstname}  ${lastname} for applying for membership.`,
        });
        window.location.reload();
      } else {
        await swal({
          icon: "warning",
          title: `UPDATE Error`,
          text: `Please confirm the conditions for applying for membership.`,
        });
      }
    });
  };

  return (
    <div className="TeamMembers">
      <Navbar />
      <div className="UserListHead">
        <p className="UserListTitle">User Mangement</p>
      </div>
      <div className="TabbarUserList">
        <p className="TitleUserList">Find</p>
        <input
          className="searchInputUserList"
          placeholder="Search"
          type="search"
        />
        <Button
          variant="primary"
          className="fa fa-plu m-1"
          onClick={() => {
            swal({
              icon: "warning",
              title: `กำลังปรับปรุงฟังชั่นการใช้งาน`,
            });
          }}
        >
          Search
        </Button>
        <Button
          variant="success"
          className="fa fa-plu m-1"
          onClick={() => {
            handleADDShow();
          }}
        >
          Add New Users
        </Button>
      </div>
      <div style={{ display: "flex" }}>
        <div className="DataGridUserList">
          <Table>
            <thead>
              <tr className="table-warning">
                <th>No.</th>
                <th>FirstName</th>
                <th>LastName</th>
                <th>Status</th>
                <th>Email</th>
                <th>Tel</th>
                <th>Action</th>
                <th>Action</th>
              </tr>
            </thead>
            {users.map((item) => {
              return (
                <tbody>
                  <tr>
                    <td>{item.user_id}</td>
                    <td>{item.firstname}</td>
                    <td>{item.lastname}</td>
                    <td>{item.status}</td>
                    <td>{item.email}</td>
                    <td>{item.tel}</td>
                    <td>
                      <Button
                        size="sm"
                        variant="warning"
                        onClick={() => handleEditShow(item._id)}
                      >
                        Edit
                      </Button>
                    </td>
                    <td>
                      <Button
                        size="sm"
                        variant="danger"
                        onClick={() => {
                          handleDelete(item._id, item.user_id);
                        }}
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                </tbody>
              );
            })}
          </Table>
        </div>
      </div>

      {/* Model for ADD User */}
      <div className="model-box-view">
        <Modal show={showADD} onHide={handleADDClose} size="lg">
          <Modal.Header closeButton>
            <Modal.Title>ADD USER</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Row className="g-2 mb-3">
                <Col md>
                  <Form.Floating>
                    <Form.Control
                      type="text"
                      placeholder="UserID"
                      onChange={(e) => setUser_id(e.target.value)}
                    />
                    <label htmlFor="floatingPasswordCustom">UserID</label>
                  </Form.Floating>
                </Col>
                <Col md>
                  <Form.Floating>
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <label htmlFor="floatingPasswordCustom">Password</label>
                  </Form.Floating>
                </Col>
              </Row>
              <Row className="g-2 mb-3">
                <Col md>
                  <Form.Floating>
                    <Form.Control
                      type="text"
                      placeholder="Firstname"
                      onChange={(e) => setFirstname(e.target.value)}
                    />
                    <label htmlFor="floatingPasswordCustom">Firstname</label>
                  </Form.Floating>
                </Col>
                <Col md>
                  <Form.Floating>
                    <Form.Control
                      type="text"
                      placeholder="Lastname"
                      onChange={(e) => setLastname(e.target.value)}
                    />
                    <label htmlFor="floatingPasswordCustom">Lastname</label>
                  </Form.Floating>
                </Col>
                <Col md>
                  <FloatingLabel
                    controlId="floatingSelectGrid"
                    label="Works with selects"
                  >
                    <Form.Select
                      aria-label="Floating label select example"
                      onChange={(e) => setStatus(e.target.value)}
                    >
                      <option>Open this Select Status</option>
                      <option value="Student">Student</option>
                      <option value="Staff">Staff</option>
                      <option value="Teacher">Teacher</option>
                      <option value="Admin">Admin</option>
                    </Form.Select>
                  </FloatingLabel>
                </Col>
              </Row>
              <Row className="g-2">
                <Col md>
                  <Form.Floating>
                    <Form.Control
                      type="email"
                      placeholder="Email Addres"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <label htmlFor="floatingPasswordCustom">Email Addres</label>
                  </Form.Floating>
                </Col>
                <Col md>
                  <Form.Floating>
                    <Form.Control
                      type="tel"
                      placeholder="Tel"
                      onChange={(e) => setTel(e.target.value)}
                    />
                    <label htmlFor="floatingPasswordCustom">Tel</label>
                  </Form.Floating>
                </Col>
              </Row>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleADDClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleADDSubmit}>
              ADD Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>

      {/* Model for Edit User */}
      <div className="model-box-view">
        <Modal show={showEdit} onHide={handleEditClose} size="lg">
          <Modal.Header closeButton>
            <Modal.Title>Edit USER</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Row className="g-2 mb-3">
                <Col md>
                  <Form.Floating>
                    <Form.Control
                      type="text"
                      placeholder="UserID"
                      defaultValue={userEdit.user_id}
                      onChange={(e) => setUser_id(e.target.value)}
                      disabled
                    />
                    <label htmlFor="floatingPasswordCustom">UserID</label>
                  </Form.Floating>
                </Col>
                <Col md>
                  <Form.Floating>
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      onChange={(e) => setPassword(e.target.value)}
                      disabled
                    />
                    <label htmlFor="floatingPasswordCustom">Password</label>
                  </Form.Floating>
                </Col>
              </Row>
              <Row className="g-2 mb-3">
                <Col md>
                  <Form.Floating>
                    <Form.Control
                      type="text"
                      placeholder="Firstname"
                      defaultValue={userEdit.firstname}
                      onChange={(e) => setFirstname(e.target.value)}
                      name="firstname"
                    />
                    <label htmlFor="floatingPasswordCustom">Firstname</label>
                  </Form.Floating>
                </Col>
                <Col md>
                  <Form.Floating>
                    <Form.Control
                      type="text"
                      placeholder="Lastname"
                      defaultValue={userEdit.lastname}
                      onChange={(e) => setLastname(e.target.value)}
                    />
                    <label htmlFor="floatingPasswordCustom">Lastname</label>
                  </Form.Floating>
                </Col>
                <Col md>
                  <FloatingLabel
                    controlId="floatingSelectGrid"
                    label="Works with selects"
                  >
                    <Form.Select
                      aria-label="Floating label select example"
                      value={userEdit.status}
                      onChange={(e) => setStatus(e.target.value)}
                    >
                      <option>Open this Select Status</option>
                      <option value="Student">Student</option>
                      <option value="Staff">Staff</option>
                      <option value="Teacher">Teacher</option>
                      <option value="Admin">Admin</option>
                    </Form.Select>
                  </FloatingLabel>
                </Col>
              </Row>
              <Row className="g-2">
                <Col md>
                  <Form.Floating>
                    <Form.Control
                      type="email"
                      placeholder="Email Addres"
                      defaultValue={userEdit.email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <label htmlFor="floatingPasswordCustom">Email Addres</label>
                  </Form.Floating>
                </Col>
                <Col md>
                  <Form.Floating>
                    <Form.Control
                      type="tel"
                      placeholder="Tel"
                      defaultValue={userEdit.tel}
                      onChange={(e) => setTel(e.target.value)}
                    />
                    <label htmlFor="floatingPasswordCustom">Tel</label>
                  </Form.Floating>
                </Col>
              </Row>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleEditClose}>
              Close
            </Button>
            <Button
              variant="warning"
              onClick={() => handleEditSubmit(userEdit._id)}
            >
              Edit Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
}
