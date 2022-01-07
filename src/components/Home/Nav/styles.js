import styled from "styled-components"
import * as palette from "../../../styles/variables"

export const NavSection = styled.div`
* {
    font-family: ${palette.CONTENT_FONT_FAMILY} !important;
  }
position: fixed;
top: 0;
left: 0;
width: 100%;
z-index: 5;
#nav_main_div {
    background: white;
    box-shadow: 0px 0.285714285714286vw 0.57vw rgba(12, 62, 80, 0.03);
}
#nav_container {
    display: flex;
    width: 100%;
    padding: 0.85vw 3.57vw 0.857vw 6.857vw;
    align-items: center;
    justify-content: space-between;
}
#nav_container #nav_items {
    display: flex;
    align-items: center;
}
#nav_container #nav_items #navlinks {
    font-style: normal;
    font-weight: normal;
    font-size: 1.14vw;
    line-height: 1.4vw;
    display: flex;
    align-items: center;
    color: #212E34;
    margin: 0 3.21vw 0 0;
    position: relative;
    transition: 0.5s ease-in-out;
}
#nav_container #nav_items #navlinks:hover {
    color: #0093c6;
}
#nav_container #nav_items .nav_active:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 0.21vw;
    background: #00BDE1;
    top: 1.64vw;
}
#nav_container #nav_items #navbtn1 {
    width: 12.8vw;
    height: 3.4vw;
    border: 0.085vw solid #DB2874;
    border-radius: 0.57vw;
    background: transparent;
    font-style: normal;
    font-weight: normal;
    font-size: 1.14vw;
    color: #212E34;
    margin: 0 3.21vw 0 0;
    cursor: pointer;
    transition: 0.5s ease-in-out;
}
#nav_container #nav_items #navbtn1:hover {
    border: 0.085vw solid #0093c6;
    color: #0093c6;
}
#nav_container #logo {
    display: flex;
    align-items: center;
    overflow: hidden;
}
#nav_container #nav_logo {
    width: fit-content;
    display: flex;
    align-items: center;
}
#nav_container #nav_logo #nav_logo1 {
    width: 2.55vw;
    animation-name: example2;
    animation-duration: 4s;
    transition: 0.5s ease-in-out;
}
#nav_container #nav_logo #nav_logo2 {
    width: 6.15vw;
    margin: 0 0 0 0.42vw;
}
@keyframes example2 {
    0%   {transform: rotate(0deg);}
    100% {transform: rotate(180deg);}
  }
#nav_container #ham_burger {
    display: none;
}
 #nav_items_mob {
    display: none;
}

@media (max-width: 750px) {
    #nav_container {
        height: fit-content;
        padding: 18px;
    }
    #nav_container #logo {
        width: 100%;
        height: fit-content;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    #nav_container #nav_logo #nav_logo2 {
        margin: 0 0 0 5px;
    }
    #nav_container #logo #logo_link {
        display: flex;
    }
    #nav_container #logo #ham_burger {
        display: flex;
        width: 24px;
        height: 24px;
    }
    #nav_container #nav_logo {
        margin: auto 0 auto 0;
    }
    #nav_container #nav_logo #nav_logo1 {
        width: 35px;
    }
    #nav_container #nav_logo #nav_logo2 {
        width: 80px;
        margin: 0 0 0 5px;
    }
    #nav_container #nav_items {
        display: none;
    }
     #nav_items_mob {
        z-index: 5;
        display: flex;
        flex-direction: column;
        position: fixed;
        background: white;
        width: 100%;
        height: 100%;
        top: 0;
        padding: 80px 20px 0 20px;
    }
    #nav_items_mob #ham_burger {
        position: absolute;
        width: 24px;
        height: 24px;
        right: 0;
        right: 30px;
        top: 29px;
    }
    #nav_items_mob #navlinks {
        font-weight: 600;
        color: #222222;
        opacity: 0.8;
        font-size: 20px;
        padding: 0;
        margin-top: 20px;
        width: fit-content;
    }
    #nav_items_mob #navlinks:hover {
        border-bottom: 2px solid #00b3db;
        transition: 0.5s ease;
    }
    #nav_icons img {
        width: 32px;
    }
    #nav_items_mob #navbtn1 {
        width: fit-content;
        height: fit-content;
        top: 30px;
        border: 0px solid rgb(161, 157, 157);
        font-weight: 600;
        color: #222222;
        opacity: 0.8;
        font-size: 20px;
        padding: 0;
        margin-top: 20px;
        color: #222222;
        margin: 0;
        margin-top: 20px;
        font-weight: 600;
        opacity: 0.8;
        background: none;
    }
    #nav_items_mob #navbtn1:hover {
        border-bottom: 2px solid #00b3db;
        transition: 0.5s ease;
        border-radius: unset;
    }
    #nav_icons {
        display: flex;
        justify-content: space-around;
        width: fit-content;
        margin: auto;
        z-index: 20;
    }
    #nav_icons a:first-child {
        margin-left: 0;
    }
    #nav_icons a {
        width: fit-content;
        height: fit-content;
        margin-left: 6vw;
        cursor: pointer;
    }
    #nav_icons a img {
        margin: 0;
        width: 29px;
    }
}
`