import React from "react";

function Welcome(props) {
  return (
    <div className="firstPage">
      <img className="battery" src="../images/battery.png" />
      <p>TO DO</p>
      <h1 className="welcomeHeader">Keep Track Of Daily Tasks In Life</h1>
      <div className="startBtn">
        <a href={props.url} className="aStarter">
          Get Started
        </a>
      </div>
    </div>
  );
}
export default Welcome;
