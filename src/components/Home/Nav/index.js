import React, { useState, useEffect } from 'react';
import { NavSection } from './styles.js'
import { Link } from "gatsby";
import fb from "../../../data/assets/navfb.svg";
import insta from "../../../data/assets/navinsta.svg";
import twitter from "../../../data/assets/navtwitter.svg";
import Navtube from "../../../data/assets/navtube.svg";
import ham1 from "../../../data/assets/ham.svg";
import close from "../../../data/assets/close.svg";
import logo1 from "../../../images/logo.svg"
import logo2 from "../../../images/logo2.svg"
import "../../../styles/banner.css";

const Nav = () =>
{

    useEffect( () =>
    {
        window.addEventListener( 'resize', showButton );

        window.addEventListener( 'scroll', changeBackground );
        return () =>
        {
            window.removeEventListener( 'resize', showButton );

            window.removeEventListener( 'scroll', changeBackground );
        }
    }, [] )


    const [ navbar, setNavbar ] = useState( false );
    const [ button, setButton ] = useState();
    const [ ham, setHam ] = useState( false );
    const showButton = () =>
    {
        if ( window.innerWidth <= 960 )
        {
            setButton( false );
        } else
        {
            setButton( true );
        }
    };
    useEffect( () =>
    {
        showButton();
        // eslint-disable-next-line
    }, [] )

    const changeBackground = () =>
    {
        if ( window.scrollY >= 80 )
        {
            setNavbar( true )
        } else
        {
            setNavbar( false );
        }
    };

    return (
        <NavSection>
            <div id={ navbar ? 'nav_main_div' : 'nav_main_div2' }>
                <div id="nav_container">
                    <div id="logo">
                        <Link to="/Home/" id="logo_link">
                            <div id="nav_logo">
                            <img src={ logo1 } alt="img" id="nav_logo1" />
                            <img src={ logo2 } alt="img" id="nav_logo2" />
                            </div>
                        </Link>
                        <img src={ ham1 } alt="img" id="ham_burger" onClick={ () => setHam( true ) } role="presentation"/>
                    </div>
                    <div id="nav_items">
                        <Link to="/Home/" id="navlinks">Home</Link>
                        <Link to="/Home/#products" id="navlinks">Products</Link>
                        <Link to="/FindDoctors" id="navlinks">Find Doctor</Link>
                        <Link to="/Home/#about" id="navlinks">About</Link>
                        <Link to="/Contact" id="navlinks">Contact Us</Link>
                        <a href="/Register" target="_blank" rel="noopener noreferrer" id="reglink"><button id="navbtn1">Register/Login</button></a>
                    </div>
                </div>
            </div>
            {
                ham ?
                    <div id="nav_items_mob">
                        <img src={ close } alt="img" id="ham_burger" onClick={ () => setHam( false ) } role="presentation"/>
                        <Link to="/Home/" id="navlinks" onClick={ () => setHam( false ) }>Home</Link>
                        <Link to="/Home/#products" id="navlinks" onClick={ () => setHam( false ) }>Products</Link>
                        <Link to="/FindDoctors" id="navlinks" onClick={ () => setHam( false ) }>Find Doctor</Link>
                        <Link to="/Home/#about" id="navlinks" onClick={ () => setHam( false ) }>About</Link>
                        <Link to="/Contact" id="navlinks" onClick={ () => setHam( false ) }>Contact Us</Link>
                        <a href="/Register" target="_blank" rel="noopener noreferrer" id="reglink"><button id="navbtn1" onClick={ () => setHam( false ) }>Register/Login</button></a>
                        <div id="nav_icons">
                            <a href="https://www.facebook.com/NaturalMindsInd/" target="_blank" rel="noopener noreferrer"><img src={ fb } alt="img" /></a>
                            <a href="https://www.instagram.com/naturalminds_in/?hl=en" target="_blank" rel="noopener noreferrer"><img src={ insta } alt="img" /></a>
                            <a href="https://twitter.com/naturalminds_in" target="_blank" rel="noopener noreferrer"><img src={ twitter } alt="img" /></a>
                            <a href="https://www.youtube.com/channel/UCHpL9doEkIptF7BkPctpyvw" target="_blank" rel="noopener noreferrer"><img src={ Navtube } alt="img" /></a>
                        </div>
                    </div>
                    :
                    ""
            }
        </NavSection>
    );
};
export default Nav;
