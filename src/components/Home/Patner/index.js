import React from "react";
import img1 from "../../../data/assets/intersection.svg";
import img2 from "../../../data/assets/p3_i1.png";
import img3 from "../../../data/assets/p3_i2.png";
import img4 from "../../../data/assets/p3_i3.png";
import { PatnerContainer } from "./styles.js";

const Patner = () => {

  return (
    <PatnerContainer>
      <div className="patner">
        <div className="patner_container">
          <div className="patner_container_content1">
            <div className="conten1_title">
              <h1>The perfect intersection</h1>
            </div>
            <div className="conten1_img">
              <img src={img1} alt="img1" id="overlapimg"/>
            </div>
          </div>
          <div className="patner_container_conten2">
            <div className="conten1_title">
              <h1>Proudly Recognized by</h1>
            </div>
            <div className="conten1_img">
              <img src={img2} alt="img1" id="img"/>
              <img src={img3} alt="img1"  id="img"/>
              <img src={img4} alt="img1"  id="img"/>
            </div>
          </div>
        </div>
      </div>
    </PatnerContainer>
  );
};
export default Patner;