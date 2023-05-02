import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Comment = () => {
  const [comment, setComment] = useState("");
  const navigate = useNavigate();
  console.log("Hei");

  const handleSaveComment = () => {
    // Do something with the comment data
    console.log(comment);
    navigate("/dashboard");
  };

  return (
    <div className="add-comment-page">
      <h1>Add Comment</h1>
      <textarea
        placeholder="Add a comment"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <div>
        <button onClick={handleSaveComment}>Save Comment</button>
        <button onClick={() => navigate("/dashboard")}>Cancel</button>
      </div>
    </div>
  );
};

export default Comment;
