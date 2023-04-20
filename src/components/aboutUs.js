import { Row, Col, Card } from "react-bootstrap";
import img from "../assets/police.svg";
import karthikpic from "../assets/karthik.png";
import jishnupic from "../assets/jishnu.png";
import harshitpic from "../assets/harshitpic.png";
import img2 from "../assets/sunny.png";
import React from "react";
//import { teamData } from "../assests/data";
const teamData = [
  {
    personName: "Karthik Banjan (Team Leader)",
    personRole: "Blockchain Management",
    personImage: karthikpic,
  },
  {
    personName: "Harshit Singh",
    personRole: "Website (Frontend)",
    personImage: harshitpic,
  },
  {
    personName: "Jishnu Anilkumar",
    personRole: "Website (Backend)",
    personImage: jishnupic,
  },
  {
    personName: "Sunny Singh",
    personRole: "Blockchain Management",
    personImage: img2,
  },
];
export default function AboutUs() {
  return (
    <div style={{backgroundColor:"#fff"}}>
    <Row style={{ marginTop: "50px" }}>
      <p style={{ textAlign: "left", marginLeft: "188px",marginTop:"40px" }}>The Team</p>
      <div className="aboutHeadline">
        <h1 style={{ fontFamily: "sans-serif" }}>
          Meet our team of{" "}
          <span style={{ fontFamily: "Roboto", fontStyle: "italic" }}>
            creators
          </span>
          ,<br></br>
          <span style={{ fontFamily: "Roboto", fontStyle: "italic" }}>
            designers
          </span>
          , and world-class
          <br></br>
          <span style={{ fontFamily: "Roboto", fontStyle: "italic" }}>
            problem solvers
          </span>
        </h1>
        <img src={img} />
      </div>
      <div className="aboutTitle">
        <p style={{ textAlign: "left", fontFamily: "cursive" }}>
          Transforming ideas into reality:
          <br></br>
          Four college students banded together to embark on a transformative
          journey of innovation and creativity,
          <br></br>
          culminating in a remarkable final year project that stands as a
          testament to their passion, hard work, and perseverance.
        </p>
      </div>
      <Row>
        <div className="card-div">
        {teamData.map((member, index) => (
          <Col key={index} sm={6} md={3}>
            <Card className="card-image">
              <Card.Img variant="top" src={member.personImage} />
              <Card.Body>
                <Card.Title>{member.personName}</Card.Title>
                <Card.Text>{member.personRole}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
        </div>
      </Row>
    </Row>
    </div>
  );
}
