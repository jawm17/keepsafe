import React, { useEffect, useState } from "react";
import "./styles/infoStyle.css";

import FieldPic from "../assets/fieldPic.jpeg";
import SignPic from "../assets/signPic.jpeg";
import TeamPic from "../assets/TeamPic.jpeg";


export default function Info() {
  const location = "Round Rock";

  return (
    <section id="infoSection">
      {/* <h1 id="infoTitle">Info</h1> */}
      <div className="section">
            <div className="container">
                <div className="info">
                    <h2>Need for Enhanced Safety & Economic Growth</h2>
                    <p>Enhanced public safety and economic growth are urgent needs in Round Rock. The proposed EMC signs, supported by the coalition, are strategically positioned in high-traffic areas to drive economic growth and bolster public safety, providing the community with crucial, timely information.</p>
                </div>
                 <div className="infoImg">
                <img src={TeamPic} alt="Placeholder Image 1" />
                </div>
            </div>

            <div className="container reversed">
            <div className="infoImg">
                <img src={SignPic} alt="Placeholder Image 1" />
                </div>
                <div className="info">
                    <h2>Outdated Sign Regulations</h2>
                    <p>The current sign regulations in Round Rock are outdated, hindering the visibility and success of local businesses. The Keep Round Rock Safe coalition advocates for modernized sign rules that will prevent sign clutter, promote cohesive city branding, and support businesses of all sizes without imposing additional costs on taxpayers.</p>
                </div>
            </div>
        </div>

    </section>
  );
}
