import React, { useState } from "react";
import pic1 from "../../../data/assets/p4_i1.png";
import pic2 from "../../../data/assets/p4_c1_i1.svg";
import pic3 from "../../../data/assets/p4_c1_i2.svg";
import pic4 from "../../../data/assets/p4_c1_i3.svg";
import pic5 from "../../../data/assets/p4_c1_i4.svg";
import pic6 from "../../../data/assets/p4_c1_h_i1.svg";
import pic7 from "../../../data/assets/p4_c1_h_i2.svg";
import pic9 from "../../../data/assets/p4_c1_h_i3.svg";
import pic10 from "../../../data/assets/p4_c1_h_i4.svg";
import pic11 from "../../../data/assets/p4_c1_h_i5.svg";
import pic12 from "../../../data/assets/p4_c1_h_i6.svg";
import pic13 from "../../../data/assets/p4_c1_h_i7.svg";
import pic14 from "../../../data/assets/p4_c1_h_i8.svg";
import pic15 from "../../../data/assets/p4_c1_h_i9.svg";
import pic16 from "../../../data/assets/p4_i2.png";
import pic17 from "../../../data/assets/p4_i3.png";
import { CardsContainer } from "./styles.js";
import { CloseOutlined } from '@ant-design/icons';
import App from "../Popup/app";

