import React from "react";
import "./whatwedo.css";
import { Parallax } from "react-parallax";
import Service from "./service";

export default function Whatwedopage() {
  return (
    <div className="Whatwedo">
      <div className="whatwedotitle">
        <div className="titletext">
          <Parallax
            renderLayer={(offset) => (
              <h1 style={{ transform: `translatex(${offset * 100 - 50}%)` }}>
                What we Do?
              </h1>
            )}
          />
          <p>We try to bring the revolution in field of mental health</p>
        </div>
      </div>
      <div>
        <Service
          number="01"
          title="Concetion"
          content="ajdflkja lkdfja lkjdalk jadskl jklasd jflskad jflskadj fsdkla jfsdklaj flsakdj flakds jflksad jflksad fjlkasdj flksda jflksda jflka"
        />
        <Service
          number="01"
          title="Concetion"
          content="ajdflkja lkdfja lkjdalk jadskl jklasd jflskad jflskadj fsdkla jfsdklaj flsakdj flakds jflksad jflksad fjlkasdj flksda jflksda jflka"
        />
        <Service
          number="01"
          title="Concetion"
          content="ajdflkja lkdfja lkjdalk jadskl jklasd jflskad jflskadj fsdkla jfsdklaj flsakdj flakds jflksad jflksad fjlkasdj flksda jflksda jflka"
        />
      </div>
    </div>
  );
}
