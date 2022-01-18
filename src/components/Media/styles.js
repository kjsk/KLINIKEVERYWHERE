import styled from "styled-components";
import * as palette from "../../styles/variables";

export const MediaContainer = styled.div`
* {
    font-family: ${palette.FONT_FAMILY} !important;
}

.mediaPage {
    background-color: white;
  }
  .galleryOuter {
    display: flex;
    margin: 50px;
  }
  .imageGrid {
    flex: 10;
  }
  .imageMenu {
    flex: 2;
    margin-top: 40px;
  }
  .categoryHeading {
    font-weight: 600;
  }
  .galleryHeading {
    font-weight: 600;
    font-size: 30px;
  }
  .galleryImage {
    border-radius: 5px;
    cursor: pointer;
  }
  /* The Modal (background) */
  .modal {
    /* Hidden by default */
    position: fixed; /* Stay in place */
    z-index: 100; /* Sit on top */
    padding-top: 100px; /* Location of the box */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: rgb(0, 0, 0); /* Fallback color */
    background-color: rgba(0, 0, 0, 0.9); /* Black w/ opacity */
  }
  
  /* Modal Content (Image) */
  .modal-content {
    margin: auto;
    display: block;
    width: 80%;
    height: 70vh;
    max-width: 700px;
  }
  /* Add Animation - Zoom in the Modal */
  .modal-content {
    animation-name: zoom;
    animation-duration: 0.6s;
  }
  
  @keyframes zoom {
    from {
      transform: scale(0);
    }
    to {
      transform: scale(1);
    }
  }
  
  /* The Close Button */
  .close {
    position: absolute;
    top: 15px;
    right: 35px;
    color: #f1f1f1;
    font-size: 40px;
    font-weight: bold;
    transition: 0.3s;
  }
  
  .close:hover,
  .close:focus {
    color: #bbb;
    text-decoration: none;
    cursor: pointer;
  }
  
  /* 100% Image Width on Smaller Screens */
  @media only screen and (max-width: 700px) {
    .modal-content {
      width: 100%;
    }
  }  
`