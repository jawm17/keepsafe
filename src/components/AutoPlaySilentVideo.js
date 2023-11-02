import React, { useRef, useEffect } from 'react';

const AutoPlaySilentVideo = (props) => {
    const videoRef = useRef(null);

    useEffect(() => {
        // This will mute the video by default if not already set via props
        if (videoRef.current && props.muted !== undefined) {
            videoRef.current.defaultMuted = props.muted;
        }
    }, [props.muted]);

    return (
        <video
            className={props.className} // You can pass a className for custom styling
            ref={videoRef}
            loop={props.loop !== undefined ? props.loop : true}
            autoPlay={props.autoPlay !== undefined ? props.autoPlay : true}
            muted={props.muted !== undefined ? props.muted : true}
            playsInline={props.playsInline !== undefined ? props.playsInline : true}
            controls={props.controls !== undefined ? props.controls : true}
            data-video-id={props['data-video-id']}
            data-yes={props['data-yes']}
            data-no={props['data-no']}
            preload="auto" // This is optional, but it's good for loading the video in advance
        >
            <source src={props.video} type="video/mp4" />
            Your browser does not support the video tag.
        </video>
    );
};

export default AutoPlaySilentVideo;