const Cards = () =>
{
    const [ open, setOpen ] = useState( false );

    return (
        <CardsContainer>
            <div id="products">
                <h1>OUR PRODUCTS</h1>
                <div id="products_main">
                    <div id="card">
                        <div className="card_main" id="Klinik" >
                            <div id="card_block1">
                                <h1>SpotCare™ Klinik-in-a-Kiosk</h1>
                                <p>SpotCare™ Klinik-in-a-Kiosk is primarily designed to provide neighbourhood solutions to an enclosed entity. It brings in remote doctor's desk by integrating vitals measuring medical device at the patient end of Kiosk, which is controlled and operated by the doctor remotely</p>
                                <div id="mini_container">
                                    <div id="mini_cards">
                                        <img src={ pic2 } alt="img" />
                                        <h1>Anytime, Anywhere</h1>
                                        <p>Virtual Kliniks for Convenience</p>
                                    </div>
                                    <div id="mini_cards">
                                        <img src={ pic3 } alt="img" />
                                        <h1>Doctors on-demand</h1>
                                        <p>Provides just-in-time consultation</p>
                                    </div>
                                    <div id="mini_cards">
                                        <img src={ pic4 } alt="img" />
                                        <h1>Near in-person</h1>
                                        <p>Doctor controls medical device at patient end</p>
                                    </div>
                                    <div id="mini_cards">
                                        <img src={ pic5 } alt="img" />
                                        <h1>Integrated eco-system</h1>
                                        <p>Connects local pharmacies and labs</p>
                                    </div>
                                </div>
                                <button onClick={ () => setOpen( true ) } >Download App</button>
                            </div>
                            <div id="card_block2">
                                <img src={ pic1 } alt="img" />
                            </div>
                        </div>
                        <div id="highlights">
                            <h1>Highlights</h1>
                            <div id="highlights_container">
                                <div id="mini_cards">
                                    <img src={ pic6 } alt="img" />
                                    <p>HD Quality Video Consultation with One-touch connect</p>
                                </div>
                                <div id="mini_cards">
                                    <img src={ pic7 } alt="img" />
                                    <p>FailSafe Connectivity - GSM-4G / GSM 5G / WiFi</p>
                                </div>
                                <div id="mini_cards">
                                    <img src={ pic9 } alt="img" />
                                    <p>Integrated Vitals Measurement</p>
                                </div>
                                <div id="mini_cards">
                                    <img src={ pic10 } alt="img" />
                                    <p>Multi-lingual with Major Indian Language Set-up</p>
                                </div>
                                <div id="mini_cards">
                                    <img src={ pic11 } alt="img" />
                                    <p>In-Network and Out-of Network Provider Setup</p>
                                </div>
                                <div id="mini_cards">
                                    <img src={ pic12 } alt="img" />
                                    <p>Integrated End to End POS  - Registration through payment gateway</p>
                                </div>
                                <div id="mini_cards">
                                    <img src={ pic13 } alt="img" />
                                    <p>Built-In Patient Record security and confidentiality</p>
                                </div>
                                <div id="mini_cards">
                                    <img src={ pic14 } alt="img" />
                                    <p>Modular and Customisable license Set-up </p>
                                </div>
                                <div id="mini_cards">
                                    <img src={ pic15 } alt="img" />
                                    <p>OTA upgrade of Spotcare versions</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="card">
                        <div className="card_main" id="SpotCare">
                            <div id="card_block1">
                                <h1>SpotCare™ Intelligent Patient Care Platform</h1>
                                <p>SpotCare™ is a state-of-the-art omni-channel system that allows doctors to keep electronic medical records  in a safe and secure way. SpotCare™ Doctor and SpotCare Patient Apps work together seamlessly to bring in convenience and quality to every doctor's consultation.</p>
                                <div id="mini_container">
                                    <div id="mini_cards">
                                        <img src={ pic2 } alt="img" />
                                        <h1>Non-Interfering</h1>
                                        <p>Your patient is yours</p>
                                    </div>
                                    <div id="mini_cards">
                                        <img src={ pic3 } alt="img" />
                                        <h1>Integrated Network</h1>
                                        <p>Activate your trusted Health network </p>
                                    </div>
                                    <div id="mini_cards">
                                        <img src={ pic4 } alt="img" />
                                        <h1>Live Updates</h1>
                                        <p>Broadcast messages to your patients</p>
                                    </div>
                                    <div id="mini_cards">
                                        <img src={ pic5 } alt="img" />
                                        <h1>Grow Organically</h1>
                                        <p>Your patients refer you in their network</p>
                                    </div>
                                </div>
                                <button onClick={ () => setOpen( true ) }>Download App</button>
                            </div>
                            <div id="card_block2">
                                <img src={ pic16 } alt="img" />
                            </div>
                        </div>
                    </div>


                    <div id="card">
                        <div className="card_main" id="Telecare">
                            <div id="card_block1">
                                <h1>TeleCare</h1>
                                <p>TeleCare is a world-class, High-definition TeleHealth offering from Klinik Everywhere. It enables doctors to provide high-quality, real-time teleconsultation to their patients while working on their EMR. TeleCare provides flexibility in consultation timing. It also allows doctors and patients to consult without fear of time-out.</p>
                                <div id="mini_container">
                                    <div id="mini_cards">
                                        <img src={ pic2 } alt="img" />
                                        <h1>Non-Intermediary</h1>
                                        <p>Direct fee transfers from patients</p>
                                    </div>
                                    <div id="mini_cards">
                                        <img src={ pic3 } alt="img" />
                                        <h1>Multi-Participant</h1>
                                        <p>Invite Patient's Guardian to the session</p>
                                    </div>
                                    <div id="mini_cards">
                                        <img src={ pic4 } alt="img" />
                                        <h1>Nurse Assisted</h1>
                                        <p>Patient-in-Clinic TeleConsultations</p>
                                    </div>
                                    <div id="mini_cards">
                                        <img src={ pic5 } alt="img" />
                                        <h1>Omni-Channel</h1>
                                        <p>Doctors can use across devices</p>
                                    </div>
                                </div>
                                <button onClick={ () => setOpen( true ) }>Download App</button>
                            </div>
                            <div id="card_block2">
                                <img src={ pic17 } alt="img" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {
                open ?
                    <div id="vid" style={ { background: `black`, position: `fixed`, top: `0`, width: `100%`, height: `100vh`, display: `flex`, justifyContent: `center`, alignItems: `center`, zIndex: `50`, padding: `5vw 0` } }>
                        <CloseOutlined style={ { color: `white`, position: `absolute`, right: `51px`, top: `20px` } } onClick={ () => setOpen( false ) } />
                        <App />
                    </div>
                    :
                    ""
            }

        </CardsContainer>
    );
};
export default Cards;