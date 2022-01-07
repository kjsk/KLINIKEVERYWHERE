import styled from "styled-components"
import * as palette from "../../../styles/variables"

export const CustomersContainer = styled.div`
* {
    font-family: ${palette.CONTENT_FONT_FAMILY} !important;
}
.ourcustomers {
    background: #F4FAFD;
    padding: 9vw 0;
}
.ourcustomers .carousel-indicators {
    display: none;
}
.ourcustomers_carousal {
    margin: 6.7vw auto 0 auto;
    width: fit-content;
}
.ourcustomers h1 {
    font-style: normal;
    font-weight: bold;
    font-size: 2.85714285714286vw;
    color: #000000;
    text-align: center;
    margin: 0;
}
.ourcustomers_video {
    position: relative;
}
#playbtn {
    position: absolute;
    margin: 0;
    right: 0;
    cursor: pointer;
    width: 4vw;
}
.ourcustomers_container {
    display: flex;
    width: fit-content;
}
.ourcustomers_video {
    width: fit-content;
    height: fit-content;
    filter: drop-shadow(0px 4px 30px rgba(0, 0, 0, 0.15));
}
#video_img {
    margin: 0;
    width: 33.5714285714286vw;
    height: 22.4285714285714vw;
}
.ourcustomers_matter {
    width: fit-content;
    margin: auto;
    padding: 0 3.57142857142857vw 0 4.78571428571429vw;
    position: relative;
}
#quatation {
    width: 2.85714285714286vw;
    position: absolute;
    right: 3.57142857142857vw;
    opacity: 0.2;
    top: -2.5vw;
}
.ourcustomers_doc_details {
    margin-top: 1.35714285714286vw;
}
.ourcustomers_matter h2 {
    font-family: ${palette.FONT_FAMILY} !important;
    font-style: normal;
    font-weight: 600;
    font-size: 1.4vw;
    color: #ff4081;
    margin-top: 0.714285714285714vw;
}
.ourcustomers_matter p {
    width: 37.8vw;
    font-family: ${palette.FONT_FAMILY} !important;
    font-style: normal;
    font-weight: normal;
    font-size: 1.14285714285714vw;
    line-height: 1.71428571428571vw;
    color: #000000;
    opacity: 0.7;
    margin: 0;
    text-align: justify;
}
#doc_name {
    font-family: ${palette.FONT_FAMILY} !important;
    font-style: normal;
    font-weight: 600;
    font-size: 1.28571428571429vw;
    line-height: 1.71428571428571vw;
    color: #000000;
    opacity: 1;
}
#doc_address {
    font-family: ${palette.FONT_FAMILY} !important;
    font-style: normal;
    font-weight: normal;
    font-size: 1.07142857142857vw;
    color: #000000;
    opacity: 0.7;
}
/*=======mediaquaries==========*/
@media (max-width: 750px) {
    .ourcustomers {
        padding: 9vw 5vw 20vw 5vw;
    }
    .ourcustomers h1 {
        font-size: 5vw;
        line-height: 18.75vw;
    }
.ourcustomers_video {
    filter: drop-shadow(0px 0.833333333333333vw 6.25vw rgba(0, 0, 0, 0.15));
}
#video_img {
    width: 90vw;
    height: 60vw;
    border-radius: 2vw;
}
.ourcustomers_container {
    flex-direction: column;
}
.ourcustomers_matter {
    width: 100%;
    padding: 0 0;
    margin-top: 9vw;
}
#quatation{
    display: none;
}
.ourcustomers_matter_head h2 {
    font-weight: 600;
    font-size: 5vw;
    line-height: 6.66666666666667vw;
}
.ourcustomers_matter_head p {
    width: 100%;
    margin-top: 2vw;
    font-size: 4vw;
    line-height: unset;
}
.ourcustomers_doc_details{
    margin-top: 7vw;
}
#doc_name{
    font-size: 4vw;
}
#doc_address{
    font-size: 4vw;
    margin-top: 3.5vw;
    line-height: 5vw;
    width: 100%;
    text-align: inherit;
}
}
`