import React from "react";
import "./LandingPage.css";
import { Button } from "../Button/Button";
import PartnerBanner from "../../images/partner_banner.jpg";

function LandingPage(props) {
  return (
    <>
      <div className="landingPage-container">
        <div className="landingPage-wrapper">
          <div className="textBox-container">
            <div className="textBox-wrapper">
              <h1 className="title-container">{props.title}</h1>
              <p>{props.paragraph}</p>
              <Button
                className="btn"
                buttonStyle="btn--primary"
                buttonSize="btn--medium"
              >
                Get started
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="partner-text-container">
        <h1>{props.partnerText}</h1>
        <p>{props.partnerParagraph}</p>
      </div>
    </>
  );
}

export default LandingPage;

{
  /*  */
}
