import React from "react";
import img1 from "../../../data/assets/p2_i1.svg";
import img2 from "../../../data/assets/p2_i2.svg";
import img3 from "../../../data/assets/p2_i3.svg";
import img4 from "../../../data/assets/p2_i4.svg";
import { StatusContainer } from "./styles.js";

const Status = () =>
{
    return (
        <StatusContainer>
            <div className="status">
                <div className="status_container">
                        <div className="status_cards">
                            <div className="card_content">
                                <div className="card_content_img">
                                    <img src={ img1 } alt="img1" className="card_svg" />
                                </div>
                                <div className="card_content_matter">
                                    <p className="card_matter">AI Enabled Intelligent system</p>
                                </div>
                            </div>
                        </div>
                        <div className="status_cards">
                            <div className="card_content">
                                <div className="card_content_img">
                                    <img src={ img2 } alt="img1" className="card_svg" />
                                </div>
                                <div className="card_content_matter">
                                    <p className="card_matter">Direct-to-Doctor, Non-intermediary</p>
                                </div>
                            </div>
                        </div>
                        <div className="status_cards">
                            <div className="card_content">
                                <div className="card_content_img">
                                    <img src={ img3 } alt="img1" className="card_svg" />
                                </div>
                                <div className="card_content_matter">
                                    <p className="card_matter">Care-Centric Digital Platform</p>
                                </div>
                            </div>
                        </div>
                        <div className="status_cards">
                            <div className="card_content">
                                <div className="card_content_img">
                                    <img src={ img4 } alt="img1" className="card_svg" />
                                </div>
                                <div className="card_content_matter">
                                    <p className="card_matter">Neighborhood Health Service</p>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </StatusContainer>
    );
};
export default Status;