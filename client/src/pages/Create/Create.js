import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useHistory } from "react-router-dom";
import axios from "axios";
import NavTop from "../../components/NavTop";
import NavBottom from "../../components/NavBottom";
import UploadComponent from "./UploadComponent";
import "./createStyle.css";

export default function Create() {
    const history = useHistory();
    const { user, setIsAuthenticated, setUser } = useContext(AuthContext);
    const [videoUrl, setVideoUrl] = useState("");
    const [thumbUrl, setThumbUrl] = useState("");
    const [loading, setLoading] = useState(false);
    const [accessType, setAccessType] = useState("key");

    async function submitPost() {
        if (!loading) {
            // check for all video fields complete and if accesstype data is complete
            if (videoUrl) {
                setLoading("true");
                // get timestamp data
                let duration = document.getElementById("uploadPlayer").duration;
                var hours = Math.floor(duration / 3600);
                var minutes = Math.floor((duration - (hours * 3600)) / 60);
                var seconds = Math.floor(duration - (hours * 3600) - (minutes * 60));
                var timestamp = '';
                if (hours > 0) {
                    timestamp += ('0' + hours).slice(-2) + ':';
                }
                timestamp += ('0' + minutes).slice(-2) + ':' + ('0' + seconds).slice(-2);

                let newPost = { userID: user._id, user: user._id, mediaSources: [{ src: videoUrl, thumbSrc: thumbUrl, type: "video" }], timestamp }

                try {
                    const data = await axios.post("/media/new-post", { newPost });
                    console.log(data.data);
                    setTimeout(() => {
                        setLoading("done");
                        setTimeout(() => {
                            history.push("/account");
                        }, 800);
                    }, 500);
                } catch (error) {
                    setLoading("");
                    console.log(error);
                    // setIsAuthenticated(false);
                    // history.push("/");
                }
            } else {
                alert("missing data");
            }
        }
    }

    return (
        <div>
            <NavTop />
            <NavBottom page={"account"} />
            <div id="createAreaFlex">
                <div id="createArea">
                    <div id="createTitle">
                        <div>
                            Create
                        </div>
                    </div>
                    <UploadComponent setVid={(url) => setVideoUrl(url)} setThumb={(url) => setThumbUrl(url)} />
                    <div id="accessLabel">
                        Access:
                    </div>
                    <div id="accessBtnsFlex">
                        {/* <div className="accessBtn" onClick={() => setAccessType("all")} id={accessType === "all" ? "selectedType" : null}>
                            All
                        </div> */}
                        <div className="accessBtn" onClick={() => setAccessType("key")} id={accessType === "key" ? "selectedType" : null}>
                            Key Holders
                        </div>
                        {/* <div className="accessBtn" onClick={() => setAccessType("paywall")} id={accessType === "paywall" ? "selectedType" : null}>
                            Paywall
                        </div> */}
                    </div>
                    <div id="accessDetails">
                        {accessType === "all" ? "anyone can see this post" : null}
                        {accessType === "key" ? "only your key holders can see this post" : null}
                    </div>
                    <div id="postButton" onClick={() => submitPost()}>
                        {loading ?
                            <div className="loaderFlexVid">
                                <div className="loader">
                                </div>
                            </div>
                            : "post"}
                    </div>
                </div>
            </div>
        </div>
    );
}