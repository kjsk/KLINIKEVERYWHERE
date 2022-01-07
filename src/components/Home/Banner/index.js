import React from "react"
import { BannerSection } from "./styles.js";
import icon from "../../../data/assets/play_icon.svg";
import banner from "../../../data/assets/banner.png";

const Banner = () =>
{


    return (
        <BannerSection >
            <div id="banner_section" >
                <div id="matter" >
                    <h1> SpotCare<span>™</span> Klinik - in -a - Kiosk</h1>
                    <h2> Full - fledged Virtual Outpatient Clinic allowing diagnostic consultations </h2>
                </div >
                <div id="button" >
                    <button>Dowload App</button>
                    <button><img src={ icon } alt="img" id='icon' /> Watch Video </button>
                </div>
            </div>
            <div id="banner_image" >
                <img src={ banner } alt="banner" />
            </div>
        </BannerSection>
    );
};

export default Banner;