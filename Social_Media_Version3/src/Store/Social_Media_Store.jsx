import { createContext, useReducer, useState, useEffect } from "react";
import Post_List from "../Components/Post_List";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  fetching: false,
  deletePost: () => {},
});

const postListReducer = (currentPostList, action) => {
  let newPostList = currentPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currentPostList.filter(
      (post) => post.id !== action.payLoad.postId
    );
  } else if (action.type === "GET_INITIAL_POST") {
    newPostList = action.payLoad.posts;
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payLoad, ...currentPostList];
  }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListReducer, []);

  const addPost = (post) => {
    dispatchPostList({
      type: "ADD_POST",
      payLoad: post,
    });
  };

  const getInitialPosts = (posts) => {
    dispatchPostList({
      type: "GET_INITIAL_POST",
      payLoad: {
        posts,
      },
    });
  };

  const deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payLoad: {
        postId,
      },
    });
  };

  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    setFetching(true);
    fetch("https://dummyjson.com/posts", { signal })
      .then((res) => res.json())
      .then((data) => {
        getInitialPosts(data.posts);
        setFetching(false);
      });
    return () => {
      controller.abort();
      console.log("use effect aborted..");
    };
  }, []);

  return (
    <PostList.Provider value={{ postList, addPost, fetching, deletePost }}>
      {children}
    </PostList.Provider>
  );
};

export default PostListProvider;
