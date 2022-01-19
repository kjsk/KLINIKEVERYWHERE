import React, { useState } from "react";
import { message } from 'antd';
import { ContactContainer } from "./styles";
import img6 from "../../../data/assets/contact.png";
import Footer from "../Footer";



const Contact = () =>
{

    const [ name, setName ] = useState( "" )
    const [ subject, setSubject ] = useState( "" )
    const [ email, setEmail ] = useState( "" )
    const [ query, setQuery ] = useState( "" )
    const [ errors, setErrors ] = useState( false );
    const validation = () =>
    {

        let errors = {};
        if ( !name )
        {
            errors.name = "red"
        } else if ( name < 3 )
        {
            errors.name = "red"
        } if ( !subject )
        {
            errors.subject = "red"
        } if ( !email )
        {
            errors.email = "red"
        } else if ( !/\S+@\S+\.\S+/.test( email ) )
        {
            errors.email = "red"
        } if ( !query )
        {
            errors.query = "red"
        }
        return errors;
    }
    /*=======================Api calling=========================*/
    async function contactSubmit ()
    {
        let item = { name, subject, email, query }

        let result = await fetch( "https://www.spotcare.in/api/contactUs", {
            method: "POST",
            body: JSON.stringify( item ),
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
        } )
        result = await result.json()
        if ( result.status === true )
        {
            success();
            clear();
            setErrors( true )
        } else
        {
            error();
        }
        console.log( result.status )
    }
    const signup2 = () =>
    {
        setErrors( validation() )
        warning();
    }
    const success = () =>
    {
        message.success( 'Registered' );
    };

    const error = () =>
    {
        message.error( 'Error' );
    };
    const warning = () =>
    {
        message.warning( 'Fill the required fields' );
    };

    const clear = () =>
    {
        setName( "" )
        setSubject( "" )
        setEmail( "" )
        setQuery( "" )
    }

    return (
        <ContactContainer>
            <div className="contact" id="contact">
                <h1>Get in Touch</h1>
                <div className="contact_contrainer">
                    <div className="contact_img_block">
                        <img src={ img6 } alt="img1" />
                    </div>
                    <div className="contact_info_block">
                        <div className="contact_info_top">
                            <div className="contact_name" style={ { position: `relative` } }>
                                { ( !name ) || ( name.length < 3 ) ? ( <span style={ { color: ( errors.name ) } }>Your Name</span> ) : ( <span>Your Name</span> ) }
                                <input type="text" placeholder="Name" value={ name } onChange={ e => setName( e.target.value ) } />
                            </div>
                            <div className="contact_name" style={ { position: `relative` } }>
                                { ( !subject ) ? ( <span style={ { color: ( errors.subject ) } }>Subject</span> ) : ( <span>Subject</span> ) }
                                <input type="text" placeholder="Subject" value={ subject } onChange={ e => setSubject( e.target.value ) } />
                            </div>
                        </div>
                        <div className="contact_mail" style={ { position: `relative` } }>
                            { ( !email || ( !/\S+@\S+\.\S+/.test( email ) ) ) ? ( <span style={ { color: ( errors.email ) } }>Email ID</span> ) : ( <span>Email ID</span> ) }
                            <input type="mail" placeholder="chrisdo@gmail.com" type="text" value={ email } onChange={ e => setEmail( e.target.value ) } />
                        </div>
                        <div className="contact_message" style={ { position: `relative` } }>
                            { ( !query ) || ( query.length < 10 ) ? ( <span style={ { color: ( errors.query ) } }>Message</span> ) : ( <span>Message</span> ) }
                            <textarea type="mail" placeholder="Please Type Your Message" type="text" value={ query } onChange={ e => setQuery( e.target.value ) } />
                        </div>
                        <div className="button">
                            { ( !name || !subject || !email || !/\S+@\S+\.\S+/.test( email ) || !query || query.length < 10 ) ? (
                                <button onClick={ signup2 } style={ { background: `gray` } }>SEND MESSAGE</button>
                            ) : (
                                <>
                                    <button onClick={ contactSubmit }>SEND MESSAGE</button>
                                </>
                            ) }

                        </div>
                    </div>
                </div>
            
            </div>
            
            <Footer />
        </ContactContainer>


    );
};
export default Contact;