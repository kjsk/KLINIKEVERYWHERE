import styled from "styled-components"
import * as palette from "../../../styles/variables"

export const BlogsContainer = styled.div`
.blog {
    padding: 10vw 15vw;
    background: #F4FAFD;
}
.blog #blog_h1 {
    text-align: center;
    font-family: ${palette.CONTENT_FONT_FAMILY} !important;
    font-style: normal;
    font-weight: bold;
    font-size: 2.5vw;
    color: black;
    line-height:4vw;
    margin: 0;
}
.blog_container {
    display: grid;
    grid-template-columns: auto;
    gap: 7.57142857142857vw;
    margin: 4.9375vw auto auto auto;
}
.blog_card {
    display: flex;
}
.blog_card_img {
    width: fit-content;
}
.blog_card_img img {
    width: 16vw;
    height: 11vw;
    margin: auto;
    border-radius: 1.14285714285714vw;
}
.blog_card_matter {
    display: flex;
    flex-direction: column;
    width: 45.7vw;
    height: fit-content;
    margin: auto 0 auto 2.5vw;
}
.blog_card_matter p {
    margin: 0;
}
#blog_card_title {
    font-family: ${palette.FONT_FAMILY} !important;
    font-style: normal;
    font-weight: bold;
    font-size: 1.7vw;
    letter-spacing: 0.03em;
    color: #111111;
    line-height: 2.14285714285714vw;
}
#blog_card_description {
    font-family: ${palette.FONT_FAMILY} !important;
    font-style: normal;
    font-weight: normal;
    font-size: 1.14vw;
    color: #444444;
    opacity: 0.6;
    line-height: 1.5vw;
    margin: 0.85vw 0;
}
#blog_card_date {
    font-family: ${palette.FONT_FAMILY} !important;
    font-style: normal;
    font-weight: normal;
    font-size: 1.14vw;
    color: #444444;
    opacity: 0.8;
    line-height: 1.5vw;
}
/*======mediaquaries==========*/
@media (max-width: 750px) {
    .blog {
        padding: 10vw 5vw;
    }
    .blog #blog_h1 {
        font-size: 5.8vw;
        line-height: inherit;
    }
    .blog_container {
       width: 100%;
       margin: 12vw 0 0 0;
    }
    .blog_card_img img {
        width: 20vw;
        height: 20vw;
    }
    .blog_card_matter {
        width:fit-content;
    }
    #blog_card_title {
        font-size: 3.1vw;
        line-height: 3.9vw;
    }
    #blog_card_description {
        display: none;
    }
    #blog_card_date {
        font-size: 2.9vw;
        line-height: 4.5vw;
    }
}

`