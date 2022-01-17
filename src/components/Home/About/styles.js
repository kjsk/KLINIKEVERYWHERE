import styled from "styled-components"
import * as palette from "../../../styles/variables"

export const AboutContainer = styled.div`
* {
    font-family: ${palette.CONTENT_FONT_FAMILY} !important;
}
#about {
    background: #F4FAFD;
    display: flex;
    justify-content: space-between;
    padding: 8vw 7.57142857142857vw 8.07142857142857vw 7.57142857142857vw;
}
#about #about_conatiner_matter {
    display: flex;
    flex-direction: column;
}
#about #about_conatiner_matter h1 {
    position: relative;
    font-style: normal;
    font-weight: bold;
    font-size: 2.28571428571429vw;
    line-height: 6.42857142857143vw;
    color: #EB2C7D;
}
#about #about_conatiner_matter p {
    font-style: normal;
    font-weight: normal;
    font-size: 1.14285714285714vw;
    line-height: 2.14285714285714vw;
    text-align: justify;
    color: #000000;
    opacity: 0.8;
    width: 44vw;
    margin: 4.28571428571429vw 0 0 0;
}
#about #about_conatiner_matter h1:before {
    content: "";
    position: absolute;
    width: 5.92857142857143vw;
    height: 0.285714285714286vw;
    background: #1481BA;
    bottom: 1vw;
}
#about #about_conatiner_image {
    width: fit-content;
    height: fit-content;
}
#about #about_conatiner_image img {
    width: 30.1428571428571vw;
}
@media (max-width: 750px) {
     #about {
        flex-direction: column;
        position: relative;
        padding: 17.4736842105263vw 5.26315789473684vw 14.9473684210526vw 5.26315789473684vw;
    }
    #about #about_conatiner_matter h1 {
        font-size: 5.05263157894737vw;
        line-height: 18.9473684210526vw;
    }
    #about #about_conatiner_matter h1:before {
        width: 15.1578947368421vw;
        height: 0.842105263157895vw;
        bottom: 4vw;
    }
    #about #about_conatiner_matter p {
        font-size: 3.36842105263158vw;
        line-height: 5.2vw;
        width: 100%;
        margin: 96vw 0 0 0;
    }
    #about #about_conatiner_image {
        position: absolute;
        margin: 34vw 11vw 0 11vw;
    }
    #about #about_conatiner_image img {
        width: 64.6315789473684vw;
    }
}
`