import React from 'react';
import { Link } from "gatsby";
import search from "../../../data/assets/search.svg";
import img from "../../../data/assets/find_doc.png";
import { DoctorContainer } from "./styles.js";

const Doctor = () => {
  return (
    <DoctorContainer>
      <div className="finddoctors" id="finddoctors">
        <div className="finddoctors_container">
          <div className="finddoctors_container_matter">
          <div id="finddoctors_container_matter_container">
            <h1>Find Doctor</h1>
            <p>Find your doctor of choice here for your consultation booking</p>
            <div id="search_bar">
              <img src={search} alt="img" className="searchicon" />
              <Link to="/FindDoctors"><input type="search" placeholder="Search by name, specialization, phone number" className="search"/></Link>
            </div>
            </div>
          </div>
          <div id="finddocbannerimg">
          <div>
          <img src={img} alt="img1" id="finddoctors_img"/>
          </div>
          </div>
        </div>
      </div>
    </DoctorContainer>
  );
};
export default Doctor;