import React, { useState } from "react";
import "./nav.css";
import { Link } from "react-router-dom";

export default function Nav() {
  const [active, setActive] = useState(false);
  return (
    <div className="Nav">
      <div className="navContainer">
        <h1>
          <Link to="/">Depressed Soul</Link>
        </h1>
        <div
          className={active ? "burger burgeractive" : "burger"}
          onClick={() => {
            if (active === false) {
              setActive(true);
            } else {
              setActive(false);
            }
          }}
        >
          <span />
          <span />
          <span />
        </div>
      </div>
      <div className={active ? "menuactive" : "menu"}>
        <div className={active ? "menuContentsactive" : "menuContents"}>
          <h1>Depressed Soul Menu</h1>
          <h3>About</h3>
          <h3>
            <Link to="/discussion">Discussion</Link>
          </h3>
          <h3>Councelling</h3>
          <h3>Login | Signuo</h3>
        </div>
      </div>
    </div>
  );
}
