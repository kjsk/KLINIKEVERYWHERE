import styled from "styled-components";
import * as palette from "../../styles/variables";

export const RegisterContainer = styled.div`
* {
    font-family: ${palette.FONT_FAMILY} !important;
}

#login_main #nav_main_div {
    background: #ffffff;
    box-shadow: 0px 4px 10px rgba(10, 48, 61, 0.06);
}
#login_main #nav_main_div2 {
    background: #ffffff;
}
#login {
    width: 100%;
    height: fit-content;
    background: white;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 0 300px 0;
    position: relative;
    top: 13vw;
}
#login_main {
    background-color: white;
}
/*=====register=========*/
#register {
    width: 100%;
    height: fit-content;
}
#register_container {
    width: 57vw;
    height: 56.5vw;
    background: #ffffff;
    box-sizing: border-box;
    box-shadow: 0px 0px 12px rgba(15, 36, 44, 0.15);
    border-radius: 1vw;
    padding: 3.125vw 5.0625vw;
    margin: auto;
    border: 0.5px solid #00b3db;
}
#register_container_head {
    display: flex;
    justify-content: space-between;
}
#register_container_head_block1 {
    width: fit-content;
    height: fit-content;
}
#register_container_head_block1 h1 {
    font-family: ${palette.CONTENT_FONT_FAMILY};
    font-style: normal;
    font-weight: bold;
    font-size: 2.25vw;
    margin: 0;
    color: #ff4081;
}
#register_container_head_block2 {
    width: fit-content;
    height: fit-content;
    margin-top: auto;
}
#register_container_head_block2 p {
    margin: 0;
    font-style: normal;
    font-weight: normal;
    font-size: 1vw;
    line-height: 1.375vw;
    text-align: right;
    color: #333333;
}
#register_container_head_block2 span {
    font-style: normal;
    font-weight: 600;
    font-size: 1vw;
    line-height: 0;
    text-decoration: underline;
    color: #4285f4;
    cursor: pointer;
}
#register_inputs {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-row: auto;
    gap: 1.75vw 4.375vw;
    margin-top: 3.125vw;
}
#register_input_block1 {
    width: 100%;
    height: fit-content;
}
#register_input_block_input1 {
    background: white;
    border-radius: 0.1875vw;
    width: 100%;
    height: 2.875vw;
    position: relative;
    border: 0.125vw solid rgba(170, 170, 170, 0.3);
    transition: 0.5s ease-in-out;
    margin: 0;
    position: relative;
    border-radius: 0.1875vw;
}
#register_input_block_input1:hover {
    border: 0.125vw solid rgba(255, 64, 129, 1);
}
#register_input_block_input1 h1 {
    font-style: normal;
    font-weight: normal;
    font-size: 0.75vw;
    margin: 0;
    letter-spacing: 0.025vw;
    color: rgba(0, 0, 0, 0.6);
    position: absolute;
    background-color: white;
    transform: translateY(-0.625vw);
    left: 0.625vw;
    z-index: 1;
}
#register_input_block_input1 input {
    height: 100%;
    width: 100%;
    font-style: normal;
    font-weight: normal;
    font-size: 1vw;
    line-height: 1.3125vw;
    letter-spacing: 0.0125vw;
    color: rgba(0, 0, 0, 0.87);
    padding: 0 1.875vw 0 0.625vw;
    border: none;
    outline: none;
    background: transparent;
    margin: 0;
    position: absolute;
}
#register_checkbox {
    display: flex;
    align-items: center;
    flex-direction: row;
    margin-top: 3vw;
}
#register_checkbox input {
    cursor: pointer;
    top: 0.125vw;
    width: 1.125vw;
    height: 1.125vw;
    margin: 0;
    margin-top: auto;
    border: 1px solid gray;
}
#register_checkbox p {
    font-style: normal;
    font-weight: normal;
    font-size: 1vw;
    line-height: 1.3125vw;
    margin: 0;
    color: #222222;
    margin-left: 0.6875vw;
}
#register_checkbox p span {
    text-decoration: underline;
    color: #4285f4;
    cursor: pointer;
    margin: 0 0 0 0.3vw;
}
#register_button {
    width: 100%;
    height: fit-content;
    margin-top: 3vw;
}
#register_button button {
    width: 15vw;
    height: 2.875vw;
    background: #ff4081;
    border-radius: 0.5vw;
    border: none;
    outline: none;
    font-style: normal;
    font-weight: 600;
    font-size: 1.125vw;
    color: #ffffff;
    cursor: pointer;
}
#register_button button:last-child {
    width: fit-content;
    background: transparent;
    color: blue;
    margin-left: 1vw;
}
#register_inputs .register_input_block1 #gender_options {
    display: none;
}
#register_inputs .gender #gender_options {
    position: absolute;
    width: 100%;
    top: 3px;
    height: 80%;
    margin: 0;
    background: white;
    font-style: normal;
    font-weight: normal;
    font-size: 1vw;
    line-height: 1.3125vw;
    letter-spacing: 0.0125vw;
    color: rgba(0, 0, 0, 0.5);
    padding: 0 1.875vw 0 0.625vw;
    border: none;
    outline: none;
    border: 1px solid transparent;
    display: block;
}
#register_inputs #option {
    font-style: normal;
    font-weight: normal;
    font-size: 1vw;
    line-height: 1.3125vw;
    letter-spacing: 0.0125vw;
    color: rgba(0, 0, 0, 0.8);
}
#docselectorbox {
    height: fit-content;
    width: 100%;
    height: 2.875vw;
    position: relative;
    margin: 0;
    padding: 0;
}
#login .custom-select {
    font-size: 1vw;
    padding: 0 0 0 0.6vw;
    width: 100%;
    position: absolute;
    height: 100%;
    border: none;
    outline: none;
    border: 0.125vw solid rgba(170, 170, 170, 0.3);
    margin: 0;
    background-size: 0.5vw;
    border-radius: 0.2vw;
    color: black;
    opacity: 0.6;
}
#login .custom-select:hover {
    border: 0.125vw solid rgba(255, 64, 129, 1);
}
#login #docselectorbox h1 {
    font-style: normal;
    font-weight: normal;
    font-size: 0.75vw;
    margin: 0;
    letter-spacing: 0.025vw;
    color: rgba(0, 0, 0, 0.6);
    position: absolute;
    background-color: white;
    transform: translateY(-0.625vw);
    z-index: 1;
    left: 0.625vw;
}
#message_container {
    border: 1px solid black;
    text-align: center;
    background: yellowgreen;
}
/*===========terms and conditions====================*/
#login_main #tnc_popup_container_main {
    width: 100%;
    background: #ffffff;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 20;
    position: fixed;
    top: 0;
}
#login_main #tnc_popup_container {
    width: fit-content;
    height: fit-content;
    width: 1038px;
    padding: 2vw 2.5vw;
    height: 501px;
    border-radius: 16px;
    box-shadow: 0px 0px 12px rgba(15, 36, 44, 0.15);
    position: relative;
}
#login_main #termsandCo {
    width: 100%;
    height: 100%;
    resize: none;
    border: none;
    color: black;
    font-style: normal;
    font-weight: normal;
}
#closeimg {
    position: absolute;
    right: 0;
}
@media (max-width: 650px) {
    #login {
        margin: 0 0 25vw 0;
        padding: 0 0 10vw 0;
    }
    #register_container {
        width: 90%;
        height: fit-content;
        background: #ffffff;
        box-sizing: border-box;
        box-shadow: 0px 0px 0 white;
        border-radius: 1vw;
        margin: 11vw auto auto auto;
        border: 0.5px solid transparent;
        padding: 0;
    }
    #register_container_head_block1 h1 {
        font-size: 5vw;
    }
    #register_container_head_block2 p {
        font-size: 3vw;
        line-height: 5vw;
    }
    #register_container_head_block2 span {
        font-size: 3vw;
        margin: 0 0 0 0.5vw;
    }
    #register_inputs {
        display: grid;
        grid-template-columns: 1fr;
        gap: 6vw;
        margin-top: 9vw;
    }
    #register_input_block_input1 {
        height: 12vw;
    }
    #docselectorbox {
        height: 12vw;
    }
    #register_input_block_input1 input {
        font-size: 3.5vw;
        padding-left: 3vw;
        font-weight: 600;
    }
    #register_input_block_input1 h1 {
        font-size: 3.5vw;
        left: 2vw;
        top: -1.5vw;
    }
    #login #docselectorbox h1 {
        font-size: 3.5vw;
        left: 2vw;
        top: -1.5vw;
    }
    #login .custom-select {
        font-size: 3vw;
        padding-left: 3vw;
        background-size: 2.5vw;
    }
    #register_checkbox {
        margin-top: 5vw;
    }
    #register_checkbox p {
        font-size: 3vw;
        margin-top: 0;
        margin-left: 2vw;
    }
    #register_checkbox input {
        width: 5vw;
        height: 5vw;
    }
    #register_button {
        margin-top: 5vw;
    }
    #register_button button {
        width: 35vw;
        height: 8vw;
        font-size: 2.5vw;
        border-radius: 1.3vw;
    }
    #register_button button:last-child {
        width: 10vw;
        background: transparent;
        color: blue;
        margin-left: 1vw;
    }
    #login_main .footer {
        margin-top: 0;
    }
}


`


export const TermsContainer = styled.div`
#container {
    max-width: 500px;
    height: 400px;
    overflow: scroll;
    overflow-x: hidden
}
#container h1 {
    text-align: center;
    margin: 0 0 30px 0;
    font-size: 30px;
    font-style: normal;
    font-weight: bold;
    color: #ff4081;
}
`