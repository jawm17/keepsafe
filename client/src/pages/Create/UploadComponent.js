import React, { useEffect, useState, useContext } from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import axios from "axios";
import { app } from '../../base';

export default function UploadComponent(props) {
    const [videoFile, setVideoFile] = useState("");
    const [videoUrl, setVideoUrl] = useState("");
    const [uploadingVideo, setUploadingVideo] = useState(false);
    const [uploadMessageVid, setUploadMessageVid] = useState("drop a file or click here");
    const [percentUploaded, setPercentUploaded] = useState(0);

    useEffect(() => {
        props.setVid(videoUrl);
    }, [videoUrl]);

    useEffect(() => {
        if (videoFile) {
            generateThumbnail(videoFile);
        }
    }, [videoFile]);

    async function generateThumbnail(file) {
        try {
            const cover = await getVideoCover(file);
            const contentType = 'image/jpeg'; // You might need to adjust this based on the actual format
            const metadata = { contentType };

            let storageRef = app.storage().ref();
            const randomNumber = Math.floor(Math.random() * 1000) + 1;
            const fileRef = storageRef.child(`${file.name}thumbnail${randomNumber}"`);
            const uploadTask = fileRef.put(cover, metadata);
            

            uploadTask.on('state_changed', function (snapshot) {
                // Get the progress percentage
                var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress + '% done');
            }, function (error) {
                console.log('Upload failed: ', error);
            }, function () {
                // Upload completed successfully
                fileRef.getDownloadURL().then(function (url) {
                    console.log(url)
                    props.setThumb(url);
                });
            });
        } catch (ex) {
            console.log("ERROR: ", ex);
        }
    }

    function dragOverHandler(e) {
        // Prevent default behavior (Prevent file from being opened)
        e.preventDefault();
    }

    // on click select video file handler
    function videoSelectHandler(e) {
        console.log("here")
        if (e.target.files[0]) {
            let file = e.target.files[0];
            setVideoFile(file);
            // check file extension
            let ext = file.name.slice(file.name.length - 3, file.name.length).toUpperCase();
            if (ext === "MOV" || ext === "MP4" || ext === "AVI") {
                // upload to firebase
                firebaseUpload(file, "video");
                // display animation
                setUploadingVideo(true);
            } else {
                vidFileError();
            }
        }
    }

    // on drop video file handler 
    function videoDropHandler(e) {
        // prevent file opening in browser
        e.preventDefault();
        if (e.dataTransfer.items) {
            let file = e.dataTransfer.items[0].getAsFile();
            setVideoFile(file);
            // check file extension
            let ext = file.name.slice(file.name.length - 3, file.name.length).toUpperCase();
            if (ext === "MOV" || ext === "MP4" || ext === "AVI") {
                // upload to firebase
                firebaseUpload(file, "video");
                // display animation
                setUploadingVideo(true);
            } else {
                vidFileError();
            }
        }
    }

    function firebaseUpload(file, type) {
  
            let storageRef = app.storage().ref();
            const fileRef = storageRef.child(file.name);
            const uploadTask = fileRef.put(file);

            uploadTask.on('state_changed', function (snapshot) {
                // Get the progress percentage
                var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress + '% done');
                setPercentUploaded(progress);
            }, function (error) {
                console.log('Upload failed: ', error);
            }, function () {
                // Upload completed successfully
                fileRef.getDownloadURL().then(function (url) {
                    if (type === "video") {
                        setVideoUrl(url);
                        setUploadingVideo(false);
                    }
                });
            });

    }

    function getVideoCover(src, seekTo = 0.0) {
        console.log("getting video cover for file: ", src);
        return new Promise((resolve, reject) => {
            // load the file to a video player
            const videoPlayer = document.createElement('video');
            videoPlayer.setAttribute('src', URL.createObjectURL(src));
            videoPlayer.load();
            videoPlayer.addEventListener('error', (ex) => {
                reject("error when loading video file", ex);
            });
            // load metadata of the video to get video duration and dimensions
            videoPlayer.addEventListener('loadedmetadata', () => {
                // seek to user defined timestamp (in seconds) if possible
                if (videoPlayer.duration < seekTo) {
                    reject("video is too short.");
                    return;
                }
                // delay seeking or else 'seeked' event won't fire on Safari
                setTimeout(() => {
                    videoPlayer.currentTime = seekTo;
                }, 200);
                // extract video thumbnail once seeking is complete
                videoPlayer.addEventListener('seeked', () => {
                    console.log('video is now paused at %ss.', seekTo);
                    // define a canvas to have the same dimension as the video
                    const canvas = document.createElement("canvas");
                    canvas.width = videoPlayer.videoWidth;
                    canvas.height = videoPlayer.videoHeight;
                    // draw the video frame to canvas
                    const ctx = canvas.getContext("2d");
                    ctx.drawImage(videoPlayer, 0, 0, canvas.width, canvas.height);
                    // return the canvas image as a blob
                    const thumbnailUrl = canvas.toDataURL();
                    console.log(thumbnailUrl);
                    ctx.canvas.toBlob(
                        blob => {
                            resolve(blob);
                        }
                    );
                });
            });
        });
    }

    function vidFileError() {
        setUploadMessageVid("This file type is not supported");
    }

    function vidError() {
        setVideoUrl("");
        setUploadMessageVid("This file type is not supported");
    }

    function resetUpload() {
        setVideoUrl("")
        setVideoFile("")
    }

    return (
        <div className="uploadSquare" onDrop={(e) => videoDropHandler(e)} onDragOver={(e) => dragOverHandler(e)}>
            <input style={{ "display": "none" }} id="selectVideoInput" type="file" onClick={(e) => e.target.value = ''} onChange={(e) => videoSelectHandler(e)}></input>
            {videoUrl && !uploadingVideo ?
                (<video id="uploadPlayer" width="320" height="240" controls controlsList="nodownload nooptions nofullscreen noremoteplayback">
                    <source src={videoUrl} type="video/mp4" onError={() => vidError()} />
                    Your browser does not support the video tag.
                </video>)
                : uploadingVideo ?
                    (
                        <div id="uploadInner">
                            <div>
                                <div className="loaderFlexVid">
                                    {/* <img className="loaderGif" src="https://www.davidkingsbury.co.uk/wp-content/uploads/2021/08/lg.ring-loading-gif.gif">
                                </img> */}
                                    <div className="loader">
                                    </div>
                                </div>
                                <div className="uploadingFileMsg">
                                    {"uploading " + videoFile.name}
                                </div>
                            </div>
                            <div id="progressBarContainer">
                                <ProgressBar completed={percentUploaded} customLabel=" " bgColor="#0b83ff" baseBgColor="#2b3136" />
                            </div>
                        </div>
                    ) :
                    <div id="uploadInner" onClick={() => document.getElementById("selectVideoInput").click()}>
                        <div>
                            <svg width="45" height="45" fill="none" viewBox="0 0 24 24" id="uploadIcon">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.75 14.75V16.25C4.75 17.9069 6.09315 19.25 7.75 19.25H16.25C17.9069 19.25 19.25 17.9069 19.25 16.25V14.75"></path>
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 14.25L12 5"></path>
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8.75 8.25L12 4.75L15.25 8.25"></path>
                            </svg>
                            <div className="uploadMessage">
                                {uploadMessageVid}
                            </div>
                        </div>
                    </div>
            }
        </div>
    );
}