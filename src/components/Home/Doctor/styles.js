import styled from "styled-components"
import * as palette from "../../../styles/variables"

export const DoctorContainer = styled.div`
* {
    font-family: ${palette.CONTENT_FONT_FAMILY} !important;
}
.finddoctors {
    background: white;
    height: 100vh;
}
.finddoctors_container {
    max-width: calc(100% - 25%);
    margin: auto;
    display: flex;
    justify-content: space-between;
    height: 100%;
}
.finddoctors_container_matter {
    padding-top: 2vw;
    display: flex;
    align-items: center;
    justify-content: center;
}
#finddoctors_container_matter_container{
    width: fit-content;
    height: fit-content;
}
.finddoctors_container_matter h1 {
    font-style: normal;
    font-weight: bold;
    font-size: 2.5vw;
    color: #000000;
}
.finddoctors_container_matter p {
    font-style: normal;
    font-weight: normal;
    font-size: 0.9375vw;
    line-height: 1.5vw;
    color: #000000;
    opacity: 0.7;
    margin: 0.5vw 0 1vw 0;
    width: 22.7142857142857vw;
}
#search_bar {
    width: 27vw;
    height: 3vw;
    background-color: #F4FAFD;
    border: 1px solid #088bff;
    box-sizing: border-box;
    border-radius: 3vw;
    position: relative;
    padding-left: 2.5vw;
    overflow: hidden;
}
#search_bar input {
    position: absolute;
    height: 100%;
    outline: none;
    border: none;
    width: 85%;
    margin: 0;
    font-style: normal;
    font-weight: normal;
    font-size: 0.9375vw;
    line-height: 1.5vw;
    color: #000000;
    background: transparent;
}
#search_bar .searchicon {
    position: absolute;
    left: 1vw;
    top: 50%;
    transform: translateY(-50%);
    margin: 0;
    width: 1.1vw;
    cursor: pointer;
}
#finddocbannerimg{
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
#finddocbannerimg div{
    width: 32.4vw;
}
#finddoctors_img {
    width: 100%;
    height: 100%;
}
@media (max-width: 750px){
    .finddoctors{
        padding: 10vw 0;
        height: fit-content;
    }
    .finddoctors_container {
        max-width: calc(100% - 8%);
        margin: auto;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100%;
    }
    .finddoctors_container_matter h1 {
        font-size: 5.83333333333333vw;
        text-align: left;
    }
    .finddoctors_container_matter p {
        font-size: 3.3vw;
        width: inherit;
        line-height: inherit;
        margin: 1vw 0 3vw 0;
    }
    #search_bar{
        width:80vw;
        height:10vw;
        background-color:#F4FAFD;
    }
    #search_bar input {
        font-size: 3vw;
        background-color: transparent;
    }
    #search_bar{
        padding-left: 9vw;
        border-radius: 8vw;
    }
    #search_bar .searchicon {
        width: 4vw;
        margin-left: 2vw;
    }
    #finddocbannerimg{
        height: fit-content;
        margin-top: 20vw;
    }
    #finddocbannerimg div{
        width: 60vw;
    }
}
`