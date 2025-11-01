import React, { useState } from "react";
import "./css/NavbarPannel.css";

function NavbarPannel() {
  let [intColor, setIntColor] = useState(0);

  const btnHandler = () => {
    if (intColor === ".Red") {
      let backgroundColor = (intColor.style.backgroundColor = "red");
      setIntColor(backgroundColor);
    } else if (intColor === ".Green") {
      let backgroundColor = (intColor.style.backgroundColor = "Green");
      setIntColor(backgroundColor);
    }
  };
  return (
    <div className="container">
      <nav className="navbar-pannel">
        <div className="btn-box">
          <button className="Red" onClick={btnHandler}>
            Red
          </button>
          <button className="Green" onClick={btnHandler}>
            Green
          </button>
          <button className="Blue" onClick={btnHandler}>
            Blue
          </button>
          <button className="Olive" onClick={btnHandler}>
            Olive
          </button>
          <button className="Gray" onClick={btnHandler}>
            Gray
          </button>
          <button className="Yellow" onClick={btnHandler}>
            Yellow
          </button>
          <button className="Pink" onClick={btnHandler}>
            Pink
          </button>
          <button className="Purple" onClick={btnHandler}>
            Purple
          </button>
          <button className="Lavender" onClick={btnHandler}>
            Lavender
          </button>
          <button className="White" onClick={btnHandler}>
            White
          </button>
          <button className="Black" onClick={btnHandler}>
            Black
          </button>
        </div>
      </nav>
    </div>
  );
}

export default NavbarPannel;
