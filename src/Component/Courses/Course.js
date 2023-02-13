import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
import "../Team/teammembers.css";
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

export default function Course() {
  const [course, setCourse] = useState([]);
  const [courseEdit, setCourseEdit] = useState([]);
  const [showADD, setShowADD] = useState(false);
  const handleADDClose = () => setShowADD(false);
  const handleADDShow = () => setShowADD(true);

  const [courses_id, setCourses_id] = useState("");
  const [courses_title, setCourses_title] = useState("");
  const [courses_detail, setCourses_detail] = useState("");
  const [is_active, setIs_active] = useState(true);

  const [showEdit, setShowEdit] = useState(false);

  const handleEditClose = () => setShowEdit(false);
  const handleEditShow = (id) => {
    Axios.get(`http://localhost:8080/courses/get-edit-courses/${id}`).then(
      async (res) => {
        setCourseEdit(res.data);
        setCourses_id(res.data.courses_id);
        setCourses_title(res.data.title);
        setCourses_detail(res.data.detail);
        setIs_active(res.data.is_active);
      }
    );
    setShowEdit(true);
  };

  const getUsers = async () => {
    await Axios.get("http://localhost:8080/courses").then((response) => {
      setCourse(response.data);
    });
  };

  const key = JSON.parse(window.localStorage.getItem("UserRole"));
  const history = useNavigate();

  useEffect(() => {
    if (key?.status != "Admin") {
      history("/");
    }
    getUsers();
  }, []);

  const handleADDSubmit = async () => {
    const dataRegister = [
      {
        courses_id: courses_id,
        title: courses_title,
        detail: courses_detail,
        is_active: true,
      },
    ];

    console.log(dataRegister);

    if (courses_id) {
      Axios.post(
        "http://localhost:8080/courses/create-courses",
        dataRegister
      ).then(async (res) => {
        await swal({
          icon: "success",
          title: `SIGN UP `,
          text: `Thank you, for applying for membership.`,
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

  const handleDelete = async (id, title) => {
    await swal({
      title: "Are you sure?",
      text: `${title} deleted , you will not be able to recover!`,
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        Axios.delete(`http://localhost:8080/courses/delete-courses/${id}`).then(
          async (res) => {
            await swal(`Your ${title} has been deleted!`, {
              icon: "success",
            });
            window.location.reload();
          }
        );
      } else {
        swal("You Undelete");
      }
    });
  };

  const handleEditSubmit = async (id) => {
    console.log(id);
    Axios.put(`http://localhost:8080/courses/update-courses/${id}`, {
      courses_id: courses_id,
      title: courses_title,
      detail: courses_detail,
      is_active: true,
    }).then(async (result) => {
      if (result.data.status === 200) {
        await swal({
          icon: "success",
          title: `UPDATE ${courses_id}`,
          text: `Thank you, ${courses_title}  for applying for membership.`,
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
        <p className="UserListTitle">Courses list</p>
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
            alert("ยังไม่ใส่ปุ่ม");
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
          Add New Courses
        </Button>
      </div>
      <div style={{ display: "flex" }}>
        <div className="DataGridUserList">
          <Table>
            <thead>
              <tr className="table-warning">
                <th>Courses_ID</th>
                <th>Courses_Title</th>
                <th>Courses_Detail</th>
                <th>Action</th>
                <th>Action</th>
              </tr>
            </thead>
            {course.map((item) => {
              if (item.is_active == true)
                return (
                  <tbody>
                    <tr>
                      <td>{item.courses_id}</td>
                      <td>{item.title}</td>
                      <td>{item.detail}</td>

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
                            handleDelete(item._id, item.title);
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
                      onChange={(e) => setCourses_id(e.target.value)}
                    />
                    <label htmlFor="floatingPasswordCustom">CoursesID</label>
                  </Form.Floating>
                </Col>
                <Col md>
                  <Form.Floating>
                    <Form.Control
                      type="text"
                      placeholder="Firstname"
                      onChange={(e) => setCourses_title(e.target.value)}
                    />
                    <label htmlFor="floatingPasswordCustom">Courses</label>
                  </Form.Floating>
                </Col>
              </Row>

              <Row className="g-1">
                <Col md>
                  <Form.Floating>
                    <Form.Control
                      as="textarea"
                      placeholder="Leave a comment here"
                      style={{ height: "100px" }}
                      onChange={(e) => setCourses_detail(e.target.value)}
                    />

                    <label htmlFor="floatingPasswordCustom">Detail</label>
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
                      defaultValue={courseEdit.courses_id}
                      onChange={(e) => setCourses_id(e.target.value)}
                    />
                    <label htmlFor="floatingPasswordCustom">CoursesID</label>
                  </Form.Floating>
                </Col>
                <Col md>
                  <Form.Floating>
                    <Form.Control
                      type="text"
                      placeholder="Firstname"
                      defaultValue={courseEdit.title}
                      onChange={(e) => setCourses_title(e.target.value)}
                    />
                    <label htmlFor="floatingPasswordCustom">Courses</label>
                  </Form.Floating>
                </Col>
              </Row>

              <Row className="g-1">
                <Col md>
                  <Form.Floating>
                    <Form.Control
                      as="textarea"
                      placeholder="Leave a comment here"
                      style={{ height: "100px" }}
                      defaultValue={courseEdit.detail}
                      onChange={(e) => setCourses_detail(e.target.value)}
                    />

                    <label htmlFor="floatingPasswordCustom">Detail</label>
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
              onClick={() => handleEditSubmit(courseEdit._id)}
            >
              Edit Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
}
