import React, { useState } from "react";
import { MediaContainer } from "./styles";
// import { Grid } from '@mui/material';
import { graphql, useStaticQuery } from "gatsby";

const Media = () =>
{
  const [ category, setCategory ] = useState( "Press" )
  // let images = [ 1, 2, 3, 4, 5, 7, 8, 9, 10, 11, 12, 13 ]
  const [ preview, setPreview ] = useState( false )
  const data = useStaticQuery( graphql`
  query {
    media: file(relativePath: {eq: "media.md"}) {
        id
        childMarkdownRemark {
          frontmatter {
            media {
              id
              category
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
    <MediaContainer>
      <div className="mediaPage">
        <br />
        <div className="galleryOuter">
          <br />
          <div className="imageGrid">
            <div style={ { marginBottom: "10px", marginTop: "30px" } }>
              <p className="galleryHeading">{ category }</p>
            </div>
            <div sx={ { flexGrow: 1 } } container spacing={ 2 }>

              <div item xs={ 12 }>
                {/* {console.log(data.media.childMarkdownRemark.frontmatter.media)} */ }
                <div style={ { marginBottom: "10px" } } container spacing={ 4 }>
                  { data.media.childMarkdownRemark.frontmatter.media.map( media =>
                    <>
                      {
                        media.category === category ?
                          <div key={ media.id } item>
                            <img className="galleryImage" src={ media.image.publicURL } role="presentation" onClick={ () => { setPreview() } } height="130" width="200" alt="img" />
                          </div>
                          :
                          ""

                      } </> ) }
                </div>
              </div>
            </div>
          </div>
          <div id="myModal" style={ preview ? { display: "block" } : { display: "none" } } className="modal">

            <span role="presentation" onClick={ () => setPreview( false ) } className="close">&times;</span>

            <img src={ preview } alt="img" className="modal-content" id="img01" />

            <div id="caption"></div>
          </div>
          <div style={ { cursor: "pointer" } } className="imageMenu">
            <div><p style={ { fontSize: "18px" } } className="categoryHeading">Categories</p>
              <p role="presentation" onClick={ () => { setCategory( "Press" ) } }>Press</p>
              <p role="presentation" onClick={ () => { setCategory( "Activities" ) } }>Activities</p>
              <p role="presentation" onClick={ () => { setCategory( "Lunches" ) } }>Lunches</p>
              <p role="presentation" onClick={ () => { setCategory( "Insights" ) } }>Insights</p>
              <p role="presentation" onClick={ () => { setCategory( "Featured" ) } }>Featured</p>
              <p role="presentation" onClick={ () => { setCategory( "Workspace" ) } }>Workspace</p>
              <p role="presentation" onClick={ () => { setCategory( "Videos" ) } }>Videos</p>
            </div>
          </div>
        </div>
      </div>
    </MediaContainer>
  )
}
export default Media;