import styled from "styled-components"
import * as palette from "../../../styles/variables"

export const AppSection = styled.div`
* {
  font-family: ${palette.CONTENT_FONT_FAMILY} !important;
}
 #qr_conatiner {
    width: 64.875vw;
    background: #ffffff;
    border-radius: 1vw;
    margin: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    position: relative;
    padding: 4vw 3.5vw;
  }
   #qr_conatiner_block1 {
    width: 32vw;
    display: flex;
    height: fit-content;
  }
   #ql_container_matter_container {
    height: fit-content;
    margin-top: auto;
  }
   #ql_container_matter h1 {
    font-style: normal;
    font-weight: bold;
    font-size: 2.5vw;
    line-height: 3.3125vw;
    color: #ff4081;
    margin: 0;
    position: relative;
    text-align: left;
  }
   #rate2 {
    width: 1vw;
    margin: 0;
    position: absolute;
    top: 0.5vw;
  }
   #ql_container_matter p {
    font-style: normal;
    font-weight: normal;
    font-size: 0.9375vw;
    line-height: 1.5vw;
    text-align: justify;
    color: rgba(0, 0, 0, 0.7);
    margin: 0;
    margin-top: 1.1875vw;
    width: 25.375vw;
    text-align: left;
  }
   #qr_container_input_block {
    margin-top: 3.75vw;
  }
   #qr_container_input_block h1 {
    font-style: normal;
    font-weight: normal;
    font-size: 1.25vw;
    line-height: 1.5vw;
    color: #000000;
    margin: 0;
    text-align: left;
  }
   #qr_container_input_block_container {
    display: grid;
    grid-template-columns: 16.6875vw 10vw;
    gap: 0.9375vw;
    grid-template-rows: 3vw;
    margin-top: 1.625vw;
  }
   #qr_container_input_block_container_container {
    border: 1px solid #999999;
    box-sizing: border-box;
    border-radius: 0.5vw;
    position: relative;
    overflow: hidden;
  }
   #qr_container_input_block_container_container input {
    width: 12.8125vw;
    height: 100%;
    position: absolute;
    right: 0;
    border: none;
    outline: none;
    background: transparent;
    font-style: normal;
    font-weight: 400;
    font-size: 1vw;
    color: rgba(33, 46, 52);
    padding-right: 0.625vw;
  }
   #qr_container_input_block_container_container p {
    margin: 0;
    font-style: normal;
    font-weight: normal;
    font-size: 1vw;
    line-height: 0;
    color: #000000;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 6%;
    text-align: left;
  }
   #qr_container_input_block button {
    left: 21.1875vw;
    top: 21.125vw;
    background: #ff4081;
    border-radius: 0.5vw;
    border: none;
    outline: none;
    font-style: normal;
    font-weight: 600;
    font-size: 1vw;
    color: #ffffff;
    cursor: pointer;
  }
   #qr_conatiner_block2 {
    text-align: center;
  }
   #qrs {
    display: flex;
    flex-direction: column;
    width: fit-content;
    margin: auto;
    height: 100%;
  }
   #qu_image_container img {
    margin: 0;
    width: 15vw;
  }
   #qr_image_button {
    display: flex;
    align-items: center;
    margin-top: auto;
  }
  #qr_image_button a {
    margin-left: 2vw;
  }
   #qr_image_button a button {
    width: 10.125vw;
    height: 3vw;
    background: #212e34;
    border-radius: 0.5vw;
    margin: 0;
    font-style: normal;
    font-weight: 600;
    font-size: 0.9vw;
    color: #ffffff;
    border: none;
    outline: none;
    cursor: pointer;
    display: flex;
    align-items: center;
  }
   #qr_image_button a:first-child {
    margin-left: 0;
  }
   #qr_image_button a button img {
    margin: 0 1vw 0 0.5vw;
    width: 1.5vw;
  }
  @media (max-width: 750px) {
    #qr_conatiner {
      width: 93vw;
  }
  #qr_conatiner_block1 {
    width: 53vw;
   }
   #ql_container_matter h1 {
    font-size: 4vw;
    line-height: 4.6vw;
   }
   #ql_container_matter p {
    font-size: 2vw;
    line-height: 3.2vw;
    text-align: justify;
    margin-top: 2vw;
    width: 47vw;
    text-align: justify;
    }
    #qr_container_input_block h1 {
      font-size: 2.5vw;
      line-height: inherit;
      color: #000000;
  }
  #qr_container_input_block_container {
    grid-template-columns: 26vw 15vw;
    gap: 1.5vw;
    grid-template-rows: 4vw;
    margin-top: 1.2vw;
  }
   #qr_container_input_block_container_container input {
    width: 21vw;
    font-size: 1.5vw;
  }
   #qr_container_input_block_container_container p {
     font-size: 1.5vw;
   }
   #qr_container_input_block button {
    font-size: 1.5vw;
}
   #qu_image_container img {
    width: 25vw;
   }
   #qr_image_button a button {
    width: 14vw;
    height: 4vw;
    border-radius: 0.8vw;
    font-size: 1.5vw;
  }
}
`


export const VideoSection = styled.div`
#player {
  width: 68vw;
  height: 40vw;
  margin: 0 16vw;
}
@media (max-width: 750px) {
  #player{
    width: 100vw;
    height: 54vw;
  }
}
`