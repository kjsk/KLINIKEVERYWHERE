import React from "react";
import img2 from "../../../data/assets/quatation.svg";
import video from "../../../data/assets/testimonial1.mp4";
import { CustomersContainer } from "./styles";

const Customers = () =>
{
    return (
        <CustomersContainer>
            <div className="ourcustomers" id="ourcustomers">
                <h1>What our customers are saying</h1>
                <div className="ourcustomers_carousal">
                    <div className='ourcustomers_container'>
                        <div className="ourcustomers_video">
                            <video controls controlsList="nodownload" id="video_img">
                                <source src={ video } type="video/mp4" />
                                <track src="" kind="captions" srclang="en" label="english_captions"></track>
                            </video>
                        </div>
                        <div className="ourcustomers_matter">
                            <img src={ img2 } alt="quatation" id="quatation" />
                            <div className="ourcustomers_matter_head">
                                <h2>Excellent Video Consultation Module</h2>
                                <p>Really excited about SpotCare™ and other aspects which are going to come soon. I really like their video
                                    consultation module, where it had good quality video and the documentation that is not present in other apps.The charging for each consultation is also very easy to understand. It is very modular and flexible</p>
                            </div>
                            <div className="ourcustomers_doc_details">
                                <p id="doc_name">Dr. Shirley Lynn</p>
                                <p id="doc_address">Peadetrician, JP Nagar</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </CustomersContainer>
    );
};
export default Customers;