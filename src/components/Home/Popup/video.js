import React from "react";
import { VideoSection } from "./styles";
import video from "../../../data/assets/bannerpop.mp4";

const Video = () =>
{



    return (
        <VideoSection >
                <video autoPlay controls id="player">
                    <source src={ video } type="video/mp4" />
                    <track src="" kind="captions" srclang="en" label="english_captions"></track>
                </video>
        </VideoSection>
    );
};

export default Video;