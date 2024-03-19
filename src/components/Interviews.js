import React, { useState, useEffect } from "react";
import "./styles/interviewsStyles.css";

const Interviews = () => {
  const [youtubeID, setYoutubeID] = useState("gD48Ose0sBw");

  return (
    <>
      <h1>Testimonials</h1>
      <div id="video">
        <iframe
          className="video"
          title="Youtube player"
          sandbox="allow-same-origin allow-forms allow-popups allow-scripts allow-presentation"
          src={`https://youtube.com/embed/KVOkpFEgAhk?autoplay=0`}
        ></iframe>
      </div>
      <div id="video">
        <iframe
          className="video"
          title="Youtube player"
          sandbox="allow-same-origin allow-forms allow-popups allow-scripts allow-presentation"
          src={`https://youtube.com/embed/${youtubeID}?autoplay=0`}
        ></iframe>
      </div>
      <div id="video">
        <iframe
          className="video"
          src="https://www.youtube.com/embed/_zSDg_M2M9o?si=4IVAAfi8wmtLKXBA"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>

      {/* <video autoPlay="false" playsInline {...videoProps2}/> */}
    </>
  );
};

export default Interviews;
