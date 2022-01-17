import styled from "styled-components"
import * as palette from "../../../styles/variables"

export const ContactContainer = styled.div`
* {
    font-family: ${palette.CONTENT_FONT_FAMILY} !important;
}
.contact {
    padding: 151px 0;
}
.contact h1 {
    font-style: normal;
    font-weight: bold;
    font-size: 40px;
    text-align: center;
    color: #000000;
}
.contact_contrainer {
    max-width: calc(100% - 15.2%);
    margin: auto;
    display: flex;
    margin-top: 73px;
}
.contact_img_block {
    width: 35%;
}
.contact_img_block img {
    width: 100%;
    height: 100%;
    margin: 0;
}
.contact_info_block {
    width: 65%;
    background: rgba(255, 255, 255, 1);
    padding: 52px 43px;
    display: flex;
    flex-direction: column;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.06);
}
.contact_info_top {
    display: grid;
    grid-template-columns: auto auto;
    gap: 64px;
}
.contact_name {
    display: flex;
    flex-direction: column;
}
.contact_info_block span {
    font-family: ${palette.FONT_FAMILY} !important;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    color: #1a3d34;
    opacity: 0.8;
}
.contact_info_block input {
    color: rgba(0, 0, 0, 0.8);
    border: none;
    border-bottom: 1px solid rgba(0, 0, 0, 1);
    padding-left: 10px;
    font-size: 16px;
    font-family: ${palette.FONT_FAMILY} !important;
    outline: none;
}
.contact_name input {
    height: 48px;
    font-style: normal;
    font-weight: normal;
    color: rgba(0, 0, 0, 0.8);
    border: none;
    border-bottom: 1px solid rgba(0, 0, 0, 1);
    padding-left: 10px;
}
.contact_mail {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 4vw;
}
.contact_mail input {
    width: 100%;
    padding-left: 10px;
    height: 48px;
}
.contact_message {
    display: flex;
    flex-direction: column;
    margin-top: 4vw;
}
.contact_message textarea {
    width: 100%;
    border: none;
    border-bottom: 1px solid rgba(0, 0, 0, 1);
    outline: none;
    padding: 3px 10px 15px 10px;
    resize: none;
    font-size: 16px;
    font-family: ${palette.FONT_FAMILY} !important;
    outline: none;
}
.button {
    text-align: right;
    margin-top: 4vw;
}
.contact_info_block .button button {
    font-family: ${palette.FONT_FAMILY} !important;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    color: #ffffff;
    width: 236px;
    height: 45px;
    background: #ff4081;
    border-radius: 8px;
    outline: none;
    border: none;
    margin: auto;
    cursor: pointer;
}
@media (max-width: 1000px) {
    .contact_contrainer {
        max-width: calc(100% - 8%);
        margin-top: 7.3vw;
    }
    .contact {
        padding: 10vw 0;
    }
    .contact h1 {
        font-size: 4vw;
    }
    .contact_img_block {
        display: none;
    }
    .contact_info_top {
        gap: 6vw;
    }
    .contact_info_block {
        width: 100%;
    }
    .contact_info_block {
        padding: 5vw 4vw;
        row-gap: 0;
    }
    .contact_info_block input {
        font-size: 2vw;
    }
    .contact_message textarea {
        font-size: 2vw;
    }
    .contact_info_block .button button {
        font-size: 2vw;
        width: 30vw;
        height: 6vw;
        border-radius: 1vw;
    }
    .contact_info_block span {
        font-size: 1.5vw;
    }
    .contact_name input {
        height: 5vw;
        padding-left: 1vw;
        padding-bottom: 0.5vw;
    }
    .contact_mail {
        margin-top: 6vw;
    }
    .contact_mail input {
        padding-left: 1vw;
        height: 8vw;
    }
    .contact_message textarea {
        width: 100%;
        border: none;
        border-bottom: 1px solid rgba(0, 0, 0, 1);
        outline: none;
        padding: 3px 1vw 1.5vw 1vw;
    }
    .contact_message {
        margin-top: 6vw;
    }
    .button {
        margin-top: 6vw;
    }
}
@media (max-width: 750px) {
    .contact {
        padding: 20vw 0;
        background: white;
    }
    .button {
        text-align: center;
    }
    .contact_info_top {
        grid-template-columns: auto;
    }
    .contact h1 {
        font-size: 6vw;
    }
    .contact_info_block span {
        font-size: 3vw;
    }
    .contact_name input {
        padding-left: 1vw;
        padding-bottom: 0.5vw;
        height: 8vw;
        font-size: 3.5vw;
    }
    .contact_info_block input {
        font-size: 3.5vw;
    }
    .contact_message textarea {
        font-size: 3.5vw;
    }
    .contact_info_block .button button {
        font-size: 2.8vw;
        width: 50vw;
        height: 8vw;
        border-radius: 1vw;
    }
    #patners {
        padding: 20vw 4vw;
    }
    .button {
        margin-top: 13vw;
    }
}

`