import styled from "styled-components"
import * as palette from "../../../styles/variables"

export const PatnerContainer = styled.div`
* {
    font-family: ${palette.CONTENT_FONT_FAMILY} !important;
  }
.patner {
    background: #F4FAFD;
    padding: 12vw 0;
}
.patner_container {
    display: grid;
    grid-template-columns: auto auto;
    grid-template-rows: auto;
    max-width: calc(100% - 18%);
    margin: auto;
}
.conten1_title h1 {
    font-style: normal;
    font-weight: bold;
    font-size: 1.75vw;
    text-align: center;
    color: #000000;
}
.patner_container_content1 .conten1_img {
    width: fit-content;
    margin: auto;
    margin-top: 4.8125vw;
}
#overlapimg {
    width: auto;
    max-width: 27.6875vw;
}

.patner_container_conten2 .conten1_img {
    display: flex;
    flex-direction: column;
    width: fit-content;
    margin: auto;
    justify-content: center;
    align-items: center;
    margin-top: 4vw;
}
.patner_container_conten2 .conten1_img #img{
    margin: 0;
    max-width: 13.0625vw;
    width: auto;
}
.patner_container_conten2 .conten1_img #img:nth-child(2){
    max-width: 10.5vw;
    margin: 0;
    margin-top: 2vw;
}
.patner_container_conten2 .conten1_img #img:last-child{
    margin: 0;
    max-width: 11vw;
    width: auto;
    margin-top: 2.3vw;
}
@media (max-width: 650px){
    .patner_container {
        display: grid;
        grid-template-columns: auto;
        grid-template-rows: auto auto;
        max-width: calc(100% - 18%);
        margin: auto;
    }
    .conten1_title h1 {
        font-size: 5.3vw;
    }
    #overlapimg {
        max-width: 79vw;
        margin-top: 10vw;
    }
    .patner_container_conten2{
        margin-top: 20vw;
    }
    .patner_container_conten2 .conten1_img {
        margin-top: 9vw;
    }
    .patner_container_conten2 .conten1_img #img{
        max-width: 50vw;
    }
    .patner_container_conten2 .conten1_img #img:nth-child(2){
        max-width: 40vw;
        margin: 0;
        margin-top: 10vw;
    }
    .patner_container_conten2 .conten1_img #img:last-child{
        margin: 0;
        max-width: 40vw;
        width: auto;
        margin-top: 15vw;
    }
}

`