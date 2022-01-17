import styled from "styled-components"
import * as palette from "../../../styles/variables"

export const StatusContainer = styled.div`
* {
    font-family: ${palette.FONT_FAMILY} !important;
}
.status {
    background: linear-gradient(135deg, #00bde1 0%, #0093c6 100%);
    padding: 11.25vw 0;
}
.status_container {
    display: grid;
    width: calc(100% - 23.1%);
    margin: auto;
    grid-template-rows: repeat(1, 16.125vw);
    grid-template-columns: repeat(4, auto);
    gap: 4.75vw;
}
.status_cards {
    background-color: white;
    border-radius: 1vw;
    width: 100%;
}
.card_content {
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: 8.5625vw 1fr;
    height: fit-content;
    padding: 4.0625vw 0 1.875vw 0;
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    justify-content: center;
}
.card_content_img {
    width: fit-content;
    height: fit-content;
}
.card_content_matter {
    width: fit-content;
    height: fit-content;
    margin-top: 1.125vw;
}
.card_svg {
    margin: 0;
    width: 4.5vw;
}
.card_matter {
    font-style: normal;
    font-weight: 400;
    font-size: 1.125vw;
    color: #000000;
    text-align: center;
    width: 10vw;
    margin: auto;
    line-height: 1.8vw;
}

@media (max-width: 750px) {
    .status {
        padding: 20vw 0;
        display: flex;
    }
    .card_svg {
        margin: 0;
        width: 8vw;
    }
    .status_cards {
        padding: 4vw 20px;
    }
    .status_container {
        width: calc(100% - 15%);
        grid-template-columns: repeat(1, auto);
        grid-template-rows: repeat(4, 20vw);
        gap: 4vw;
    }
    .card_content {
        flex-direction: row;
        justify-content: flex-start;
        padding: 0;
        height: 100%;
    }
    .card_content_img .card_svg {
        width: 12vw;
    }
    .card_matter {
        font-size: 3.6vw;
        line-height: 5vw;
        margin: 0;
        margin-left: 4vw;
        max-width: 100%;
        width: fit-content;
        text-align: left;
    }
    .card_content_matter {
        padding: 0;
        width: 100%;
    }
}
`