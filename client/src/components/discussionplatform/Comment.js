import React from "react";
import "./comment.css";
export default function Comment(prop) {
  return (
    <div className="Comment">
      <div className="commentheader">
        <div>
          <div className="circle" />
          <p className="commentname">{prop.commentname}</p>
        </div>
        <p>{prop.date}</p>
      </div>
      <p className="commentcontent">{prop.commentcontent}</p>
    </div>
  );
}
