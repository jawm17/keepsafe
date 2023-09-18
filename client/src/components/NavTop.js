import React from "react";
import { useHistory } from "react-router-dom";
import "./styles/navTopStyle.css";

export default function NavTop(props) {
    const history = useHistory();
    return (
        <div>
            <div className="topNavFlex">
                <div id="topNav">
                    <div>
                        <svg width="26" height="26" fill={props.page === "notif" ? "black" : "none"} viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.25 12V10C17.25 7.1005 14.8995 4.75 12 4.75C9.10051 4.75 6.75 7.10051 6.75 10V12L4.75 16.25H19.25L17.25 12Z"></path>
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 16.75C9 16.75 9 19.25 12 19.25C15 19.25 15 16.75 15 16.75"></path>
                        </svg>
                    </div>
                    <div id="homeLogo">
                        nvus
                    </div>
                    <div>
                        <svg width="26" height="26" fill={props.page === "send" ? "black" : "none"} viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.75 19.25L12 4.75L19.25 19.25L12 15.75L4.75 19.25Z"></path>
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 15.5V12.75"></path>
                        </svg>
                    </div>
                </div>
            </div>
            <div className="topNavFlex" id="topNavFlexFaux">
                <div id="topNav">
                    <div className="topFauxNavBtn" onClick={() => history.push("/notifications")}>
                    </div>
                    <div className="topFauxNavBtn" onClick={() => history.push("/send")}>
                    </div>
                </div>
            </div>
        </div>
    );
}