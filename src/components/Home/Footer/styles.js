import styled from "styled-components"
import * as palette from "../../../styles/variables"

export const FooterSection = styled.div`
* {
    font-family: ${palette.FONT_FAMILY} !important;
}
.footer {
    width: 100%;
    background: linear-gradient(135deg, #12c5e7 0%, #0385b1 100%);
    padding: 54px 90px 40px 90px;
}
.footer_container {
    display: grid;
    grid-template-columns: 20vw 1fr 8vw 18vw 1fr;
    gap: 50px;
}
.footer_b1_title p {
    font-style: normal;
    font-weight: bold;
    font-size: 21.3442px;
    color: #ffffff;
    margin: 0;
    cursor: pointer;
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
    font-size: 14px;
    line-height: 29px;
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
    font-size: 14px;
    letter-spacing: 0.06em;
    color: #ffffff;
    margin: 0;
    text-align: center;
    margin-top: 40px;
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
@media (max-width: 650px) {
    .footer_container {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 3vw;
    }
    .footer_img {
        display: flex;
        flex-direction: column;
        margin: 0;
        justify-content: center;
    }
    .footer_img img {
        margin: 0;
    }
    #store {
        margin-top: 3vw;
    }
    #store:first-child {
        margin-top: 0;
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