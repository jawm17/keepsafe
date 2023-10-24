import React, { useEffect, useState } from "react";
import "./styles/footerStyle.css";

export default function Footer() {
  return (
    <footer>
      <div id="footer">
        <div className="footerSections" id="leftFooter">
          <div id="footerLogo"></div>
          {/* border left  */}
          <div id="logoWords">
            <h5>keep Round Rock safe</h5>
            <p>support local business</p>
          </div>
        </div>
        <div className="footerSections" id="midFooter">
          {/* <div>
        <p>Two Hannover Square</p>
        <p>434 Fayetteville Street, Suite 2330</p>
        <p>Raleigh, NC 27601</p>
        </div> */}
          <div>
            {/* <p>(512)-571-0564</p> */}
            <a href="mailto:info@keeproundrocksafe.org">
              info@keeproundrocksafe.org
            </a>
          </div>
        </div>
        <div className="footerSections" id="rightFooter">
          {/* form/button */}
          {/* maybe put a form here instead of a btn*/}
          {/* <div id="contactBtn">
          <p>contact us<span>&#10148;</span></p>
        </div> */}
          <div id="lab_social_icon_footer">
            <div className="container">
              <div className="text-center center-block">
                <a href="https://www.instagram.com/keeproundrocksafe/">
                  <svg
                    id="social-fb"
                    className="social"
                    xmlns="http://www.w3.org/2000/svg"
                    data-name="Layer 1"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.34,5.46h0a1.2,1.2,0,1,0,1.2,1.2A1.2,1.2,0,0,0,17.34,5.46Zm4.6,2.42a7.59,7.59,0,0,0-.46-2.43,4.94,4.94,0,0,0-1.16-1.77,4.7,4.7,0,0,0-1.77-1.15,7.3,7.3,0,0,0-2.43-.47C15.06,2,14.72,2,12,2s-3.06,0-4.12.06a7.3,7.3,0,0,0-2.43.47A4.78,4.78,0,0,0,3.68,3.68,4.7,4.7,0,0,0,2.53,5.45a7.3,7.3,0,0,0-.47,2.43C2,8.94,2,9.28,2,12s0,3.06.06,4.12a7.3,7.3,0,0,0,.47,2.43,4.7,4.7,0,0,0,1.15,1.77,4.78,4.78,0,0,0,1.77,1.15,7.3,7.3,0,0,0,2.43.47C8.94,22,9.28,22,12,22s3.06,0,4.12-.06a7.3,7.3,0,0,0,2.43-.47,4.7,4.7,0,0,0,1.77-1.15,4.85,4.85,0,0,0,1.16-1.77,7.59,7.59,0,0,0,.46-2.43c0-1.06.06-1.4.06-4.12S22,8.94,21.94,7.88ZM20.14,16a5.61,5.61,0,0,1-.34,1.86,3.06,3.06,0,0,1-.75,1.15,3.19,3.19,0,0,1-1.15.75,5.61,5.61,0,0,1-1.86.34c-1,.05-1.37.06-4,.06s-3,0-4-.06A5.73,5.73,0,0,1,6.1,19.8,3.27,3.27,0,0,1,5,19.05a3,3,0,0,1-.74-1.15A5.54,5.54,0,0,1,3.86,16c0-1-.06-1.37-.06-4s0-3,.06-4A5.54,5.54,0,0,1,4.21,6.1,3,3,0,0,1,5,5,3.14,3.14,0,0,1,6.1,4.2,5.73,5.73,0,0,1,8,3.86c1,0,1.37-.06,4-.06s3,0,4,.06a5.61,5.61,0,0,1,1.86.34A3.06,3.06,0,0,1,19.05,5,3.06,3.06,0,0,1,19.8,6.1,5.61,5.61,0,0,1,20.14,8c.05,1,.06,1.37.06,4S20.19,15,20.14,16ZM12,6.87A5.13,5.13,0,1,0,17.14,12,5.12,5.12,0,0,0,12,6.87Zm0,8.46A3.33,3.33,0,1,1,15.33,12,3.33,3.33,0,0,1,12,15.33Z"></path>
                  </svg>
                </a>
                <a href="https://x.com/KeepRRSafe?s=20">
                  <svg
                    id="social-tw"
                    className="social"
                    xmlns="http://www.w3.org/2000/svg"
                    data-name="Layer 1"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22,5.8a8.49,8.49,0,0,1-2.36.64,4.13,4.13,0,0,0,1.81-2.27,8.21,8.21,0,0,1-2.61,1,4.1,4.1,0,0,0-7,3.74A11.64,11.64,0,0,1,3.39,4.62a4.16,4.16,0,0,0-.55,2.07A4.09,4.09,0,0,0,4.66,10.1,4.05,4.05,0,0,1,2.8,9.59v.05a4.1,4.1,0,0,0,3.3,4A3.93,3.93,0,0,1,5,13.81a4.9,4.9,0,0,1-.77-.07,4.11,4.11,0,0,0,3.83,2.84A8.22,8.22,0,0,1,3,18.34a7.93,7.93,0,0,1-1-.06,11.57,11.57,0,0,0,6.29,1.85A11.59,11.59,0,0,0,20,8.45c0-.17,0-.35,0-.53A8.43,8.43,0,0,0,22,5.8Z"></path>
                  </svg>
                </a>
                <a href="https://www.tiktok.com/@keeproundrocksafe?is_from_webapp=1&sender_device=pc">
                  <svg
                    id="social-gp"
                    className="social"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 575 575"
                  >
                    <path d="M353.97 0.43c0.03,7.81 2.31,120.68 120.76,127.72 0,32.55 0.04,56.15 0.04,87.21 -8.97,0.52 -77.98,-4.49 -120.93,-42.8l-0.13 169.78c1.63,117.84 -85.09,189.55 -198.44,164.78 -195.46,-58.47 -130.51,-348.37 65.75,-317.34 0,93.59 0.05,-0.03 0.05,93.59 -81.08,-11.93 -108.2,55.52 -86.65,103.81 19.6,43.97 100.33,53.5 128.49,-8.53 3.19,-12.14 4.78,-25.98 4.78,-41.52l0 -337.13 86.28 0.43z"></path>
                  </svg>
                </a>
                <a href="https://www.facebook.com/profile.php?id=61552363477139">
                  <svg
                    id="social-face"
                    className="social"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1792 1792"

                  >
                    <path d="M1376 128q119 0 203.5 84.5T1664 416v960q0 119-84.5 203.5T1376 1664h-188v-595h199l30-232h-229V689q0-56 23.5-84t91.5-28l122-1V369q-63-9-178-9-136 0-217.5 80T948 666v171H748v232h200v595H416q-119 0-203.5-84.5T128 1376V416q0-119 84.5-203.5T416 128h960z"></path>
                  </svg>
                </a>
                <a href="mailto:info@keeproundrocksafe.org">
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
          </div>
        </div>
      </div>
      <div id="copyWrite">© Keep Round Rock Safe PAC. All rights reserved.</div>
    </footer>
  );
}
