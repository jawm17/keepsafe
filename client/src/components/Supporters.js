import React, { useEffect, useState } from "react";
import "./styles/supportersStyle.css";



export default function Supporters() {
    return (
        <section id="supportersSection">
          <h1 id="supportersTitle">Trusted By</h1>
          <div id="companyIcons">
          <img id="gImg" src="https://testsiterd.kinsta.cloud/wp-content/uploads/2023/04/logo_gino-s-1920w.webp"/>
          <img src="https://testsiterd.kinsta.cloud/wp-content/uploads/2023/04/warpath-pizza-300x300.png"/>
          <img src="https://testsiterd.kinsta.cloud/wp-content/uploads/2023/04/urban-rooftop-logo-stacked-white-logo-300x160.png"/>
          <img src="https://testsiterd.kinsta.cloud/wp-content/uploads/2023/04/finleys-rr-logo-white@2x.png"/>
          <img src="https://testsiterd.kinsta.cloud/wp-content/uploads/2023/04/centro-logo-500-01-300x75.png"/>
          </div>
        </section>
    );
}
