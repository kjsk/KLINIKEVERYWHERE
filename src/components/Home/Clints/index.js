import React from "react";
import img1 from "../../../data/assets/yrsk.png";
import img2 from "../../../data/assets/care.png";
import img3 from "../../../data/assets/utivc.png";
import img4 from "../../../data/assets/budhi.png";
import img5 from "../../../data/assets/janm.png";
import img6 from "../../../data/assets/unity.png";
import {ClintsContainer} from "./styles";

const Clints = () => {
  return (
    <ClintsContainer>
       <div id="patners">
        <h1>Our Clients and Associates</h1>
        <div id="patner_container_main">
        <div id="patners_container">
            <div id="patners_image_card">
                <img src={img1} alt="img1" />
              
            </div>
            <div id="patners_image_card">
                <img src={img2} alt="img1" />
              
            </div>
            <div id="patners_image_card">
                <img src={img3} alt="img1" />
              
            </div>
            <div id="patners_image_card">
                <img src={img4} alt="img1" />
              
            </div>
            <div id="patners_image_card">
                <img src={img5} alt="img1" />
              
            </div>
            <div id="patners_image_card">
                <img src={img6} alt="img1" />
              
            </div>
        </div>
        </div>
      </div>
    </ClintsContainer>
  );
};
export default Clints;