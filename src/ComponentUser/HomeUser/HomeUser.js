import "./HomeUser.css";
import quiz from "../../Img/Asset/quiz.png";
import Button from "react-bootstrap/Button";
import Cook from "../../Img/Asset/cook.png";
import Book1 from "../../Img/Asset/book1.png";
import Book2 from "../../Img/Asset/book2.png";
import Card from "react-bootstrap/Card";
import Calendar from "../../Img/Asset/calendar.png";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";
import { BsTelephone } from "react-icons/bs";
import { AiOutlineFacebook } from "react-icons/ai";

import Banner1 from "../../Img/Poster_banner/banner/Banner1.png";
import Banner2 from "../../Img/Poster_banner/banner/Banner2.png";
import Banner3 from "../../Img/Poster_banner/banner/Bannermini.png";

import { useState } from "react";
import { Form, Modal } from "react-bootstrap";

export default function HomeUser() {
  const services = [
    {
      title: "English Skill Test",
      btn: "Task Quiz",
      href: "/AllQuizs",
    },
    {
      title: "Mini Courses",
      btn: "Book Now",
      href: "/MiniCourses",
    },
  ];

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="HomeUser">
        <Carousel variant="dark">
          <Carousel.Item>
            <img className="d-block w-100" src={Banner1} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={Banner2} alt="Second slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={Banner3} alt="Third slide" />
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="container-title">
        <section className="content-con">
          <div className="content-r">
            <h2>About us</h2>
            <p>
              Foreign Langauge Resources Unit (FLRU) is part of the School of
              Foreign Languages.at Suranaree University of Technology. It was
              established to....
            </p>
            <Button variant="warning" href="/AboutUS">
              Learn more
            </Button>
          </div>
          <div className="content-l">
            <img src={quiz} alt="" />
          </div>
        </section>
      </div>
      <div className="BG-Services">
        <div className="container-title">
          <div className="Services-body">
            <h1>Our Services</h1>
            <div className="ItemServices">
              <Card
                style={{
                  width: "16rem",
                  marginLeft: "50px",
                  marginRight: "50px",
                }}
              >
                <Card.Img variant="top" src={Book2} />
                <Card.Body>
                  <Card.Title>{services[0].title}</Card.Title>
                  <Button variant="danger" href={services[0].href}>
                    {services[0].btn}
                  </Button>
                </Card.Body>
              </Card>

              <Card
                style={{
                  width: "16rem",
                  marginLeft: "50px",
                  marginRight: "50px",
                }}
              >
                <Card.Img variant="top" src={Calendar} />
                <Card.Body>
                  <Card.Title>{services[1].title}</Card.Title>
                  <Button variant="danger" href={services[1].href}>
                    {services[1].btn}
                  </Button>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="footer-title">
          <h2>Foreign Language Resource Unit</h2>
          <p>
            SUT Sport and Health Center Floor 1 Suranaree University of
            Technology 111 Maha Witthayalai Rd, Suranaree Sub-district, Muaeng
            district, Nakhon Ratchasima 30000
          </p>
        </div>
        <div className="footer-links">
          <h2>Quick Links</h2>
          <Link to={"/"} style={{ textDecoration: "none" }}>
            <p>Home</p>
          </Link>
          <Link to={"/AllQuizs"} style={{ textDecoration: "none" }}>
            <p>English Skill Test</p>
          </Link>
          <Link to={"/MiniCourses"} style={{ textDecoration: "none" }}>
            <p>Mini course</p>
          </Link>
          <Link to={"/AboutUS"} style={{ textDecoration: "none" }}>
            <p>About us</p>
          </Link>
        </div>
        <div className="footer-contact">
          <h2>Contact US</h2>
          <p>
            <BsTelephone size={25} /> 044-22-4656
          </p>
          <p>
            <AiOutlineFacebook size={25} /> Foreign Languages Resource Unit
            (FLRU)
          </p>
        </div>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Example textarea</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
