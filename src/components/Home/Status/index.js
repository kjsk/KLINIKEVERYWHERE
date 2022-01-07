import React from "react";
import { StatusContainer } from "./styles.js";
import { graphql, useStaticQuery } from "gatsby";
const Status = () =>
{
    const data = useStaticQuery( graphql`
    query {
       status: file(relativePath: {eq: "Home/status.md"}) {
          id
          childMarkdownRemark {
            frontmatter {
              status {
                id
                content
                image {
                  publicURL
                }
              }
            }
          }
        }
    }
  `)
    return (
        <StatusContainer>
            <div className="status">
                <div className="status_container">
                    { data.status.childMarkdownRemark.frontmatter.status.map( ( status, i ) =>
                        <div className="status_cards" key={ i }>
                            <div className="card_content">
                                <div className="card_content_img">
                                    <img src={ status.image.publicURL } alt="img1" className="card_svg" />
                                </div>
                                <div className="card_content_matter">
                                    <p className="card_matter">{ status.content }</p>
                                </div>
                            </div>
                        </div>
                    ) }
                </div>
            </div>
        </StatusContainer>
    );
};
export default Status;