import styled from "styled-components"
import * as palette from "../../../styles/variables"

export const TeamContainer = styled.div`
* {
    font-family: ${palette.FONT_FAMILY} !important;
}
.coreteam_container {
  padding: 10vw 8.5vw 0 8.5vw;
  background-color: white;
}
#coreteam_main_container .content {
  display: none;
}
#coreteam_main_container .active-content {
  display: flex;
}
.coreteam_container h1 {
  font-style: normal;
  font-weight: bold;
  font-size: 2.8vw;
  color: #eb2c7d;
  border: none;
  width: fit-content;
  margin: 0;
}
.coreteam_container h1::after {
  content: "";
  display: block;
  width: 7vw;
  height: 0.4vw;
  background: #1481ba;
  position: relative;
  left: 0;
  top: 0.8vw;
}
#coreteam_cards {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5.0625vw 2.5vw;
  margin-top: 5.9375vw;
}
#coreteam_card1 {
  display: flex;
  flex-direction: row;
}
#coreteam_card_svg {
  width: 9.875vw;
  border-radius: 1vw;
  height: fit-content;
}
#coreteamimg1 {
  width: 100%;
  margin: 0;
}
#coreteam_card_matter {
  width: 26.8vw;
height: fit-content;
margin: auto 0 auto 1.9375vw;
}
#coreteam_h1 {
  font-style: normal;
  font-weight: 600;
  font-size: 1.25vw;
  line-height: 2vw;
  color: black;
  margin: 0;
}
#coreteam_h2 {
  font-style: normal;
  font-weight: normal;
  font-size: 1.125vw;
  line-height: 2vw;
  color: #111111;
  margin: 0;
}
#coreteam_h3 {
  font-style: normal;
  font-weight: normal;
  font-size: 0.875vw;
  line-height: 1.5vw;
  color: #555555;
  margin: 0;
}
#coreteam_h4 {
  font-style: normal;
  font-weight: normal;
  font-size: 0.875vw;
  line-height: 1.5vw;
  color: #555555;
  margin: 0;
}
#coreteam_button {
  width: 8.1875vw;
  height: 2.5vw;
  background: rgba(235, 44, 125, 0.1);
  border-radius: 0.5vw;
  border: none;
  font-style: normal;
  font-weight: 600;
  font-size: 0.75vw;
  color: #eb2c7d;
  position: relative;
  margin: 0;
  padding-right: 2.6vw;
  margin-top: 1.1875vw;
  transition: 0.5s ease;
  cursor: pointer;
}
#coreteam_button:hover {
  width: 8.5vw;
}
#cbutton_img {
  position: absolute;
  margin: 0;
  right: 1vw;
  width: 1.25vw;
}
/*============coreteam_cards==================*/
#coreteam_info_main_container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 1);
  position: fixed;
  top: 0;
  padding: 5vw 0;
  z-index: 20;
}
#close {
  width: 3vw;
  margin: 0;
  position: absolute;
  right: 2.5vw;
  top: 2.5vw;
  cursor: pointer;
}
#coreteam_info {
  background: #ffffff;
  border-radius: 1vw;
  margin: 5vw auto;
  padding: 2.75vw 5.125vw;
  width: fit-content;
  height: fit-content;
  position: relative;
}
#coreteam_info_container {
  width: 64.0625vw;
  height: fit-content;
}
#coreteam_info_card {
  display: flex;
  flex-direction: row;
}
#core_team_info_image {
  width: fit-content;
  height: fit-content;
}
#core_team_info_image img {
  width: 9.875vw;
  margin: 0;
}
#core_team_about_doc {
  margin: auto 0 auto 1.9375vw;
}
#core_team_about_doc #doc_name {
  font-style: normal;
  font-weight: 600;
  font-size: 1.375vw;
  line-height: 2vw;
  color: #111111;
  margin: 0;
}
#doc_designation {
  font-style: normal;
  font-weight: normal;
  font-size: 1.125vw;
  line-height: 2vw;
  color: #111111;
  margin: 0;
}
#doc_qualification {
  font-style: normal;
  font-weight: normal;
  font-size: 1vw;
  line-height: 1vw;
  color: #555555;
  margin: 0;
}
#doc_qualification2 {
  font-style: normal;
  font-weight: normal;
  font-size: 1vw;
  line-height: 1vw;
  color: #555555;
  margin: 0;
  margin: 0.5vw 0 0 0;
}
#core_team_info_matter {
  margin-top: 5.6875vw;
}
#core_team_info_matter_container p {
  font-style: normal;
  font-weight: normal;
  font-size: 0.9375vw;
  line-height: 1.5625vw;
  color: #212e34;
  opacity: 0.9;
  margin-top: 0.6875vw;
  text-align: justify;
}
#core_team_info_matter_border_container {
  width: 7.5vw;
  height: 0.5vw;
  display: flex;
  flex-direction: row;
}
#core_team_info_border1 {
  width: 100%;
  height: 100%;
  background: #00b3db;
}
#core_team_info_border2 {
  width: 100%;
  height: 100%;
  background: #ff4081;
}
@media (max-width: 750px) {
  .coreteam_container {
    padding: 10vw 5vw 12vw 5vw;
    background-color: white;
  }
  .coreteam_container h1 {
    font-size: 6vw;
    margin: 0 0 12vw 0;
  }
  .coreteam_container h1::after {
    width: 14vw;
    height: 1vw;
  }
  #coreteam_cards {
    display: grid;
    grid-template-columns: 1fr;
    gap: 20vw;
    margin-top: 5.9375vw;
  }
  #coreteam_card1 {
    display: flex;
    flex-direction: column;
    width: fit-content;
    margin: auto;
  }
  #close {
    width: 7vw;
  }
  #coreteam_card_svg {
    margin: auto;
    width: 30vw;
  }
  #coreteam_card_matter {
    margin: 4vw 0 0 0;
    text-align: center;
    width: 100%;
  }
  #coreteam_h1 {
    font-size: 4vw;
  }
  #coreteam_h2 {
    font-size: 4vw;
    margin-top: 3vw;
  }
  #coreteam_h3 {
    font-size: 3vw;
    line-height: 3.2vw;
    margin-top: 2.5vw;
  }
  #coreteam_h4 {
    font-size: 3vw;
    line-height: 3.2vw;
    margin-top: 1vw;
  }
  #coreteam_button {
    width: 29vw;
    height: 10vw;
    border-radius: 2vw;
    font-size: 3vw;
    margin-top: 5vw;
    padding: 0 7vw 0 0;
    font-weight: 600;
}
  #cbutton_img {
    position: absolute;
    margin: 0;
    right: 3.3vw;
    width: 4.1vw;
    top: 29%;
}
#coreteam_info {
  border-radius: 2vw;
  margin: 3vw auto;
  padding: 2.5vw 3vw;
}
#coreteam_info_container {
  width: 90vw;
  height: fit-content;
  margin-top: 2vw;
}
#core_team_info_matter_container p {
  font-size: 3.6vw;
  line-height: unset;
}
#core_team_info_matter_border_container {
  width: 25vw;
  height: 1.5vw;
}
#core_team_info_image img {
  width: 23vw;
  height: 25vw;
}
#core_team_about_doc #doc_name {
  font-size: 3.9vw;
  line-height: unset;
  margin: 0;
}
#doc_designation {
  font-size: 3.5vw;
  line-height: unset;
}
#doc_qualification {
  font-size: 2.5vw;
  line-height: unset;
}
#doc_qualification2 {
  font-size: 2.5vw;
  line-height: unset;
}
}
`

