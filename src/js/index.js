//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
// import Home from "./component/home.jsx";


let counter = 0;

const SimpleCounter = () => {
    return (
    <div className="counter">  
        <div><i className="fa-regular fa-clock"></i></div>
        <div className="four">{Math.floor(counter/1000) % 10}</div>
        <div className="three">{Math.floor(counter/100) % 10}</div>
        <div className="tow">{Math.floor(counter/10) % 10}</div>
        <div className="one">{Math.floor(counter/1) % 10}</div>
    </div>   
   )

};



setInterval(() => {

    counter++;

    ReactDOM.render(<SimpleCounter />, document.querySelector("#app"));
}, 1000);

