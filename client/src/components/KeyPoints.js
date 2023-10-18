import React, { useEffect, useRef } from "react";
import "./styles/keyPointsStyle.css";

const KeyPoints = () => {
  return (
    <div id="keyPointsSection">
      <div id="heroKeyLine"></div>
      <div id="heroKeyLine2"></div>
      <h1 className="keys one">
        Support Local Business
        {/* <h3>Support Local Business</h3> */}
        {/* <h4>Support Local Business</h4> */}
      </h1>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        enable-background="new 0 0 24 24"
        viewBox="0 0 24 24"
        id="star"
      >
        <path
          d="M22,10.1c0.1-0.5-0.3-1.1-0.8-1.1l-5.7-0.8L12.9,3c-0.1-0.2-0.2-0.3-0.4-0.4C12,2.3,11.4,2.5,11.1,3L8.6,8.2L2.9,9
	C2.6,9,2.4,9.1,2.3,9.3c-0.4,0.4-0.4,1,0,1.4l4.1,4l-1,5.7c0,0.2,0,0.4,0.1,0.6c0.3,0.5,0.9,0.7,1.4,0.4l5.1-2.7l5.1,2.7
	c0.1,0.1,0.3,0.1,0.5,0.1l0,0c0.1,0,0.1,0,0.2,0c0.5-0.1,0.9-0.6,0.8-1.2l-1-5.7l4.1-4C21.9,10.5,22,10.3,22,10.1z"
        ></path>
      </svg>
      <h1 className="keys two">
        Enhance Public Safety
        {/* <h3>Enhance Public Safety</h3> */}
        {/* <h4>Enhance Public Safety</h4> */}
      </h1>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        enable-background="new 0 0 24 24"
        viewBox="0 0 24 24"
        id="star"
      >
        <path
          d="M22,10.1c0.1-0.5-0.3-1.1-0.8-1.1l-5.7-0.8L12.9,3c-0.1-0.2-0.2-0.3-0.4-0.4C12,2.3,11.4,2.5,11.1,3L8.6,8.2L2.9,9
	C2.6,9,2.4,9.1,2.3,9.3c-0.4,0.4-0.4,1,0,1.4l4.1,4l-1,5.7c0,0.2,0,0.4,0.1,0.6c0.3,0.5,0.9,0.7,1.4,0.4l5.1-2.7l5.1,2.7
	c0.1,0.1,0.3,0.1,0.5,0.1l0,0c0.1,0,0.1,0,0.2,0c0.5-0.1,0.9-0.6,0.8-1.2l-1-5.7l4.1-4C21.9,10.5,22,10.3,22,10.1z"
        ></path>
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
