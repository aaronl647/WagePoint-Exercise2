import React from "react";
import "./LandingPage.css";
import { Button } from "../Button/Button";

function LandingPage(props) {
  return (
    <div className="landingPage-container">
      <div className="textBox-container">
        <h1 className="title-container">{props.title}</h1>
        <p>{props.paragraph}</p>
        <Button
          className="btn"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          Get started
        </Button>
      </div>
    </div>
  );
}

export default LandingPage;
