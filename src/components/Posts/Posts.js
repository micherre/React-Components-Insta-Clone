import React from "react";
import Post from "./Post";
import "./Posts.css";

const Posts = (props) => {
  // Make sure the parent of Posts is passing the right props!
  const { likePost, posts } = props;

  return (
    <div className="posts-container-wrapper">
      {posts.map ((object) => {
        return < Post likePost = {likePost} post = {object} key = {object.id} />     
      })}
      {/* map through the posts here to return a Post component */}
      {/* Check the implementation of Post to see what props it requires! */}
    </div>
  );
};

export default Posts;
