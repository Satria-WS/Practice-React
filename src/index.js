import React from "react";
import ReactDOM from "react-dom";

const name = "car";
const randomNumber = Math.floor(Math.random() * 10);

const fName = "Tole";
const lName = "rabbani";

let YOURNAME = "Angela Tole";
let CURRENTYEAR = 2022;

ReactDOM.render(
  <div>
      <h2>Type of {name}: </h2>
      <ul>
          <li>Spyder</li>
          <li>Pony Car</li>
          <li>Jeep</li>
      </ul>
      
      <h1>Hello Tolle</h1>
      <p>Your {"lucky"} number is {randomNumber}</p>
      <p>Your name is {`${fName} ${lName}`}</p>

      <h1>CHALLENGE#1</h1>
      <p>Created by {YOURNAME}</p>
      <p>Copyright {CURRENTYEAR}</p>
      
  </div>,
  document.getElementById("root")
);
