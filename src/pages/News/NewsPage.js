import React from "react";
import newList from "../../assets/newsList.json"; // Import your JSON data
import "./newsStyle.css"

function NewsComp() {
  return (
    <div id="newsCompContainer">
      <h1>News</h1>
      <ul>
        {newList.map((item, index) => (
          <li key={index}>
            <h2>{item.title}</h2>
            <p>
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                {item.link}
              </a>
            </p>
            <p>{item.blog}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NewsComp;





