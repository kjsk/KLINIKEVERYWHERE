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
    object-fit: cover;
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
.blog_card:hover #blog_card_title {
  text-decoration: underline;
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
        width: 24vw;
        height: 18vw;
    }
    .blog_card_matter {
        width: fit-content;
        margin: auto 0 auto 4vw;
    }
    #blog_card_title {
        font-size: 3.5vw;
        line-height: 5vw;
        font-weight: 600;
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

export const BlogContainer = styled.div`
  max-width: 700px;
  margin: 48px auto;
  padding-top:80px;
  @media (max-width: 768px) {
    padding: 24px;
  }
  .blogTitle {
    font-size: 36px;
    line-height: 48px;
    margin-bottom: 20px;
    font-weight: bold;
    color: black;
    @media (max-width: 768px) {
      font-size: 22px;
      line-height: 29px;
    }
  }
`;

export const AuthorInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 32px;
  .author_image {
    margin-right: 20px;
    width: 40px;
    height: 40px;
    overflow: hidden;
    object-fit: cover;
    @media (max-width: 600px){
      width: 80px;
      height: 80px;
    }
  }
  .author_info {
    display: flex;
    width: 90%;
    align-items: center;
    @media (max-width: 600px){
    width: fit-content;
    flex-direction: column;
    }
    h4 {
      line-height: 22px;
      color: black;
      margin: 0 10px 0 0;
      font-size: 15px;
      cursor: pointer;
      @media (max-width: 600px){
          line-height: auto;
          margin: 0 1.2vw 0 0;
          font-size: 19px;
          margin: 0 auto 0 0 ;
      }
    }
    span {
      font-size: 14px;
      color: #78757a;
      line-height: 18px;
      margin: 0 20px 0 0;
      @media (max-width: 600px) {
        font-size: 10px;
        color: #78757a;
        line-height: auto;
        margin: 0 1vw 0 0;
    }
    }
    #socio_lnks {
      display: flex;
      margin: 0 0 0 auto;
      @media (max-width: 600px) {
        margin: 8px auto 0 0;
      }
    }
    #link {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 22px;
      height: 22px;
      border-radius: 50px;
      padding: 4px;
      margin: 0 0 0 15px;
      background: #000000bf;
      @media (max-width: 600px) {
        width: 5vw;
        height: 5vw;
        border-radius: 50vw;
        padding: 1vw;
        margin: 0 0 0 3vw;
        #link:nth-child(1) {
          margin: 0;
        }
    }
    }
    #link:nth-child(1) {
      @media (max-width: 600px) {
          margin: 0;
    }
    }
    #link .icon{
      width: 100%;
      height: 100%;
    }
  }
  #pc_mob {
    display: none;
  }
  @media (max-width: 600px) {
    #pc_mob {
      display: flex;
    }
    #pc_author {
      display: none;
    }
  }
`;

export const BlogContent = styled.div`
  h1 {
    font-size: 28px;
    line-height: 34px;
    margin-bottom: 10px;
    @media (max-width: 768px) {
      font-size: 24px;
    }
  }
  h3 {
    margin-bottom: 24px;
  }
  .gatsby-resp-image-wrapper {
    margin-top: 40px;
    margin-bottom: 40px;
  }
  p {
    margin-bottom: 24px;
    font-size: 16px;
  }
  ul {
    list-style: inside;
    margin-bottom: 24px;
  }
  li {
    font-weight: normal;
    font-size: 16px;
    color: ${palette.PRIMARY_TXT_COLOR};
    margin: 15px 0px;
  }
  blockquote {
    padding-left: 23px;
    box-shadow: rgb(41, 41, 41) 3px 0px 0px 0px inset;
  }
  a {
    font-weight: normal;
    color: ${palette.PRIMARY_TXT_COLOR};
    text-decoration: underline;
  }
`;
