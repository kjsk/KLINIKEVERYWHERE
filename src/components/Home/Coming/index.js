import React from "react";
import { ComingContainer } from "./styles.js";
import { graphql, useStaticQuery } from "gatsby";

const Coming = () =>
{
  const data = useStaticQuery( graphql`
  query {
     commingsoon: file(relativePath: {eq: "Home/Coming.md"}) {
        id
        childMarkdownRemark {
          frontmatter {
            commingsoon {
              title
              content
              contant2
              logo {
                publicURL
              }
            }
          }
        }
      }
  }
`)
  return (
    <ComingContainer>
      <div className="commingsoon">
        <h1>COMING SOON...</h1>
        <div className="commingsoon_container">
          { data.commingsoon.childMarkdownRemark.frontmatter.commingsoon.map( ( commingsoon, i ) =>
            <div className="commingsoon_cards" key={ i }>
              <div className="commingsoon_cards_img_container">
                <img src={ commingsoon.logo.publicURL } alt="img1" id="cs_img" />
              </div>
              <div className="commingsoon_cards_content">
                <div className="commingsoon_cards_content_matter">
                  <h2>{ commingsoon.title }</h2>
                  <p>{ commingsoon.content }</p>
                  <h3>{ commingsoon.contant2 }</h3>
                </div>
              </div>
            </div> ) }
        </div>
      </div>
    </ComingContainer>
  );
};
export default Coming;