import React from "react";
import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
function WelcomePage() {
  return (
    <div className="welcomeBackground">
      {/* <Container>
        <h1 style={{ color: "#BBBBBA" }}>Welcome to our website</h1>
        <p>
          Securing the safety of our community, one step at a time: The official
          website of the police department.
        </p>
        <Link to="/archieve">
          <Button className="getStartedBtn" variant="secondary" size="lg">
            Get Started
          </Button>
        </Link>
      </Container> */}
      <div class="caption">
          <h1>"The court is where the voiceless can speak, the weak can be made strong, and the powerful can be held accountable."</h1>
          <Link to="/archieve">
          <Button className="getStartedBtn" variant="transparent" size="lg">
            Get Started
          </Button>
        </Link>
    </div>
    </div>
  );
}

export default WelcomePage;
