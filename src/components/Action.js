import React, { useEffect, useState } from "react";
import "./styles/actionStyle.css";



export default function Action() {
    const location = "Round Rock";

    return (
        <section id='actionSection'>
            <div id="actionTitle">What can be done?</div>
            <div className='divs-container'>
            <div className='div-item'>
  <h2>Electronic Message Center (EMC) Signs:</h2>
  <p>EMC signs are endorsed for boosting economic growth, public safety, and emergency responsiveness in high-traffic areas of I-35 and SH-45.</p>
</div>
<div className='div-item'>
  <h2>Modernized Sign Regulations:</h2>
  <p>The coalition advocates for updated sign rules serving all businesses, ensuring attractive and brand-consistent EMC signs without extra taxpayer cost.</p>
</div>
<div className='div-item'>
  <h2>Economic Benefits:</h2>
  <p>The Perryman report notes that digital billboards can significantly boost the economy, contributing $700,000 in gross product during construction and $19.1 million annually once operational.</p>
</div>
<div className='div-item'>
  <h2>Safety Measures:</h2>
  <p>EMC signs can broadcast crucial alerts and emergency communications swiftly, providing timely warnings to citizens.</p>
</div>

            </div>

        </section>
    );
}
