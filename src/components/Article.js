import React from "react";
import "./styles/articleStyle.css";

export default function Article(props) {

    /*
    Article format
      {
        "description": "",
        "link": "",
        "image": "",
        "date": ""
    },
    */


    return (
        <div className="articleItem" onClick={() => window.open(props.data.link, "_blank")}>
            <img className="articleImg" src={props.data.image}></img>
            <div className="articleDescription">
                {props.data.description}
            </div>
            <div className="readMoreBtn">
                <div>
                    READ MORE
                </div>
                <svg id="readMoreIcon" xmlns="https://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
            </div>
        </div>
    );
}