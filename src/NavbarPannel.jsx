import React, { useState } from "react";
import "./css/NavbarPannel.css";

function NavbarPannel() {
  let [intColor, setIntColor] = useState("black");

  // const btnHandler = () => {
  //   if (intColor == "black") {
  //     setIntColor("red");
  //   } else if (intColor == "red") {
  //     setIntColor("green");
  //   } else if (intColor == "green") {
  //     setIntColor("blue");
  //   } else if (intColor == "blue") {
  //     setIntColor("olive");
  //   } else if (intColor == "olive") {
  //     setIntColor("gray");
  //   } else if (intColor == "gray") {
  //     setIntColor("yellow");
  //   } else if (intColor == "yellow") {
  //     setIntColor("pink");
  //   } else if (intColor == "pink") {
  //     setIntColor("purple");
  //   } else if (intColor == "purple") {
  //     setIntColor("lavender");
  //   } else if (intColor == "lavender") {
  //     setIntColor("white");
  //   } else if (intColor == "white") {
  //     setIntColor("black");
  //   }
  // };
  return (
    <div className="container" style={{ backgroundColor: intColor }}>
      <nav className="navbar-pannel">
        <div className="btn-box">
          <button className="Red" onClick={() => setIntColor("red")}>
            Red
          </button>
          <button className="Green" onClick={() => setIntColor("green")}>
            Green
          </button>
          <button className="Blue" onClick={() => setIntColor("blue")}>
            Blue
          </button>
          <button className="Olive" onClick={() => setIntColor("olive")}>
            Olive
          </button>
          <button className="Gray" onClick={() => setIntColor("gray")}>
            Gray
          </button>
          <button className="Yellow" onClick={() => setIntColor("yellow")}>
            Yellow
          </button>
          <button className="Pink" onClick={() => setIntColor("pink")}>
            Pink
          </button>
          <button className="Purple" onClick={() => setIntColor("purple")}>
            Purple
          </button>
          <button className="Lavender" onClick={() => setIntColor("lavender")}>
            Lavender
          </button>
          <button className="White" onClick={() => setIntColor("white")}>
            White
          </button>
          <button className="Black" onClick={() => setIntColor("black")}>
            Black
          </button>
        </div>
      </nav>
    </div>
  );
}

export default NavbarPannel;
