import React, { useEffect, useState } from "react";
// import "./styles/actionStyle.css";



export default function Action() {
    const location = "Round Rock";

    return (
        <section id="actionSection">
        <div id="actionImgFlex">
          <img
            id="largeLogo"
            src="https://testsiterd.kinsta.cloud/wp-content/uploads/2023/04/Keep-Round-Rock-Safe-02-smaller-1.png"
          ></img>
        </div>
        <div id="actionTitle">What can be done?</div>
        <div id="actionSubTitle">
          We are requesting common sense sign rule updates that benefit all
          businesses and not just the big companies that come in from out of
          town. New rules will ensure new EMC signs are built in an attractive
          way, promote the city and its branding, and prevent sign clutter and
          proliferation, all at zero expense to {location} taxpayers.
        </div>
        <div id="actionSubTitle">
          Let {location} city leaders know that a modern city deserves modern
          sign regulations.
        </div>
        <div id="actionSubTitle2">
          Join your neighbors and sign the petition today!
        </div>
        </section>
    );
}