export const GovernerContainer = styled.div`
padding: 0 0 10vw 0;
* {
  font-family: ${palette.FONT_FAMILY} !important;
}
.coreteam_container {
padding: 10vw 8.5vw 0 8.5vw;
background-color: white;
}
.coreteam_container h1 {
font-style: normal;
font-weight: bold;
font-size: 2.8vw;
color: #eb2c7d;
border: none;
width: fit-content;
margin: 0;
}
.coreteam_container h1::after {
content: "";
display: block;
width: 7vw;
height: 0.4vw;
background: #1481ba;
position: relative;
left: 0;
top: 0.8vw;
}
#coreteam_cards {
display: grid;
grid-template-columns: 1fr 1fr;
gap: 5.0625vw 2.5vw;
margin-top: 5.9375vw;
}
#coreteam_card1 {
display: flex;
flex-direction: row;
}
#coreteam_card_svg {
width: 9.875vw;
border-radius: 1vw;
height: fit-content;
margin: auto 0 auto 0;
}
#coreteamimg1 {
width: 100%;
margin: 0;
}
#coreteam_card_matter {
width: 26.8vw;
height: fit-content;
margin: auto 0 auto 1.9375vw;
}
#coreteam_h1 {
  font-style: normal;
  font-weight: 600;
  font-size: 1.57142857142857vw;
  line-height: 1.85714285714286vw;
  color: #111111;
}
#coreteam_h2 {
font-style: normal;
font-weight: normal;
font-size: 1.125vw;
line-height: 2vw;
color: #111111;
margin: 0;
}
#coreteam_h3 {
font-style: normal;
font-weight: normal;
font-size: 0.875vw;
line-height: 1.5vw;
color: #555555;
margin: 0;
}
#coreteam_h4 {
font-style: normal;
font-weight: normal;
font-size: 0.875vw;
line-height: 1.5vw;
color: #555555;
margin: 0;
}
#coreteam_button {
width: 8.1875vw;
height: 2.5vw;
background: rgba(235, 44, 125, 0.1);
border-radius: 0.5vw;
border: none;
font-style: normal;
font-weight: 600;
font-size: 0.75vw;
color: #eb2c7d;
position: relative;
margin: 0;
padding-right: 2.6vw;
margin-top: 1.1875vw;
transition: 0.5s ease;
}
#coreteam_button:hover {
width: 8.5vw;
}
#cbutton_img {
position: absolute;
margin: 0;
right: 1vw;
width: 1.25vw;
}
@media (max-width: 750px) {
.coreteam_container {
  padding: 10vw 5vw 12vw 5vw;
  background-color: white;
}
.coreteam_container h1 {
  font-size: 6vw;
  margin: 0 0 12vw 0;
}
.coreteam_container h1::after {
  width: 14vw;
  height: 1vw;
}
#coreteam_cards {
  display: grid;
  grid-template-columns: 1fr;
  gap: 20vw;
  margin-top: 5.9375vw;
}
#coreteam_card1 {
  display: flex;
  flex-direction: column;
  width: fit-content;
  margin: auto;
}
#close {
  width: 7vw;
}
#coreteam_card_svg {
  margin: auto;
  width: 30vw;
}
#coreteam_card_matter {
  margin: 4vw 0 0 0;
  text-align: center;
  width: 100%;
}
#coreteam_h1 {
  font-size: 4vw;
}
#coreteam_h2 {
  font-size: 4vw;
  margin-top: 3vw;
  line-height: 5vw;
}
#coreteam_h3 {
  font-size: 3.2vw;
  line-height: 4.9vw;
  margin-top: 2.5vw;
}
#coreteam_h4 {
  font-size: 3vw;
  line-height: 3.2vw;
  margin-top: 1vw;
}
#coreteam_button{
  width: 25vw;
  height: 8vw;
  border-radius: 2vw;
  font-size: 2.5vw;
  margin-top: 5vw;
}
#cbutton_img {
  position: absolute;
  margin: 0;
  right: 1vw;
  width: 3vw;
  top:2.5vw;
}
#coreteam_info {
border-radius: 2vw;
margin: 3vw auto;
padding: 2.5vw 3vw;
}
#coreteam_info_container {
width: 90vw;
height: fit-content;
margin-top: 2vw;
}
#core_team_info_matter_container p {
font-size: 3.6vw;
line-height: unset;
}
#core_team_info_matter_border_container {
width: 25vw;
height: 1.5vw;
}
#core_team_info_image img {
width: 23vw;
height: 25vw;
}
#core_team_about_doc #doc_name {
font-size: 3.9vw;
line-height: unset;
margin: 0;
}
#doc_designation {
font-size: 3.5vw;
line-height: unset;
}
#doc_qualification {
font-size: 2.5vw;
line-height: unset;
}
#doc_qualification2 {
font-size: 2.5vw;
line-height: unset;
}
}
`