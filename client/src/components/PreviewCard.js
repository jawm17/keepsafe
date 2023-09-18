import React, { useEffect } from "react";
import "./styles/previewCardStyle.css";

export default function PreviewCard(props) {

    useEffect(() => {
        console.log(props.mediaSources)
    }, [props]);

    if (props.unlocked) {
        if (props.postData?.mediaSources) {
            if (props.postData.mediaSources.length > 0) {
                if (props.postData.mediaSources[0].thumbSrc) {
                    return (
                        <div className="previewCard">
                           <img src={props.postData.mediaSources[0].thumbSrc} className="previewThumbnailUnlocked"></img>
                        </div>
                    );
                }
            }
        }
    }

    return (
        <div className="previewCard">
            <img src={props.userImg === "https://firebasestorage.googleapis.com/v0/b/ethresources-1ed10.appspot.com/o/Screen%20Shot%202023-05-26%20at%201.43.56%20AM.png?alt=media&token=3bf94c27-d9e4-420e-860e-c35cdd8cac9d" ? "https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/v818-kul-01.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=fea071dc641c29b833f3ffa571d94ce8" : props.userImg} className="previewThumbnail"></img>
        </div>
    );
}