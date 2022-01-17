import React from "react";
import { AboutContainer } from "./styles.js";
import img from "../../../data/assets/map.svg";
import { graphql, useStaticQuery } from "gatsby";

const About = () =>
{
  const data = useStaticQuery( graphql`
  query {
    about: file(relativePath: {eq: "Home/About.md"}) {
        id
        childMarkdownRemark {
          frontmatter {
              content
          }
        }
      }   
     }
`)
  return (
    <AboutContainer>
      <div id="about">
        <div id="about_conatiner_matter">
          <h1>ABOUT <span style={ { color: `#1481BA` } }>US</span></h1>
          <p>{ data.about.childMarkdownRemark.frontmatter.content }</p>
        </div>
        <div id="about_conatiner_image">
          <img src={ img } alt="img" />
        </div>
      </div>
    </AboutContainer>
  )
}
export default About;