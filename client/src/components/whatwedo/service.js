import React, { useEffect } from "react";
import { Parallax } from "react-parallax";
import { useState } from "react";
import "./service.css";
import logo from "../../logo.svg";

export default function Service(prop) {
  const [scrollpos, setScrollpos] = useState(0);
  return (
    <div className="Service">
      <Parallax
        renderLayer={(offset) => (
          <div className="serviceti">
            <div className="servicecontent">
              <div className="servicecontentt">
                <h1 className={"serviceno"}>{prop.number}</h1>
                <div className="servicetexts">
                  <h2 className="servicetitle">{prop.title}</h2>
                  <p className="servicetext">{prop.content}</p>
                </div>
              </div>
            </div>

            <div className="images">
              <img
                src={logo}
                style={{ transform: `translate(0%,-${offset * 100}%)` }}
              />
              <img
                src={logo}
                style={{ transform: `translate(0%,-${offset * 100}%)` }}
              />
              <img
                src={logo}
                style={{ transform: `translate(0%,-${offset * 100}%)` }}
              />
            </div>
          </div>
        )}
      />
    </div>
  );
}
