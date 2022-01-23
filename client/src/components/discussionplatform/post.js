import React, { useState } from "react";
import "./post.css";
import Comment from "./Comment";
export default function Post(prop) {
  const [display, setDisplay] = useState("none");
  return (
    <div className="Post">
      <div className="header">
        <div>
          <div className="circle" />
          <p className="clientname">{prop.client}</p>
        </div>
        <p>{prop.date}</p>
      </div>
      <div className="contentpost">
        <p>{prop.post}</p>
      </div>
      <button
        className="comment"
        onClick={() => {
          if (display === "block") {
            setDisplay("none");
          } else {
            setDisplay("block");
          }
        }}
      >
        Comment
      </button>
      <div style={{ display: `${display}` }} className="comments">
        <Comment
          commentname="Nirjal jla"
          date="2021/03/04"
          commentcontent="Nir jalj dskfj lakds jlkdasj klfdj  adlks jfadkl jfdka lfjdlka jlkdsa jkldaj lklj fdk"
        />
        <Comment
          commentname="Nirjal jla"
          date="2021/03/04"
          commentcontent="Nir jalj dskfj lakds jlkdasj klfdj  adlks jfadkl jfdka lfjdlka jlkdsa jkldaj lklj fdk"
        />
        <Comment
          commentname="Nirjal jla"
          date="2021/03/04"
          commentcontent="Nir jalj dskfj lakds jlkdasj klfdj  adlks jfadkl jfdka lfjdlka jlkdsa jkldaj lklj fdk"
        />
        <Comment
          commentname="Nirjal jla"
          date="2021/03/04"
          commentcontent="Nir jalj dskfj lakds jlkdasj klfdj  adlks jfadkl jfdka lfjdlka jlkdsa jkldaj lklj fdk"
        />
        <Comment
          commentname="Nirjal jla"
          date="2021/03/04"
          commentcontent="Nir jalj dskfj lakds jlkdasj klfdj  adlks jfadkl jfdka lfjdlka jlkdsa jkldaj lklj fdk"
        />
      </div>
    </div>
  );
}
