import React from "react";
import ReactDOM from "react-dom";

var fName = "Raj";
var lName = "Chaudhary";
var myLuckyNumber = 11;

ReactDOM.render(
  <div>
    <h1>Hello {fName + " " + lName}</h1>
    <p>My lucky number is {Math.floor(Math.random() * 20)}</p>
  </div>,
  document.getElementById("root")
);
