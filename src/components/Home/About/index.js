import React from "react";
import img from "../../../data/assets/map.svg";
import { AboutContainer } from "./styles.js";

const About = () => {
  return (
    <AboutContainer>
      <div id="about">
        <div id="about_conatiner_matter">
          <h1>ABOUT <span style={{ color: `#1481BA` }}>US</span></h1>
          <p>The company is founded and run by seasoned leaders with high pedigree in the field of HealthCare Technology. This leadership team has envisioned to use advanced technology to provide care-centric solutions and bring in access to quality care across the length and breadth of the country. The company offers its product on a Software-as-a-Service (SaaS) model and helps with hyper-localization of existing health networks.  Our Virtual Klinik and Klinik-in-a-Kiosk solution, are pathbreaking game changers that provide anytime, anywhere convenience to the neighbourhoods and rural communities.</p>
        </div>
        <div id="about_conatiner_image">
            <img src={img} alt="img"/>
        </div>
      </div>
    </AboutContainer>
  )
}
export default About;