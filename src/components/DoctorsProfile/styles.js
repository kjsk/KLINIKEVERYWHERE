import styled from "styled-components";
import * as palette from "../../styles/variables";

export const ProfileContainer = styled.div`
* {
    font-family: ${palette.FONT_FAMILY} !important;
}

  #doctorProfile {
    background: white;
  }
  
  #doctorProfile #nav_main_div2 {
    background: white;
    box-shadow: 0px 4px 10px rgba(10, 48, 61, 0.06);
    top: 0;
  }
  
  #doctorProfile #nav_main_div {
    background: white;
    box-shadow: 0px 4px 10px rgba(10, 48, 61, 0.06);
  }
  
  #doctorProfile #doctorprofile_container_main {
    position: relative;
    top: 5vw;
  }
  
  @media (max-width: 1202px) {
    #doctorProfile .nav-co {
      padding: 3vw 1vw 3vw 1vw;
    }
  }
  
`

