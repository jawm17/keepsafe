import React, { useState, useContext, useEffect } from "react";
import { useVideoContext } from '../context/VideoContext';
import { useHistory } from "react-router-dom";
import "./styles/viewPostStyle.css";

export default function ViewPost(props) {
    const history = useHistory();
    const { isMuted, setIsMuted } = useVideoContext();

    useEffect(() => {
        console.log(props)
    }, []);

    return (
        <div id="fullPostViewer">
            <div id="closePostBtn" onClick={() => props.closePost()}>
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.25 6.75L6.75 17.25"></path>
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6.75 6.75L17.25 17.25"></path>
                </svg>
            </div>
            <div className="muteBtnFullVideo" onClick={() => setIsMuted(!isMuted)}>
                {!isMuted ?
                    <svg xmlns="http://www.w3.org/2000/svg" className="soundIcon" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
                    </svg>
                    :
                    <svg xmlns="http://www.w3.org/2000/svg" className="soundIcon" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
                        <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 9.75L19.5 12m0 0l2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6l4.72-4.72a.75.75 0 011.28.531V19.94a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.506-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.395C2.806 8.757 3.63 8.25 4.51 8.25H6.75z" />
                    </svg>

                }
            </div>
            <div className="cardUserInfo" onClick={() => props.closePost()}>
                <img className="cardProfileImg" src={props.creator.profileImg}></img>
                <div className="cardUserName">
                    {props.creator.name}
                </div>
            </div>
            {/* <svg className="fullVidLikeBtn" width="32" height="32" fill="none" viewBox="0 0 24 24">
                <path fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11.995 7.23319C10.5455 5.60999 8.12832 5.17335 6.31215 6.65972C4.49599 8.14609 4.2403 10.6312 5.66654 12.3892L11.995 18.25L18.3235 12.3892C19.7498 10.6312 19.5253 8.13046 17.6779 6.65972C15.8305 5.18899 13.4446 5.60999 11.995 7.23319Z" clip-rule="evenodd"></path>
            </svg> */}
            <div className="vidRowFade">
            </div>
            <video
                id="fullPostVideo"
                autoPlay
                loop
                webkit-playsinline="true"
                playsInline
                muted={isMuted}
                onError={() => props.closePost()}
            >
                <source src={props.postData.mediaSources[0].src} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
}