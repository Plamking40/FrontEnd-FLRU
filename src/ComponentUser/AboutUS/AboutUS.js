import React from "react";
import "./aboutus.css";
import { Link } from "react-router-dom";
import { BsTelephone } from "react-icons/bs";
import { AiOutlineFacebook } from "react-icons/ai";

export default function AboutUS() {
  return (
    <>
      <div className="AllAboutUS">
        <div className="container-AboutUS">
          <section className="content-con">
            <div className="content-l">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/yc-748NaFos?autoplay=1&mute=0"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;"
                allowfullscreen
              ></iframe>
            </div>
            <div className="content-r">
              <h2>What is FLRU ?</h2>
              <p>
                Foreign Langauge Resources Unit (FLRU) is part of the School of
                Foreign Languages.at Suranaree University of Technology. It was
                established to promote teaching and development of foreign
                language skills
              </p>
            </div>
          </section>
          <section className="content-con">
            <div className="content-r">
              <h2>Our Goals</h2>
              <p>
                Through our resources, we hope to enable learners to learn
                foreign languages on their own, as well as to support the
                development of language skills for those who are interested. to
                apply knowledge effectively.
              </p>
            </div>
            <div className="content-ll">
              <img
                src="https://scontent.fnak3-1.fna.fbcdn.net/v/t1.15752-9/326864338_1541331706369333_5035405190554783178_n.png?_nc_cat=102&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeEXUYh0PvDrNlXWBR6Mv5d38kZ9EFzaRlLyRn0QXNpGUoy5jwEvRmqA2qObkO4jMlM09giQb6b8T_sYPtUE8VIK&_nc_ohc=vWSZKtZ1MNEAX9L91D4&_nc_ht=scontent.fnak3-1.fna&oh=03_AdTlmIFMHo780V99l43kSHBBjfWamjbzyiBXQ04sBIys8g&oe=63F5BB5A"
                alt=""
              />
            </div>
          </section>
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
    </>
  );
}
