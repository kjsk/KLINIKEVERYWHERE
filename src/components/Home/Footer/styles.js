import styled from "styled-components"
import * as palette from "../../../styles/variables"

export const FooterSection = styled.div`
* {
    font-family: ${palette.FONT_FAMILY} !important;
}
.footer {
    width: 100%;
    background: linear-gradient(135deg, #12c5e7 0%, #0385b1 100%);
    padding: 3.85vw 6.4vw 2.85vw 6.4vw;
}
#footer_title {
    display: none;
    font-style: normal;
    font-weight: bold;
    font-size: 4.5vw;
    line-height: 5.7vw;
    color: #ffffff;
    margin: 0;
    cursor: pointer;
    width: 57vw;
}
.footer_container {
    display: grid;
    grid-template-columns: 20vw 14vw 8vw 18vw 1fr;
    gap: 3.57vw;
    margin: 0;
}
.footer_b1_title p {
    font-style: normal;
    font-weight: bold;
    font-size: 1.524vw;
    color: #ffffff;
    margin: 0;
    cursor: pointer;
    line-height: 2.2vw;
}
.footer_b1_title #f_b_t2 {
    font-style: normal;
    font-weight: bold;
    font-size: 1.524vw;
    color: #ffffff;
    margin: 0;
    cursor: pointer;
    display: none;
}
.footer_b1_content {
    margin: 0.5vw 0 0 0;
}
.footer_b1_content p {
    cursor: pointer;
}
#footer_content {
    font-style: normal;
    font-weight: normal;
    font-size: 1vw;
    line-height: 2.07vw;
    color: #ffffff;
    margin: 0;
}
.footer_icons {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 5vw;
}
.footer_icons a {
    margin-left: 3vw;
}
.footer_icons a:first-child {
    margin-left: 0;
}
.footer_icons img {
    margin: 0;
    width: 1.5vw;
    cursor: pointer;
}
#footer_footer {
    font-style: normal;
    font-weight: normal;
    font-size: 1vw;
    letter-spacing: 0.06em;
    color: #ffffff;
    margin: 0;
    text-align: center;
    margin-top: 40px;
}
#store:nth-child(3) {
    margin: 1vw 0 0 0;
}
#store p {
    font-style: normal;
    font-weight: 600;
    font-size: 1.125vw;
    line-height: 1.5vw;
    color: #ffffff;
    display: flex;
    align-items: center;
}
#store a {
    width: fit-content;
    height: fit-content;
}
#store img {
    width: 1.8125vw;
    margin-left: 1.25vw;
}
@media (max-width: 750px) {
    .footer {
        padding: 8.75vw 5vw;
    }
    #footer_title {
        display: flex;
    }
    .footer_container {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 3vw;
        margin: 9vw 0 0 0;
    }
    .footer_container #footer_block1:nth-child(1) {
        grid-row: 2/3;
    }
    .footer_container #footer_block1:nth-child(1) .footer_b1_title p {
        display: none;
    }
    .footer_container #footer_block1:nth-child(1) .footer_b1_title #f_b_t2 {
        display: flex;
        font-size: 4vw;
        line-height: unset;
    }
    .footer_img {
        display: flex;
        flex-direction: column;
        margin: 8vw 0 0 0 ;
        justify-content: center;
    }
    .footer_img img {
        margin: 0;
    }
    #store {
        margin-top: 3vw;
    }
    #store:first-child {
        margin: 0 ;
    }
    #store p {
        font-size: 3.2vw;
        line-height: 1.5vw;
        margin: 0;
    }
    #store img {
        width: 5vw;
        margin: 0;
        margin-left: 2.9vw;
    }
    .footer_b1_title p {
        font-size: 4vw;
        line-height: unset;
    }
    
    #footer_content {
        font-size: 2.9vw;
        line-height: 5vw;
    }
    .footer_icons {
        margin-top: 10vw;
    }
    .footer_icons img {
        width: 4.2vw;
    }
    #footer_footer {
        margin-top: 4vw;
        font-size: 3vw;
    }
}

`