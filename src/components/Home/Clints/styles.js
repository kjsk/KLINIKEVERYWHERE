import styled from "styled-components"
import * as palette from "../../../styles/variables"

export const ClintsContainer = styled.div`
* {
    font-family: ${palette.CONTENT_FONT_FAMILY} !important;
}
#patners h1 {
    font-style: normal;
    font-weight: bold;
    font-size: 2.5vw;
    line-height: 5.625vw;
    color: #000000;
    text-align: center;
    margin: 0;
  }
  #patners {
    padding: 7.8125vw 8.125vw;
    background: white;
  }
  #patners_container {
    width: calc(100% - 18.05555%);
    margin: auto;
    margin-top: 4.625vw;
  }
  #patner_container_main {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  #patners_container {
    display: grid;
    grid-template-columns: repeat(3, 11.25vw);
    gap: 4vw;
    grid-template-rows: 11.25vw 11.25vw;
    width: fit-content;
    height: fit-content;
  }
  #patners_image_card {
    background: #ffffff;
    box-shadow: 0px 0px 18.3631px rgba(79, 10, 39, 0.1);
    border-radius: 0.91815625vw;
    padding: 1vw 0.875vw;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.5s ease-in-out;
  }
  #patners_image_card:hover {
    box-shadow: 0px 0px 2vw rgba(79, 10, 39, 0.2);
  }
  #patners_image_card:nth-child(1) img {
    margin: 0;
    width: 135px;
    height: 51px;
  }
  #patners_image_card:nth-child(2) img {
    margin: 0;
    width: 10.3vw;
    height: 5.5vw;
  }
  #patners_image_card:nth-child(3) img {
    margin: 0;
    width: 10.1vw;
    height: 4.5vw;
  }
  #patners_image_card:nth-child(4) img {
    margin: 0;
    width: 6.9vw;
    height: 8.21vw;
  }
  #patners_image_card:nth-child(5) img {
    margin: 0;
    width: 144px;
    height: 144px;
  }
  #patners_image_card:nth-child(6) img {
    margin: 0;
    width: 10.2vw;
    height: 3.9vw;
  }
  @media (max-width: 750px) {
    #patners h1 {
      font-size: 5.8vw;
      line-height: inherit;
    }
    #patners {
      padding: 9.5vw 4vw;
      background: white;
    }
    #patners_container {
      width: calc(100% - 8%);
      margin: auto;
      margin-top: 4.625vw;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 4vw;
      grid-template-rows: 25vw 25vw;
      width: 100%;
    }
    #patners_container {
      margin-top: 10vw;
    }
    #patners_image_card {
      border-radius: 2.8vw;
    }
    #patners_image_card:nth-child(1) img {
      margin: 0;
      width: 17.2291666666667vw;
      height: 6.58958333333333vw;
    }
    #patners_image_card:nth-child(2) img {
      margin: 0;
      width: 18.5vw;
      height: 9.82291666666667vw;
    }
    #patners_image_card:nth-child(3) img {
      margin: 0;
      width: 18.12vw;
      height: 8.07vw;
    }
    #patners_image_card:nth-child(4) img {
      margin: 0;
      width: 12.3vw;
      height: 14.6vw;
    }
    #patners_image_card:nth-child(5) img {
      margin: 0;
      width: 18.3vw;
      height: 18.3vw;
    }
    #patners_image_card:nth-child(6) img {
      margin: 0;
      width: 20.62vw;
      height: 9.01vw;
    }
  }
  
`