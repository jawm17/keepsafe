import React, { useEffect, useState } from "react";
import "./styles/infoStyle.css";

export default function Info() {
  const location = "Round Rock";

  return (
    <section id="infoSection">
      <h1 id="infoTitle">Info</h1>
      <div className="section">
            <div className="container">
                <div className="info">
                    <h2>Title 1</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <img src="https://via.placeholder.com/200" alt="Placeholder Image 1" />
            </div>

            <div className="container reversed">
                <img src="https://via.placeholder.com/200" alt="Placeholder Image 2" />
                <div className="info">
                    <h2>Title 2</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
            </div>
        </div>

    </section>
  );
}
