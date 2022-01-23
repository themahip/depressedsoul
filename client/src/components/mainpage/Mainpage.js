import React from "react";
import "./mainpage.css";
import { Parallax } from "react-parallax";
export default function Mainpage() {
  return (
    <div className="Mainpage">
      <div className="titlepage">
        <div className="title">
          <h1>Depressed Soul</h1>
          <p>Revolution in the Field of mental health</p>
        </div>
      </div>
      <div className="aboutuspage">
        <div className="aboutus">
          <Parallax
            renderLayer={(offset) => (
              <h1 style={{ transform: `translatex(${(offset * 100)-50}%)` }}>
                ABOUT US
              </h1>
            )}
          />
          <p>
            Platform to share their problems. A portal to bring revolution to
            the mental health. By making a model to train to suggest medication
            for every mental disordered peoples.
          </p>
        </div>
      </div>
      <div className="whatwedopage">
        <h1>What We Do ?</h1>
        
      </div>
      <div><h1>Nirjal</h1></div>
    </div>
  );
}
