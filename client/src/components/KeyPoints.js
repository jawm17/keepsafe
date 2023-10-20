import React, { useEffect, useRef } from "react";
import "./styles/keyPointsStyle.css";

const KeyPoints = () => {
  return (
    <div id="keyPointsSection">
      {/* <div id="heroKeyLine2"></div> */}
      <h1 className="keys one">
        Support Local Business
        {/* <h3>Support Local Business</h3> */}
        {/* <h4>Support Local Business</h4> */}
      </h1>
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" id="star">
        <path d="M24 34.54 36.36 42l-3.27-14.06L44 18.49l-14.38-1.24L24 4l-5.62 13.25L4 18.49l10.91 9.45L11.64 42z"></path>
        <path fill="none" d="M0 0h48v48H0z"></path>
      </svg>
      <h1 className="keys two">
      <div id="heroKeyLine"></div>

        Enhance Public Safety
        {/* <h3>Enhance Public Safety</h3> */}
        {/* <h4>Enhance Public Safety</h4> */}
      </h1>
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" id="star" >
        <path d="M24 34.54 36.36 42l-3.27-14.06L44 18.49l-14.38-1.24L24 4l-5.62 13.25L4 18.49l10.91 9.45L11.64 42z"></path>
        <path fill="none" d="M0 0h48v48H0z"></path>
      </svg>
      <h1 className="keys three">
        No Cost To Taxpayers
        {/* <h3>No Cost To Taxpayers</h3> */}
        {/* <h4>No Cost To Taxpayers</h4> */}
      </h1>
    </div>
  );
};

export default KeyPoints;
