import React, { useState, useEffect } from 'react';
import { NavSection } from './styles.js'
import { Link } from "gatsby";
import logo from "../../../data/assets/nav-logo.svg";
import fb from "../../../data/assets/navfb.svg";
import insta from "../../../data/assets/navinsta.svg";
import twitter from "../../../data/assets/navtwitter.svg";
import Navtube from "../../../data/assets/navtube.svg";
import ham1 from "../../../data/assets/ham.svg";
import close from "../../../data/assets/close.svg";

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
                        <Link to="/">
                            <img src={ logo } alt="image" id="nav_logo" />
                        </Link>
                        <img src={ ham1 } alt="img" id="ham_burger" onClick={ () => setHam( true ) } />
                    </div>
                    <div id="nav_items">
                        <Link to="/" id="navlinks" activeClassName="nav_active">HOME</Link>
                        <Link to="/" id="navlinks" activeClassName="nav_active">ABOUT</Link>
                        <Link to="/#cards_container" id="navlinks" activeClassName="nav_active">PRODUCTS</Link>
                        <Link to="/" id="navlinks" activeClassName="nav_active">FIND DOCTOR</Link>
                        <Link to="/" id="navlinks" activeClassName="nav_active">CONTACT US</Link>
                        <Link to="/" id="reglink"><button id="navbtn1">Register/Login</button></Link>
                    </div>
                </div>
            </div>
            {
                ham ?
                    <div id="nav_items_mob">
                        <img src={ close } alt="img" id="ham_burger" onClick={ () => setHam( false ) } />
                        <Link to="/" id="navlinks" activeClassName="nav_active">HOME</Link>
                        <Link to="/" id="navlinks" activeClassName="nav_active">ABOUT</Link>
                        <Link to="/" id="navlinks" activeClassName="nav_active">PRODUCTS</Link>
                        <Link to="/" id="navlinks" activeClassName="nav_active">FIND DOCTOR</Link>
                        <Link to="/" id="navlinks" activeClassName="nav_active">CONTACT US</Link>
                        <Link to="/register" id="reglink"><button id="navbtn1">Register/Login</button></Link>
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
