import React from "react";
import img1 from "../../../data/assets/p5_i1.svg";
import img2 from "../../../data/assets/p5_i2.svg";
import img3 from "../../../data/assets/p5_i3.svg";
import { ComingContainer } from "./styles.js";

const Coming = () => {
  return (
    <ComingContainer>
      <div className="commingsoon">
        <h1>COMING SOON...</h1>
        <div className="commingsoon_container">
            <div className="commingsoon_cards">
              <div className="commingsoon_cards_img_container">
                <img src={img1} alt="img1" id="cs_img" />
              </div>
              <div className="commingsoon_cards_content">
                <div className="commingsoon_cards_content_matter">
                  <h2>E-Pharmacy</h2>
                  <p>Convenience with confidence. Express service.</p>
                  <h3>SpotCare™ Platform enables clinics and hospital OPD to connect to the pharmacy of their choice that would help their patients with instant medicine dispensation and express checkout facility. It also enables such local pharmacies to provide online facility through home-delivery options to their customers. </h3>
                </div>
              </div>
            </div>
            <div className="commingsoon_cards">
              <div className="commingsoon_cards_img_container">
                <img src={img2} alt="img1" id="cs_img" />
              </div>
              <div className="commingsoon_cards_content">
                <div className="commingsoon_cards_content_matter">
                  <h2>E-Diagnostics</h2>
                  <p>World class home care Solution. Serviced locally.</p>
                  <h3>SpotCare™ Platform enables clinics & hospital OPD to connect to the Diagnostic laboratory of their choice through seamless exchange of lab orders and obtain results back into the patient's record in SpotCare™. It also enables such Diagnostic laboratories in the locality to provide services at the doorstep.</h3>
                </div>
              </div>
            </div>
            <div className="commingsoon_cards">
              <div className="commingsoon_cards_img_container">
                <img src={img3} alt="img1" id="cs_img" />
              </div>
              <div className="commingsoon_cards_content">
                <div className="commingsoon_cards_content_matter">
                  <h2>Continuous Monitoring</h2>
                  <p>Accurate Diagnosis. Personalised Treatment.</p>
                  <h3>Using wearable devices on patients with chronic illness, doctors would be able to use recorded data in SpotCare™ to accurately assess a patient's health parameters, and provide qualified personalised treatment. This helps improve the quality of treatment and accelerate patients' recovery to lead healthy lives.</h3>
                </div>
              </div>
            </div>
        </div>
      </div>
    </ComingContainer>
  );
};
export default Coming;