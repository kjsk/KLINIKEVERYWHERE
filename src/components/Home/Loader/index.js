import React from "react";
import logo from "../../../images/logo.svg"
import logo2 from "../../../images/logo2.svg"
import "../../../styles/banner.css"

const Loader = () => {
  return (
        <div id="loader">
            <div id="image_container">
                <div id="img1_cont">
                    <img src={ logo } alt="img" id="image" />
                </div>
                <img src={ logo2 } alt="img" id="image2" />
            </div>
        </div>
)
}

export default Loader
