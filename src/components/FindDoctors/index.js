import React, { useState, useEffect, useRef } from "react";
import { navigate } from "gatsby";
import playstorebtn from "../../data/assets/playstore.png";
import appstorebtn from "../../data/assets/appstore.png";
import icon1 from "../../data/assets/find_doc1.svg";
import icon2 from "../../data/assets/find_doc2.svg";
import icon3 from "../../data/assets/find_doc3.svg";
import icon4 from "../../data/assets/find_doc4.svg";
import icon from "../../data/assets/searchwhite.svg";
import male from "../../data/assets/male.png";
import female from "../../data/assets/female.jpeg";
import _ from "lodash";
import { DoctorContainer } from "./styles.js";
import { CloseOutlined } from '@ant-design/icons';
import App from "../Home/Popup/app";
import img from "../../data/assets/banner3.png";
import Footer from "../Home/Footer";

const FindDoctors = () =>
{
    /*===================Enter Keypress event=======================*/
    function useKey(key, cb) {
        const callbackRef = useRef(cb);
    
        useEffect(() => {
          callbackRef.current = cb;
        })
    
        useEffect(() => {
          function handle(event) {
            if (event.code === key) {
              callbackRef.current(event);
            }
          }
          document.addEventListener("keypress", handle);
        }, [key]);
      }
    function handleEnter ()
    {
        search();
        navigate( "/FindDoctors/#doctors_cards_container" );
    }
    useKey("Enter", handleEnter)
    /*================== patient form====================*/
    const [ toggle, setToggle ] = useState()
    /*=================================================================*/

    const [ searchTerm, setSearchTerm ] = useState( "" )
    const [ final, setFinal ] = useState( "" )
    const inputValue = event =>
    {
        const data = event.target.value
        setSearchTerm( data )
    }
    async function search ()
    {
        let item = { searchTerm }
        let result = await fetch(
            "https://www.spotcare.in/api/spotcare/searchDoctors",
            {
                method: "POST",
                body: JSON.stringify( item ),
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
            }
        )
        result = await result.json()
        setFinal( result );
    }
    useEffect( () =>
    {
        search();
        navigate( "/FindDoctors/" );
        // eslint-disable-next-line
    }, [] )

    return (
        <DoctorContainer>
            <div id="doctors">
                <div id="doctor_container_main">
                    <div id="doctor_container">
                        <img src={ img } alt="img" id="background" />
                        <div id="doctor_search">
                            <input
                                type="search"
                                placeholder="Search by name, specialization, phone number"
                                onChange={ inputValue }
                            />
                            <img
                                src={ icon }
                                alt="search"
                                onClick={ search }
                                role="presentation"
                                id="doctor_img_container"
                            />
                        </div>
                    </div>
                    <div id="doctors_cards_container">
                        <p id="doctors_footer_title">{ final.count } Doctors found</p>
                        <div id="doc_footer">
                            <div id="doc_footer_block1">
                                <p>
                                    <span style={ { fontWeight: `600` } }>
                                        Note:
                                    </span> We have designed best user experience and value through our Mobile App. Download the app and book appointment directly.
                                </p>
                            </div>
                            <div id="doc_footer_block2">
                                <a href="https://play.google.com/store/apps/details?id=com.carereceiver" rel="noopener noreferrer" style={ { cursor: `pointer` } } target="_blank"><img src={ playstorebtn } alt="image1" id="doc_store1" /></a>
                                <a href="https://apps.apple.com/in/app/spotcare-patients-public/id1535914517" rel="noopener noreferrer" style={ { cursor: `pointer`, listStyleType: `none`, textDecoration: `none` } } target="_blank"><img src={ appstorebtn } alt="image2" /></a>
                            </div>
                        </div>
                        <div id="doc_all_cards">
                            { final &&
                                final.data.map( ( key, i ) => (
                                    <div id="doc_card1" key={ i }>
                                        <div id="doc_card1_block1">
                                            <div id="doc_card1_block1_image_container">

                                                { !_.isEmpty( key.profile_image ) ? (
                                                    <img src={ key.profile_image } alt={ key.name } />
                                                ) : (
                                                    <>
                                                        { ( !key.gender ) || key.gender.toLowerCase() === "male" ||
                                                            key.gender.toLowerCase() === "m" ? (
                                                            <img src={ male } alt="male" />
                                                        ) : (
                                                            <>
                                                                { key.gender.toLowerCase() === "female" || key.gender.toLowerCase() === "f" ? (
                                                                    <img src={ female } alt="female" />
                                                                ) : ( <img src={ female } alt="female" /> ) }
                                                            </>
                                                        ) }
                                                    </>
                                                ) }
                                            </div>
                                            <div id="doc_card1_block1_matter_container">
                                                <p id="doc_card_title">{ key.name }</p>
                                                <div id="block_icon_container">
                                                    <div id="block_icon_container_container2">
                                                        <img src={ icon1 } alt="img1" id="cont_icon_img" />
                                                    </div>
                                                    <div id="block_icon_container_container">
                                                        <div>
                                                            <p>{ key.doc_type_name }</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div id="block_icon_container">
                                                    <div id="block_icon_container_container2">
                                                        <img src={ icon2 } alt="img1" id="cont_icon_img" />
                                                    </div>
                                                    <div id="block_icon_container_container">
                                                        <div>
                                                            <p>License No: { key.license_no }</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div id="block_icon_container">
                                                    <div id="block_icon_container_container2">
                                                        <img src={ icon3 } alt="img1" id="cont_icon_img" />
                                                    </div>
                                                    <div id="block_icon_container_container">
                                                        <div>
                                                            <p>Mail: { key.email_id }</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div id="block_icon_container">
                                                    <div id="block_icon_container_container2">
                                                        <img src={ icon4 } alt="img1" id="cont_icon_img" />
                                                    </div>
                                                    <div id="block_icon_container_container">
                                                        <div>
                                                            <p>{ key.city }</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div id="doc_card1_block2">
                                            <div>
                                                <button id="doc_btn1">View Full Profile</button>
                                            </div>
                                            <div role="presentation">
                                                <button id="doc_btn2" onClick={ () => setToggle( true ) }>GetApp</button>
                                            </div>
                                        </div>
                                    </div>
                                ) ) }
                        </div>
                    </div>
                </div>
            </div>
            {
                toggle ?
                    <div id="vid" style={ { background: `black`, position: `fixed`, top: `0`, width: `100%`, height: `100vh`, display: `flex`, justifyContent: `center`, alignItems: `center`, zIndex: `50`, padding: `5vw 0` } }>
                        <CloseOutlined style={ { color: `white`, position: `absolute`, right: `51px`, top: `20px` } } onClick={ () => setToggle( false ) } />
                        <App />
                    </div>
                    :
                    ""
            }
            <Footer />
        </DoctorContainer>
    )
}
export default FindDoctors;