import React, { useState, useEffect, useRef } from "react";
import qr1 from "../../../data/assets/patentqr.png";
import playstorebtn from "../../../data/assets/playstore_btn.svg";
import appstorebtn from "../../../data/assets/appstore_btn.svg";
import { AppSection } from "./styles";
import { message } from 'antd';

const App = () =>
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
          return () => document.removeEventListener("keypress")
        }, [key]);
      }
    function handleEnter ()
    {
        sendPat();
    }
    useKey("Enter", handleEnter)
    /*==================Api calling for patient form====================*/
    const [ mobile_no, setMobile_no ] = useState( "" );

    async function sendPat ()
    {
        let item = { mobile_no }

        let patResult = await fetch( "https://www.spotcare.in/api/Spotcare/getPatientLink", {
            method: "POST",
            body: JSON.stringify( item ),
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
        } )

        patResult = await patResult.json();
        if ( patResult.status === true )
        {
            success();
            setMobile_no( "" );
        } else
        {
            error();
        }
    }

    const success = () =>
    {
        message.success( 'Link Sent' );
    };

    const error = () =>
    {
        message.error( 'Please try again' );
    };
    const warning = () =>
    {
        message.warning( 'Enter your mobile number' );
    };

    return (
        <AppSection >
            <div id="qr_conatiner">
                <div id="qr_conatiner_block1">
                    <div id="ql_container_matter_container">
                        <div id="ql_container_matter">
                            <h1>SpotCare™ For Patients & General Public</h1>
                            <p>Adding value to the lives of patients, doctors, health workers, pharmacies, diagnostics and healthcare institutions with the help of new-age technology</p>
                        </div>
                        <div id="qr_container_input_block" style={ { position: `relative` } }>
                            <h1>Get the link to Download the App</h1>
                            <div id="qr_container_input_block_container">

                                <div id="qr_container_input_block_container_container">
                                    <p>+91</p>
                                    <input type="text" placeholder="Enter Mobile Number" value={ mobile_no } onChange={ ( e ) => setMobile_no( e.target.value || "" ) } maxLength={ 10 } minLength={ 10 } onKeyPress={ event => { if ( !/[0-9]/.test( event.key ) ) { event.preventDefault() } } } />
                                </div>
                                { ( !mobile_no || mobile_no.length < 10 ) ? (
                                    <button onClick={ warning } style={ { background: `gray` } }>Get App Link</button> ) : (
                                    <button onClick={ sendPat }>Get App Link</button>
                                ) }
                            </div>
                        </div>
                    </div>
                </div>
                <div id="qr_conatiner_block2">
                    <div id="qrs">
                        <div id="qu_image_container">
                            <img src={ qr1 } alt="qr" />
                        </div>
                        <div id="qr_image_button">
                            <a href="https://play.google.com/store/apps/details?id=com.carereceiver"><button ><img src={ playstorebtn } alt="img" />Google Play</button></a>
                            <a href="https://apps.apple.com/in/app/spotcare-patients-public/id1535914517"><button ><img src={ appstorebtn } alt="img" />App Store</button></a>
                        </div>
                    </div>
                </div>
            </div>
        </AppSection>
    );
};

export default App;