import React from "react";
import newList from "./newsList.json"; // Import your JSON data
import "./newsStyle.css"

function NewsComp() {
  return (
    <div id="newsCompContainer">
      <h1>News</h1>
      <ul>
          <li>
            <h2>{newList[0].title}</h2>
            <div>
            </div>
            <p>
              <a href={newList[0].link} target="_blank" rel="noopener noreferrer">
                {newList[0].link}
              </a>
            </p>
            <p>{newList.blog}</p>
          </li>
      </ul>
    </div>
  );
}

export default NewsComp;





