import React, { useState } from "react";
import arrow from "../../../data/assets/Arrow - Right.svg";
import { graphql, useStaticQuery } from "gatsby"
import close from "../../../data/assets/close.svg";
import doc1 from "../../../data/assets/Mohan.png";
import doc2 from "../../../data/assets/Nithya.png";
import doc3 from "../../../data/assets/Niraj.png";
import doc4 from "../../../data/assets/Sunder.png";
import doc5 from "../../../data/assets/Ganesh.png";
import { TeamContainer, GovernerContainer } from "./styles.js";


function Team ()
{

  const [ toggleState, setToggleState ] = useState( 0 );

  const toggleTab = ( index ) =>
  {
    setToggleState( index );
  };
  const [ show, setShow ] = useState( true )
  const data = useStaticQuery( graphql`
      query {
        coreteam: file(relativePath: {eq: "Home/Team.md"}) {
            id
            childMarkdownRemark {
              frontmatter {
                title1
                title2
                coreteam{
                  name
                  designation
                  qualification1
                  qualification2
                  description
                  description2
                  list1
                  list2
                  list3
                  button
                  id
                  image {
                    childImageSharp {
                      fluid {
                        src
                      }
                    }
                  }
                }
              }
            }
          }   
         }
    `)
  return (
    <>
      <TeamContainer>
        <div id="coreteam_main_container">
          <div className="coreteam">
            <div className="coreteam_container">
              <h1>{ data.coreteam.childMarkdownRemark.frontmatter.title1 } <span style={ { color: `#1481BA` } }>{ data.coreteam.childMarkdownRemark.frontmatter.title2 }</span></h1>
              <div id="coreteam_cards">
                { data.coreteam.childMarkdownRemark.frontmatter.coreteam.map( coreteam =>
                  <div id="coreteam_card1" key={ coreteam.id }>
                    <div id="coreteam_card_svg">
                      <img src={ coreteam.image.childImageSharp.fluid.src } alt="img1" id="coreteamimg1" />
                    </div>
                    <div id="coreteam_card_matter">
                      <div id="coreteam_card_matter_container">
                        <p id="coreteam_h1">{ coreteam.name }</p>
                        <p id="coreteam_h2">{ coreteam.designation }</p>
                        <p id="coreteam_h3">{ coreteam.qualification1 }</p>
                        <p id="coreteam_h4">{ coreteam.qualification2 }</p>
                        <div id="tabbtn" className={ toggleState === ( coreteam.id ) ? "tabs active-tabs" : "tabs" }
                          onClick={ () => toggleTab( coreteam.id ) } role="presentation"><button id="coreteam_button">{ coreteam.button }<img src={ arrow } alt="img1" id="cbutton_img" /></button></div>
                      </div>
                    </div>
                  </div>
                ) }
              </div>
            </div>
          </div>
          { data.coreteam.childMarkdownRemark.frontmatter.coreteam.map( coreteam =>
            <div id="coreteam_info_main_container" className={ toggleState === ( coreteam.id ) ? "content  active-content" : "content" } key={ coreteam.id }>
              {
                show ?
                  <div id="coreteam_info">
                    <div id="tag" onClick={ () => toggleTab( setShow ) } role="presentation"><img src={ close } alt="close" id="close" /></div>
                    <div id="coreteam_info_container">
                      <div id="coreteam_info_card">
                        <div id="core_team_info_image">
                          <img src={ coreteam.image.childImageSharp.fluid.src } alt="doc" />
                        </div>
                        <div id="core_team_about_doc">
                          <h1 id="doc_name">{ coreteam.name }</h1>
                          <p id="doc_designation">{ coreteam.designation }</p>
                          <p id="doc_qualification">{ coreteam.qualification1 }</p>
                          <p id="doc_qualification2">{ coreteam.qualification2 }</p>
                        </div>
                      </div>
                      <div id="core_team_info_matter">
                        <div id="core_team_info_matter_border_container">
                          <div id="core_team_info_border1"></div>
                          <div id="core_team_info_border2"></div>
                        </div>
                        <div id="core_team_info_matter_container">
                          <p>{ coreteam.description }</p>
                          <p>{ coreteam.description2 }</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  : null
              }
            </div>
          ) }
        </div>
      </TeamContainer>
      <GovernerContainer>
        <div id="coreteam_main_container">
          <div className="coreteam">
            <div className="coreteam_container">
              <h1>BOARD <span style={ { color: `#1481BA` } }>OF GOVERNORS</span></h1>
              <div id="coreteam_cards">
                <div id="coreteam_card1">
                  <div id="coreteam_card_svg">
                    <img src={ doc1 } alt="img1" id="coreteamimg1" />
                  </div>
                  <div id="coreteam_card_matter">
                      <p id="coreteam_h1">Dr Mohan Kumar</p>
                      <p id="coreteam_h2">Former Ambassador of India, France & Monaco</p>
                      <p id="coreteam_h3">Chairman, Research and Information system for developing countries Author</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="coreteam_main_container">
          <div className="coreteam">
            <div className="coreteam_container">
              <h1>MEDICAL <span style={ { color: `#1481BA` } }>ADVISORY BOARD</span></h1>
              <div id="coreteam_cards">
                <div id="coreteam_card1">
                  <div id="coreteam_card_svg">
                    <img src={ doc2 } alt="img1" id="coreteamimg1" />
                  </div>
                  <div id="coreteam_card_matter">
                      <p id="coreteam_h1">Dr Nithya Ramachandran</p>
                      <p id="coreteam_h2">MBBS, MS (O&G), DNB, MRCOG (UK) </p>
                      <p id="coreteam_h3">Dip. Gynaecological Endoscopic Surgery (Germany)
                        Certificate Course in Gestational Diabetes Mellitus
                        Founder, ICARE Multi-Speciality Clinic, Chennai
                        Visiting Consultant, Obstetrics & Gynaecology
                        Apollo Women's Hospital, Chennai</p>
                    </div>
                  </div>
                <div id="coreteam_card1">
                  <div id="coreteam_card_svg">
                    <img src={ doc3 } alt="img1" id="coreteamimg1" />
                  </div>
                  <div id="coreteam_card_matter">
                      <p id="coreteam_h1">Dr Niraj Kumar Joshi</p>
                      <p id="coreteam_h2">MBBS, MD(Psy), DNB(Ortho-Rhino-Laryngology) F.A.G.E</p>
                      <p id="coreteam_h3">Consultant Physician, NHS, UK
Specialized in General (Internal) Medicine, Hepatology,
Inflammatory Bowel Diseases (IBD), Irritable Bowel Syndrome (IBS), Pancreaticobiliary Medicine (Bile Ducts & Pancreas)</p>
                    </div>
                  </div>
                <div id="coreteam_card1">
                  <div id="coreteam_card_svg">
                    <img src={ doc4 } alt="img1" id="coreteamimg1" />
                  </div>
                  <div id="coreteam_card_matter">
                      <p id="coreteam_h1">Dr. Lawrence Sunder Raj</p>
                      <p id="coreteam_h2">MD (General Medicine), MRCP</p>
                      <p id="coreteam_h3">Awarded membership at IASSA, IVA, AOI, ISO, IAOHNS, IMA, and American Academy of Otorhinolaryngology (AAA-HNS). Pursuing his Ph.D. in ENT.</p>
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
        <div id="coreteam_main_container">
          <div className="coreteam">
            <div className="coreteam_container">
              <h1>TECHNOLOGY <span style={ { color: `#1481BA` } }>ADVISORY BOARD</span></h1>
              <div id="coreteam_cards">
                <div id="coreteam_card1">
                  <div id="coreteam_card_svg">
                    <img src={ doc5 } alt="img1" id="coreteamimg1" />
                  </div>
                  <div id="coreteam_card_matter">
                      <p id="coreteam_h1">Ganesh Natarajan</p>
                      <p id="coreteam_h2">Former Managing Director, Accenture </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </GovernerContainer>
    </>
  );
};
export default Team;
