import React from "react";
import "./discussionpage.css";
import Post from "./post";
export default function Discussionpage() {
  return (
    <div className="Discussionpage">
      <div className="discussionborder">
        <div className="postarea">
          <div className="discussionTextbox">
            <div className="Circle" />
            <textarea
              wrap="soft"
              className="whatsonyourmind"
              type="text"
              placeholder="What's happening"
              onChange={(e)=>{
                  e.target.style.height = "inherit";
                  e.target.style.height = `${e.target.scrollHeight}px`;
              }}  
            />
          </div>
          <button className="post">Post</button>
        </div>
        <Post client = "Mahip Adhikari" date="2021/04/16" post="I am so depressed cause my gf broke up I want to kill her but i am scared of bolice"/>
      </div>
      
    </div>
  );
}
