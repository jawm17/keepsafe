import React, { useEffect, useState } from "react";
import axios from "axios";
import PopUp from "./PopUp";
import "./styles/formStyle.css";

export default function Form() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");
    const [address, setAddress] = useState("");
    const [message, setMessage] = useState("");

    const [errorMsg, setErrorMsg] = useState("");
    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false);

    // true = popup open, false = popup closed
    const [popUpOpen, setPopUpOpen] = useState(false);

    async function submitForm() {
        if (name && email && number && message) {
            if (!loading) {
                setLoading(true);
                try {
                    const res = await axios.post(
                        "https://api.apispreadsheets.com/data/WSv55IaYVx2G9PKQ/",
                        JSON.stringify({ "data": { name, email, number, address, message } })
                    )
                    if (res.status === 201) {
                        // SUCCESS
                        setLoading(false);
                        setSuccess(true);
                        setPopUpOpen(true);
                        setTimeout(() => {
                            setSuccess(false);
                        }, 2000);
                    }
                    else {
                        // ERROR
                        setLoading(false);
                        setErrorMsg("An error occurred, please try again later.");
                    }
                    setName("");
                    setEmail("");
                    setNumber("");
                    setAddress("");
                    setMessage("");
                } catch (error) {
                    console.log(error);
                    setLoading(false);
                    setErrorMsg("An error occurred, please try again later.");
                    setName("");
                    setEmail("");
                    setNumber("");
                    setAddress("");
                    setMessage("");
                }
            }
        } else {
            setErrorMsg("* please fill out all fields")
        }
    }

    useEffect(() => {
        if (errorMsg === "* please fill out all fields") {
            setErrorMsg("");
        }
    }, [name, email, number, message]);


    return (
        <section id="formSection">
            {popUpOpen ? <PopUp close={() => setPopUpOpen(false)} /> : null}
            <div id="formContainer">
                <div id="formImgDiv"></div>
                <div id="formContent">
                    <div id="formWrap">
                        <h3>Support Us!</h3>
                        <div>
                            <div id="form">
                                <input value={name} onChange={(e) => setName(e.target.value)} name="name" className="textField" placeholder="Your Name *" />
                                <input value={email} onChange={(e) => setEmail(e.target.value)} name="email" className="textField" placeholder="Email *" />
                                <input value={number} onChange={(e) => setNumber(e.target.value)} name="number" className="textField" placeholder="Phone *" />
                                <input value={address} onChange={(e) => setAddress(e.target.value)} name="address" className="textField" placeholder="Address" />
                                <textarea value={message} onChange={(e) => setMessage(e.target.value)} name="message" id="textArea" placeholder="Message *" />
                                {errorMsg ?
                                    <div id="formErrorMsg">
                                        {errorMsg}
                                    </div>
                                    :
                                    null
                                }
                                <div id="btnFormContainer">
                                    <div id="buttonForm" onClick={() => submitForm()}>
                                        {success ?
                                            "success"
                                            :
                                            loading ?
                                                <div className="loader">

                                                </div>
                                                :
                                                "send message"
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}