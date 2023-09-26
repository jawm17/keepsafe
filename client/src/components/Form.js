import React, { useEffect, useState } from "react";
import "./styles/formStyle.css";



export default function Form() {
    const location = "Round Rock";

    return (
        <section id="formSection">
            <div id="formTitleArea">
                <div id="formTitle">TAKE ACTION!</div>
                <div id="formSubTitle">
                    To sign the petition, you must reside within {location} City Limits.
                    We need your address to confirm eligibility, but we will never share
                    your information outside of Keep {location} Safe. If you prefer not
                    to provide your address, we will follow up with you to verify your
                    eligibility.
                </div>
            </div>
            <div id="formArea">
                <iframe
                    id="googleForm"
                    src="https://docs.google.com/forms/d/e/1FAIpQLSfG_UXNAi5dBsWUiQKDLQCol16c-lJKZRIM6VtXOk5KVrRyJg/viewform?embedded=true"
                    width="640px"
                    height="1200"
                    frameborder="0"
                    marginheight="0"
                    marginwidth="0"
                >
                    Loading…
                </iframe>
            </div>
        </section>
    );
}
