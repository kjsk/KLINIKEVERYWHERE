import React, { useState } from "react";
import { graphql, useStaticQuery } from "gatsby"
import { CardsContainer } from "./styles.js";
import { CloseOutlined } from '@ant-design/icons';
import App from "../Popup/app";

const Cards = () =>
{
    const [ open, setOpen ] = useState( false );

    const data = useStaticQuery( graphql`
    query {
      coreteam:  file(relativePath: {eq: "Home/Cards.md"}) {
        id
        childMarkdownRemark {
          frontmatter {
            title
            cards {
              title
              content
              cardid
              image {
                publicURL
              }
              minicards {
                title
                blockcontent
                logo {
                  publicURL
                }
              }
              highlights {
                title
                logo {
                  publicURL
                }
              }
            }
          }
        }
      }
    }
  `)

    return (
        <CardsContainer>
            <div id="products">
                <h1>{ data.coreteam.childMarkdownRemark.frontmatter.title }</h1>
                <div id="products_main">
                    {
                        data.coreteam.childMarkdownRemark.frontmatter.cards.map( ( cards, i ) =>
                            <div id="card" key={ i }>
                                <div className="card_main" id={ cards.cardid } >
                                    <div id="card_block1">
                                        <h1>{ cards.title }</h1>
                                        <p>{ cards.content }</p>
                                        <div id="mini_container">
                                            { cards.minicards.map( ( minicards, i ) =>
                                                <div id="mini_cards" key={ i }>
                                                    <img src={ minicards.logo.publicURL } alt="img" />
                                                    <h1>{ minicards.title }</h1>
                                                    <p>{ minicards.blockcontent }</p>
                                                </div>
                                            ) }
                                        </div>
                                        <button onClick={ () => setOpen( true ) } >Download App</button>
                                    </div>
                                    <div id="card_block2">
                                        <img src={ cards.image.publicURL } alt="img" />
                                    </div>
                                </div>
                                { cards.highlights ?
                                    <div id="highlights">
                                        <h1>Highlights</h1>
                                        <div id="highlights_container">
                                            { cards.highlights.map( ( highlights, i ) =>
                                                <div id="mini_cards" key={ i }>
                                                    <img src={ highlights.logo.publicURL } alt="img" />
                                                    <p>{ highlights.title }</p>
                                                </div>
                                            ) }
                                        </div>
                                    </div>
                                    :
                                    ""
                                }
                            </div>
                        )
                    }

                </div>
            </div>
            {
                open ?
                    <div id="vid" style={ { background: `black`, position: `fixed`, top: `0`, width: `100%`, height: `100vh`, display: `flex`, justifyContent: `center`, alignItems: `center`, zIndex: `50`, padding: `5vw 0` } }>
                        <CloseOutlined style={ { color: `white`, position: `absolute`, right: `51px`, top: `20px` } } onClick={ () => setOpen( false ) } />
                        <App />
                    </div>
                    :
                    ""
            }

        </CardsContainer>
    );
};
export default Cards;