import React from "react";
import "./styles/formStyle.css";

export default function Form() {
  

    return (
        <section id="formSection">
        <div id="formContainer">
            <div id="formImgDiv"></div>
            <div id="formContent">
            <div id="formWrap">
                    
                <h3>Get Started!</h3>
                <div>
                <div id="form">
                    <input className="textField" placeholder="Your Name *"/>
                    <input className="textField" placeholder="Email *"/>
                    <input className="textField" placeholder="Phone *"/>
                    <input className="textField" placeholder="Address"/>
                    <textarea id="textArea" placeholder="Message *"/>
                    <div id="btnFormContainer">
                        <input value="Send Messaage" id="buttonForm"/>
                    </div>
                </div>
                </div>
                </div>
            </div>
           
        </div>
        </section>
    );
}
