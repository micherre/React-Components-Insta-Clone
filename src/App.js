/* 
Start here and work your way down the nested components.
Not all files in the project need code added.
Look at each file to see what props need to be passed.
*/

// Import the state hook
import React, { useState } from "react";
import Posts from "./components/Posts/Posts.js"
import SearchBar from "./components/SearchBar/SearchBar.js"
// Import the Posts (plural!) and SearchBar components, since they are used inside App component
import Data from "./dummy-data"
// Import the dummyData
import "./App.css";
// must wrap all info in a module in a function
const App = () => {
  // Create a state called 'posts' to hold the list of posts, initializing to dummyData.
  const [ posts, setPosts ] = useState(Data)
  // To make the search bar work (which is stretch) we'd need another state to hold the search term.

  const likePost = postId => {
    // This function is passed into nested components using props, to allow them to update application state.
    // It takes a post id as its only argument. The idea is to increase the 'likes' count of the post with the given `id`.
    // We will update the posts slice of state using `setPosts`, passing as the new state the invocation of `posts.map()`.
    // The callback passed into `posts.map()` performs the following logic:
    //  - if the `id` of the post matches `postId`, return a new post object containing an increased 'likes' count.
    //  - otherwise just return the post object unchanged.
    setPosts( 
    posts.map((postObj) => {
        if (postObj.id === postId){
        return {...postObj, likes: postObj.likes + 1}
        }
        else {return postObj}
      }))
  };
// SearchBar & Posts are the children modules of App
// likePost == banana if banana is on Posts page  {likePost} is that item in the language of the parent
  return (
    <div className="App">
      <SearchBar/> 
      <Posts likePost = {likePost} posts = {posts}/>
      {/* Add SearchBar and Posts here to render them */}
      {/* Check the implementation of each component, to see what props they require, if any! */}
    </div>
  );
};

export default App;
