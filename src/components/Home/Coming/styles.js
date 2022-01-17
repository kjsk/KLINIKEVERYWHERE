import styled from "styled-components"
import * as palette from "../../../styles/variables"

export const ComingContainer = styled.div`
* {
    font-family: ${palette.CONTENT_FONT_FAMILY}
}
.commingsoon {
    padding: 109px 0 130px 0;
    background: #F4FAFD;
}
.commingsoon h1 {
    font-style: normal;
    font-weight: bold;
    font-size: 40px;
    line-height: 90px;
    text-align: center;
    color: #000000;
    margin: 0;
}
.commingsoon_container {
    max-width: calc(100% - 15.2%);
    margin: auto;
    display: grid;
    grid-template-rows: auto;
    grid-template-columns: repeat(3, auto);
    gap: 64px;
    margin-top: 49px;
}
.commingsoon_cards {
    text-align: left;
    background-color: white;
    box-shadow: 0px 10px 20px rgba(41, 41, 42, 0.07);
    border-radius: 8px;
    padding: 25px 25px 40px 25px;
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: 5.8vw auto;
    transition: 0.7s ease;
}
.commingsoon_cards:hover {
    box-shadow: 0px 10px 20px rgba(41, 41, 42, 0.2);
}
.commingsoon_cards_img_container{
    width: fit-content;
    height: fit-content;
}
.commingsoon_cards_content_matter{
    width: fit-content;
    height: fit-content;
}
.commingsoon_cards img {
    grid-row: 1/2;
}
#cs_img {
    width: 4.5vw;
}
.commingsoon_cards h2 {
    font-style: normal;
    font-weight: 600;
    font-size: 22px;
    color: #ff4081;
}
.commingsoon_cards p {
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    color: #000000;
    margin: 0 0 1vw 0;
    line-height: 1.5vw;
}
.commingsoon_cards h3 {
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    color: #000000;
    opacity: 0.7;
    line-height: 21px;
    text-align: justify;
}
.commingsoon img {
    margin: 0;
}
@media (max-width:1300px) {
    .commingsoon {
        padding: 7.78571428571429vw 0;
    }
    .commingsoon h1{
        font-size: 4vw;
        line-height: 3vw;
    }
    .commingsoon_container {
        max-width: calc(100% - 8%);
        gap: 3vw;
        margin-top: 8vw;
    }
    .commingsoon_cards {
        padding: 1.5vw 1.5vw 2.2vw 1.5vw;
        border-radius: 1vw;
    }
    .commingsoon_cards h2 {
        font-size: 1.3vw;
    }
    .commingsoon_cards p {
        font-size: 1vw;
    }
    .commingsoon_cards h3{
        font-size: 1.2vw;
        line-height: 1.8vw;
    }
}
@media (max-width:750px){
    .commingsoon{
        height: fit-content;
        padding: 20vw 0;
    }
    .commingsoon h1 {
        font-size: 8vw;
    }
    .commingsoon_container {
        max-width: calc(100% - 8%);
        margin: auto;
        display: grid;
        grid-template-columns: auto;
        grid-template-rows: repeat(3, 93vw);
        gap: 13.3vw;
        margin-top: 17.2vw;
    }
    #cs_img {
        width: 15vw;
    }
    .commingsoon_cards {
        padding: 4vw;
        grid-template-rows: 15vw auto;
    }
    .commingsoon_cards_content {
        padding-top: 3vw;
    }
    .commingsoon_cards h2 {
        font-style: normal;
        font-weight: 600;
        font-size: 5vw;
        line-height: inherit;
    }
    .commingsoon_cards p {
        font-style: normal;
        font-weight: 600;
        font-size: 3.5vw;
        color: #000000;
        margin: 0;
        line-height: 2.5vw;
        margin-top: 2vw;
    }
    .commingsoon_cards h3 {
        font-style: normal;
        font-weight: normal;
        font-size: 3.5vw;
        color: #000000;
        opacity: 0.7;
        line-height: 5vw;
        margin: 0;
        margin-top: 2vw;
        text-align: justify;
    }
    .commingsoon_cards p {
        font-style: normal;
        font-weight: 600;
        font-size: 3.5vw;
        color: #000000;
        margin: 0;
        line-height: inherit;
        margin: 0;
    }
}
`
