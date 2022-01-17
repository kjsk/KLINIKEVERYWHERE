import styled from "styled-components";
import * as palette from "../../styles/variables";

export const DoctorContainer = styled.div`
* {
    font-family: ${palette.FONT_FAMILY} !important;
}
#doctors {
    background-color: white;
  }
  #doctors #doctor_container_main {
    padding-top: 6vw;
  }
  #doctors #nav_main_div {
    background: white;
    box-shadow: 0px 4px 10px rgba(10, 48, 61, 0.06);
    padding: 1vw 6vw 1vw 6vw;
  }
  #doctors #nav_main_div2 {
    background: white;
    padding: 1vw 6vw 1vw 6vw;
  }
  #doctors .footer {
    margin-top: 10vw;
  }
  #doctor_container {
    width: 100%;
    position: relative;
    height: 23.625vw;
    background-size: 100% 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  doctor_container #background {
    position: absolute;
    width: 100%; 
    height: 100%;
  }
  #doctor_img_container {
    width: fit-content;
    height: fit-content;
  }
  #doctor_img_container img {
    margin: 0;
  }
  #doctor_search {
    width: 43.0625vw;
    height: 3.5vw;
    background: white;
    position: absolute;
    border-radius: 3vw;
    display: flex;
    padding: 0 0.5vw 0 1vw;
    justify-content: space-between;
}
  #doctor_search input {
    width: 100%;
    height: 100%;
    left: 4%;
    border: none;
    outline: none;
    font-style: normal;
    font-weight: normal;
    font-size: 1vw;
    color: #000000;
    background: transparent;
  }
  #doctor_img_container {
    cursor: pointer;
    height: 100%;
    right: 0.5vw;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 2.9vw;
  }
  /*===============footer_card_container============*/
  #doctors_cards_container {
    width: calc(100% - 13.81%);
    margin: auto;
    padding: 3.5vw 0 0 0;
  }
  #doctors_footer_title {
    font-style: normal;
    font-weight: bold;
    font-size: 1.75vw;
    line-height: 5.625vw;
    color: black;
    opacity: 0.9;
  }
  #doc_footer {
    width: 100%;
    background: #e6f9fd;
    border: 2px solid #72c3e0;
    box-sizing: border-box;
    box-shadow: 0px 2px 12px rgba(15, 48, 65, 0.12);
    border-radius: 1vw;
    display: grid;
    grid-template-columns: auto auto;
    padding: 3vw 3.3125vw;
    gap: 7.5625vw;
  }
  #doc_footer_block1 {
    width: fit-content;
    height: fit-content;
  }
  #doc_footer_block2 {
    display: flex;
  }
  #doc_footer_block2 a {
    width: 12.8vw;
    cursor: pointer;
    margin: 0;
    margin-right: 2.4375vw;
  }
  #doc_footer_block2 img {
    width: 100%;
    margin: 0;
  }
  #doc_footer_block2 img:last-child {
    margin-right: 0;
  }
  #doc_footer_block1 p {
    font-style: normal;
    font-weight: 400;
    font-size: 1.25vw;
    line-height: 1.6875;
    color: #212e34;
    margin: 0;
  }
  /*============doc_all_cards==========*/
  #doc_all_cards {
    display: grid;
    grid-template-columns: auto auto;
    gap: 3vw;
    margin-top: 3.875vw;
  }
  #doc_card1 {
    display: flex;
    flex-direction: column;
    padding: 1.5625vw;
    background-color: white;
    box-shadow: 0px 2px 12px rgba(15, 48, 65, 0.12);
    border-radius: 1vw;
    transition: 0.8s ease;
  }
  #doc_card1:hover {
    box-shadow: 0px 0px 1px rgba(15, 48, 65, 0.12);
  }
  #doc_card1_block1 {
    display: grid;
    grid-template-columns: auto auto;
    gap: 1vw;
    display: flex;
    justify-content: left;
    align-items: center;
  }
  #doc_card1_block1_image_container {
    width: 8.125vw;
    height: 10vw;
  }
  #doc_card1_block1_image_container img {
    margin: 0;
    width: 100%;
    height: 100%;
    border-radius: 0.8vw;
    object-fit: cover;
  }
  #doc_card1_block1_matter_container #doc_card_title {
    font-style: normal;
    font-weight: 600;
    font-size: 1.25vw;
    line-height: 1.6875vw;
    color: #212e34;
    margin: 0 0 0.5vw 0;
  }
  #doc_card1_block1_matter_container p {
    font-style: normal;
    font-weight: normal;
    font-size: 0.9375vw;
    line-height: 2vw;
    color: #585858;
    margin: 0;
  }
  #doc_card1_block2 {
    display: flex;
    justify-content: space-between;
    margin-top: 2.3125vw;
  }
  #doc_card1_block2 div {
    width: 48%;
    height: fit-content;
  }
  #doc_card1_block2 button {
      cursor: pointer;
  }
  #doc_card1_block2 button:hover {
    width: 103%;
    transition: 0.5s ease-in-out;
  }
  #doc_btn1 {
    width: 100%;
    height: 3vw;
    box-sizing: border-box;
    border-radius: 0.5vw;
    font-style: normal;
    font-weight: normal;
    font-size: 1vw;
    color: #ff4081;
    outline: none;
    background: transparent;
    border: 1px solid #ff4081;
  }
  #doc_btn2 {
    width: 100%;
    height: 3vw;
    background: #ff4081;
    border-radius: 0.5vw;
    border: none;
    outline: none;
    font-style: normal;
    font-weight: 600;
    font-size: 1vw;
    color: #ffffff;
  }
  #block_icon_container {
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 0.5vw;
  }
  #block_icon_container_container {
    text-align: left;
    justify-content: left;
  }
  #cont_icon_img {
    margin: 0;
    width: 1.5vw;
  }
  #doc_card1_block1_matter_container p {
    margin: 0;
  }
  #block_icon_container_container2 {
    display: flex;
    justify-content: left;
    align-items: center;
  }
  #block_icon_container_container div {
    width: fit-content;
    height: fit-content;
  }
  @media (max-width: 1202px) {
    #navbarResponsive {
      height: 100%;
    }
  }
  @media (max-width: 750px) {
    #doc_card1_block1 {
      gap: 2vw;
    }
    #doctors #nav_main_div2 {
      padding: 1vw;
  }
  #doctors #nav_main_div {
    padding: 1vw;
  }
    #doctors {
      width: 100vw;
    }
    #doctors_cards_container {
      width: 100vw;
    }
    #doctor_img_container {
      width: 10.5vw;
      margin: 0 0 0 auto;
  }
    #doctor_container {
      width: 100%;
      height: fit-content;
    }
    #doctor_container #background {
      display: none;
    }
    #doctor_search {
      width: 90%;
      height: 12vw;
      background: #ffffff;
      border: 1px solid #088bff;
      box-sizing: border-box;
      border-radius: 7vw;
      position: relative;
      margin-top: 16vw;
    }
    #doctor_search input {
      position: absolute;
      height: 100%;
      left: 4%;
      width: 70%;
      border: none;
      outline: none;

      font-style: normal;
      font-weight: normal;
      font-size: 3vw;
      color: #000000;
      background: transparent;
    }
    #doctors_cards_container {
      width: 100%;
    }
    #doc_footer {
      display: none;
    }
    #doc_all_cards {
      display: grid;
      grid-template-columns: auto;
      gap: 8vw;
      margin-top: 3.875vw;
      padding: 0 4vw;
    }
    #doctors_footer_title {
      font-size: 5vw;
      margin-left: 5vw;
      padding: 2vw;
      margin-top: 8vw;
    }
    #doc_card1 {
      border-radius: 2vw;
      padding: 2.1vw;
    }
    #doc_card1_block1_image_container {
      width: 28vw;
      height: 25vw;
    }
    #doc_card1_block1_matter_container {
      width: 100%;
      height: 100%;
      margin: 0 1vw 0 0;
    }
    #doc_card1_block1_image_container img {
        border-radius: 2vw;
    }
    #doc_card1_block1_matter_container #doc_card_title {
      font-size: 4.2vw;
      line-height: unset;
    }
    #doc_card1_block1_matter_container p {
      line-height: unset;
      font-size: 2.8vw;
      margin-left: 1.5vw;
    }
    #cont_icon_img {
      width: 3.5vw;
    }
    #doc_card1_block2 {
      margin-top: 5vw;
    }
    #doc_card1_block2 button {
      height: 9vw;
      font-size: 3.5vw;
      border-radius: 1.5vw;
    }
  }
  
`