import React, { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../Store/Social_Media_Store";
import WelcomeMsg from "./WelcomeMsg";
import LoadingSpinner from "./LoadingSpinner";

const Post_List = () => {
  const { postList, fetching } = useContext(PostListData);

  return (
    <center>
      <div className="post-container">
        {fetching && <LoadingSpinner />}
        {!fetching && postList.length === 0 && <WelcomeMsg></WelcomeMsg>}

        {postList.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </center>
  );
};

export default Post_List;
