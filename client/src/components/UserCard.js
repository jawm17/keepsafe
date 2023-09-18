import React from "react";
import { useHistory } from "react-router-dom";
import "./styles/userCardStyle.css";

export default function UserCard(props) {
    const history = useHistory();
    return (
        <div className="suggestedUser" onClick={() => history.push("/user/" + props.user.address)}>

            <img className="userCardImg" src={props.user.profileImg}></img>
            <div className="userCardName">
                {props.user.name}
            </div>
        </div>
    );
}