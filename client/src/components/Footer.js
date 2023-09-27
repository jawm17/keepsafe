import React, { useEffect, useState } from "react";
import "./styles/footerStyle.css";

export default function Footer() {
  return (
    <footer id="footerSection">
      <section id="lab_social_icon_footer">
        <div className="container">
          <div className="text-center center-block">
            <a href="">
              <svg
                id="social-fb"
                className="social"
                xmlns="http://www.w3.org/2000/svg"
                data-name="Layer 1"
                viewBox="0 0 24 24"
              >
                <path d="M20.9,2H3.1A1.1,1.1,0,0,0,2,3.1V20.9A1.1,1.1,0,0,0,3.1,22h9.58V14.25h-2.6v-3h2.6V9a3.64,3.64,0,0,1,3.88-4,20.26,20.26,0,0,1,2.33.12v2.7H17.3c-1.26,0-1.5.6-1.5,1.47v1.93h3l-.39,3H15.8V22h5.1A1.1,1.1,0,0,0,22,20.9V3.1A1.1,1.1,0,0,0,20.9,2Z"></path>
              </svg>
            </a>
            <a href="">
              <svg
                id="social-tw"
                className="social"
                xmlns="http://www.w3.org/2000/svg"
                data-name="Layer 1"
                viewBox="0 0 24 24"
              >
                <path d="M22,5.8a8.49,8.49,0,0,1-2.36.64,4.13,4.13,0,0,0,1.81-2.27,8.21,8.21,0,0,1-2.61,1,4.1,4.1,0,0,0-7,3.74A11.64,11.64,0,0,1,3.39,4.62a4.16,4.16,0,0,0-.55,2.07A4.09,4.09,0,0,0,4.66,10.1,4.05,4.05,0,0,1,2.8,9.59v.05a4.1,4.1,0,0,0,3.3,4A3.93,3.93,0,0,1,5,13.81a4.9,4.9,0,0,1-.77-.07,4.11,4.11,0,0,0,3.83,2.84A8.22,8.22,0,0,1,3,18.34a7.93,7.93,0,0,1-1-.06,11.57,11.57,0,0,0,6.29,1.85A11.59,11.59,0,0,0,20,8.45c0-.17,0-.35,0-.53A8.43,8.43,0,0,0,22,5.8Z"></path>
              </svg>{" "}
            </a>
            <a href="">
              <svg
                id="social-gp"
                className="social"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 575 575"
              >
                <path d="M353.97 0.43c0.03,7.81 2.31,120.68 120.76,127.72 0,32.55 0.04,56.15 0.04,87.21 -8.97,0.52 -77.98,-4.49 -120.93,-42.8l-0.13 169.78c1.63,117.84 -85.09,189.55 -198.44,164.78 -195.46,-58.47 -130.51,-348.37 65.75,-317.34 0,93.59 0.05,-0.03 0.05,93.59 -81.08,-11.93 -108.2,55.52 -86.65,103.81 19.6,43.97 100.33,53.5 128.49,-8.53 3.19,-12.14 4.78,-25.98 4.78,-41.52l0 -337.13 86.28 0.43z"></path>
              </svg>
            </a>
            <a href="">
              <svg
                id="social-em"
                className="social"
                xmlns="http://www.w3.org/2000/svg"
                x="0"
                y="0"
                version="1.1"
                viewBox="0 0 29 29"
              >
                <path d="M2 7.42v14.172l7.086-7.086zM3.408 6l8.971 8.971c1.133 1.133 3.109 1.133 4.242 0L25.592 6H3.408z"></path>
                <path d="M18.035 16.385c-.943.944-2.199 1.465-3.535 1.465s-2.592-.521-3.535-1.465l-.465-.465L3.42 23h22.16l-7.08-7.08-.465.465zM19.914 14.506L27 21.592V7.42z"></path>
              </svg>
            </a>
          </div>
        </div>
      </section>
    </footer>
  );
}
