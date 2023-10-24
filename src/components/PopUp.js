import React, { useEffect } from "react";
import "./styles/popupStyle.css";

export default function PopUp(props) {

    useEffect(() => {
        setTimeout(() => {
            document.getElementById("popUpBody").style.opacity = 100
        }, 100);
    }, []);

    return (
        <div>
            <div id="modalBlur" onClick={() => props.close()}></div>

            <div id="popUpBody">
                <svg onClick={() => props.close()} id="closePopUpBtn" xmlns="https://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div id="popUpContent">
                    <h1>Thank you for the support!</h1>
                </div>
            </div>
        </div>
    );
}