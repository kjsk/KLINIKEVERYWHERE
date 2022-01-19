import styled from "styled-components"
import * as palette from "../../../styles/variables"

export const CardsContainer = styled.div`
* {
    font-family: ${palette.CONTENT_FONT_FAMILY} !important;
}
#products {
    background: #FFFFFF;
    padding: 3.42857142857143vw 0 0 0;
}
#products h1 {
    font-family: Noto Sans;
    font-style: normal;
    font-weight: 800;
    font-size: 2.85714285714286vw;
    line-height: 6.4vw;
    color: #000000;
    text-align: center;
  }
#products_main #card .card_main {
    display: flex;
    padding: 7.14285714285714vw 5.71428571428571vw;
    justify-content: space-between;
}
#products_main #card:first-child .card_main{
    padding: 3vw 5.71428571428571vw 7.14285714285714vw 5.71428571428571vw;
}
#products_main #card:nth-child(even) .card_main {
    flex-direction: row-reverse;
    background: #F4FAFD;
}
#products_main #card #card_block1 {
    display:flex;
    flex-direction: column;
    justify-content: left;
    align-items: center;
    width: 50vw;
    height: fit-content;
    margin: auto 0 auto 0;
}
#products_main #card #card_block1 h1 {
    font-style: normal;
    font-weight: bold;
    font-size: 2.07142857142857vw;
    line-height: 3.14285714285714vw;
    color: #FF4081;
    margin: 0 auto 0 0;
    text-align: left;
}
#products_main #card #card_block1 p {
    font-style: normal;
    font-weight: 400;
    font-size: 1.07142857142857vw;
    line-height: 1.71428571428571vw;
    text-align: justify;
    color: #000000;
    margin: 0.8vw auto 2vw 0;
}
#products_main #card #card_block1 button {
    width: 13.4vw;
    padding: 0.64vw 1.7vw;
    background: #FF4081;
    border-radius: 0.571428571428571vw;
    font-weight: 600;
    font-size: 1.2vw;
    color: #FFFFFF;
    font-style: normal;
    font-weight: 600;
    color: #FFFFFF;
    margin: 2.14285714285714vw auto 0 0;
    border: none;
    outline: none;
    cursor: pointer;
}
#products_main #card #mini_container {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1.07142857142857vw;
    margin: 0 auto 0 0;
}
#products_main #card #mini_container #mini_cards {
    display: flex;
    height: 8.57142857142857vw;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 0.0714285714285714vw solid #5FD4FF;
    box-shadow: 0px 0px 0.714285714285714vw rgba(8, 40, 67, 0.15);
    border-radius: 0.857142857142857vw;
    padding: 1.07142857142857vw 0;
}
#products_main #card #mini_container #mini_cards img {
    width: 2.07142857142857vw;
    height: 2.07142857142857vw;
    margin: auto;
}
#products_main #card #mini_container #mini_cards h1 {
    font-style: normal;
    font-weight: 600;
    font-size: 0.9vw;
    line-height: 1.57142857142857vw;
    margin: 0.5vw auto 0.1vw auto;
    color: #000000;
    opacity: 0.85;
}
#products_main #card #mini_container #mini_cards p {
    font-style: normal;
    font-weight: normal;
    font-size: 0.85vw;
    line-height: 1.28571428571429vw;
    margin: auto;
    color: #000000;
    opacity: 0.85;
    width: 10vw;
    text-align: center;
}
#products_main #card #card_block2 {
    width: fit-content;
    height: fit-content;
    margin: auto;
}
#products_main #card #card_block2 img {
    width: 21.2142857142857vw;
}
#products_main #card:nth-child(2) #card_block2 img {
    width: 39.4285714285714vw;
}
#products_main #card:nth-child(3) #card_block2 img {
    width: 20.1428571428571vw;
}

#highlights {
    padding: 0 11vw 7.14285714285714vw 11vw;
}
#highlights #highlights_container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2vw;
    margin: 3.5vw 0 0 0;
}
#Klinik{
    scroll-margin-top: 159px;
}
#SpotCare{
    scroll-margin-top: 76px;
}
#highlights #highlights_container #mini_cards {
    display: flex;
    height: 10.4285714285714vw;
    flex-direction: column;
    padding: 1.07142857142857vw;
    background: #E2F2FF;
    border-radius: 0.82685vw;
}
#highlights #highlights_container #mini_cards:nth-child(2) {
    background: #FFEDEE;
}
#highlights #highlights_container #mini_cards:nth-child(3) {
    background: #D9F8E7;
}
#highlights #highlights_container #mini_cards:nth-child(4) {
    background: #D9F5F8;
}
#highlights #highlights_container #mini_cards:nth-child(5) {
    background: #FFEDDD;
}
#highlights #highlights_container #mini_cards:nth-child(6) {
    background: #DDE3FD;
}
#highlights #highlights_container #mini_cards:nth-child(7) {
    background: #D9F8E7;
}
#highlights #highlights_container #mini_cards:nth-child(8) {
    background: #D9F5F8;
}
#highlights #highlights_container #mini_cards:nth-child(9) {
    background: #FFEDEE;
}
#highlights #highlights_container #mini_cards img {
    width: 3.85714285714286vw;
    height: 3.85714285714286vw;
}
#highlights #highlights_container #mini_cards p {
    font-style: normal;
    font-weight: normal;
    font-size: 1.2vw;
    line-height: 1.71428571428571vw;
    color: #222222;
    margin: 0.642857142857143vw 0 0 0;
}
@media (max-width: 750px) {
    #products {
        padding: 17.4vw 0 0 0;
    }
     #products h1 {
        font-size: 5.3vw;
    }
    #products_main #card .card_main:nth-child(1) {
        padding: 16vw 0;
        flex-direction: column-reverse;
    }
     #products_main #card .card_main:nth-child(1) {
        padding: 10vw 0 16vw 0;
        scroll-margin-top: 48px;
    }
    #products_main #card:nth-child(even) .card_main {
        flex-direction: column-reverse;
        padding: 16vw 0;
    }
    #products_main #card #card_block2 img {
        width: 38.3vw;
    }
    #products_main #card:nth-child(2) #card_block2 img {
        width: 66vw;
    }
    #products_main #card:nth-child(3) #card_block2 img {
        width: 46vw;
    }
    #products_main #card #card_block1 {
        margin: 7vw auto auto auto;
        width: fit-content;
    }
     #products_main #card #card_block1 h1 {
        font-size: 5vw;
        line-height: 6.5vw;
        margin: auto;
        width: 72vw;
        text-align: center;
    }
    #products_main #card #card_block1 p {
        width: 88vw;
        font-size: 3.5vw;
        line-height: 6vw;
        margin: 2.08vw 0 6.25vw 0;
        text-align: center;
    }
     #products_main #card #mini_container {
        width: 88vw;
        display: grid;
        grid-template-columns: repeat(2,1fr);
        gap: 3.125vw;
        margin: 0;
    }
    #products_main #card #mini_container #mini_cards {
        height: 30vw;
        border: 0.2vw solid #5FD4FF;
        box-shadow: 0px 0px 2vw rgba(8,40,67,0.15);
        border-radius: 2.5vw;
        padding: 0 0 1.5vw 0;
    }
     #products_main #card #mini_container #mini_cards img {
        width: 6.66vw;
        height: 6.66vw;
    }
    #products_main #card #mini_container #mini_cards h1 {
        font-size: 3.3vw;
        line-height: 4.5vw;
        width: inherit;
    }
     #products_main #card #mini_container #mini_cards p {
        font-size: 3vw;
        line-height: 4.3vw;
        margin: auto;
        color: #000000;
        opacity: 0.85;
        width: 35vw;
    }
     #products_main #card #card_block1 button {
        width: 33vw;
        height: 10vw;
        border-radius: 1.3vw;
        font-size: 3.5vw;
        margin: 10vw auto 0 auto;
    }

    #highlights {
        padding: 0 5vw 13vw 5vw;
    }
    #highlights #highlights_container {
        grid-template-columns: repeat(2,1fr);
        gap: 4.7vw 3.25vw;
        margin: 9vw 0 0 0;
    }
    #highlights #highlights_container #mini_cards {
        height: 28vw;
        padding: 3vw 1vw 2vw 3vw;
        background: rgb(226, 242, 255);
        border-radius: 1.16vw;
    }
    #highlights #highlights_container #mini_cards img {
        width: 7vw;
        height: 7vw;
    }
    #highlights #highlights_container #mini_cards p {
        font-size: 3.1vw;
        line-height: 4.5vw;
        margin: 1vw 0 0 0;
    }
}
`