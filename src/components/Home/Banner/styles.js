import styled from "styled-components"
import * as palette from "../../../styles/variables"

export const BannerSection = styled.div`
* {
    font-family: ${palette.FONT_FAMILY}
}
background: #F4FAFD;
height: 48vw;
display: flex;
overflow: hidden;
#banner_section {
    width: fit-content;
    height: fit-content;
    margin: auto 0 auto 6.8vw;
}
#banner_section #vid {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100vh;
    background: red;
}
#banner_section #matter {
    width: 46vw;
}
.ant-carousel .slick-track {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
}
.ant-carousel .slick-dots-bottom{
    bottom: 13vw;
    margin: 0;
    width: fit-content;
    z-index: 0;
}
.ant-carousel .slick-dots li.slick-active {
    width: 5px;
    height: 5px;
    transform: rotate(45deg);
    background: #00B3DB;
    border: 1px solid #00B3DB;
    position: relative;
}
.ant-carousel .slick-dots li.slick-active button{
    opacity: 0;
    width: 100%;
    height: 100%;
    background: none;
    border: none;
    margin: 0;
    position: absolute;
}
.ant-carousel .slick-dots li {
    width: 5px;
    height: 5px;
    transform: rotate(45deg);
    border: 1px solid #bbb;
    position: relative;
    margin: 0 0 0 13px;
}
.ant-carousel .slick-dots li:first-child {
    margin: 0;
}
.ant-carousel .slick-dots li button {
    opacity: 0;
    width: 100%;
    height: 100%;
    background: none;
    border: none;
    margin: 0;
    position: absolute;
}
a {
    display:none;
}
#banner_section #matter h1 {
    font-style: normal;
    font-weight: bold;
    font-size: 2.7vw;
    line-height: 3.5vw;
    color: #212E34;
}
#banner_section #matter h1 span {
    font-weight: 400;
}
#banner_section #matter h2 {
    width: 33.2vw;
    font-style: italic;
    font-weight: normal;
    font-size: 1.2vw;
    line-height: 2vw;
    color: #585858;
    margin: 0.4vw 0 0 0;
}
#banner_section #button {
    display: flex;
    margin: 2.1vw 0 0 0;
}
#banner_section #button button {
    width: 13.4vw;
    padding: 0.64vw 1.7vw;
    background: #FF4081;
    border-radius: 8px;
    font-weight: 600;
    font-size: 1.2vw;
    color: #FFFFFF;
    border: none;
    outline: none;
    cursor: pointer;
}
#banner_section #button button:nth-child(2) {
    padding: 0;
    font-style: normal;
    font-weight: normal;
    font-size: 1.2vw;
    display: flex;
    align-items: center;
    color: #585858;
    background: none;
    outline: none;
    border: none;
    margin: 0 0 0 2.42vw;
}
#banner_section #button button #icon {
    width: 1.7vw;
    height: 1.7vw;
    margin: 0 0.5vw 0 0;
}
#banner_image {
    margin: auto 5vw -0.6vw auto;
}
#banner_image img {
    width: 41.4vw;
}
@media (max-width:750px) {
    background: #F4FAFD;
    height: 167vw;
    display: flex;
    overflow: hidden;
    flex-direction: column;
    justify-content: center;
    align-items: center;
#banner_section {
    margin: 28vw 0 0 0;
    position: relative;
}
#banner_section #matter {
    width: 100vw;
    height: 39vw;
}
.ant-carousel .slick-dots-bottom {
    bottom: -20vw;
    right: 0;
    left: inherit;
    position: relative;
    width: fit-content;
    margin: auto;
}
.ant-carousel .slick-dots li.slick-active {
    width: 1vw;
    height: 1vw;
}
.ant-carousel .slick-dots li {
    width: 1vw;
    height: 1vw;
    margin: 0 0 0 13px;
}
#banner_section #matter h1 {
   font-size: 6.2vw;
   line-height: 8vw;
   text-align: center;
}
#banner_section #matter h2 {
    width: 82vw;
    font-size: 4vw;
    line-height: 6vw;
    text-align: center;
    margin: 2.9vw auto auto auto;
}
#banner_section #button {
   display: flex;
   margin: 0 auto auto auto;
   width: fit-content;
}
#banner_section #button button {
    width: 33vw;
    height: 10vw;
    border-radius: 1.3vw;
    font-size: 3.5vw;
}
#banner_section #button button:nth-child(2) {
    width: 31vw;
    height: 10vw;
    border-radius: 1.3vw;
    font-size: 3.5vw;
   margin: 0 0 0 4vw;
}
#banner_section #button button #icon {
    width: 4.1vw;
    height: 4.1vw;
    margin: 0 1.71428571428571vw 0 0;
 }
 #banner_image img {
    width: 71.9vw;
 }
 #banner_image {
    margin: auto 0 -3vw 0;
 }
}
`