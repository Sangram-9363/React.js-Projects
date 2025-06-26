import React, { useContext, useId, useRef } from "react";
import { PostList } from "../Store/Social_Media_Store";

const Create_Post = () => {
  const { addPost } = useContext(PostList);

  const idElement = useRef();
  const titleElement = useRef();
  const bodyElement = useRef();
  const reactionsElement = useRef();
  const tagsElement = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const userId = idElement.current.value;
    const title = titleElement.current.value;
    const body = bodyElement.current.value;
    const reactions = {
      likes: reactionsElement.current.value,
    };
    const tags = tagsElement.current.value.split(" ");

    if (!userId || !title || !body || !reactions || !tags.length === 0) {
      alert(`please fill the valid post details..`);
      return;
    } else {
      fetch("https://dummyjson.com/posts/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId,
          title,
          body,
          reactions,
          tags,
        }),
      })
        .then((res) => res.json())
        .then((postData) => addPost(postData));

      idElement.current.value = "";
      titleElement.current.value = "";
      bodyElement.current.value = "";
      reactionsElement.current.value = "";
      tagsElement.current.value = "";
      alert("Post sucessfully done...");
    }
  };

  return (
    <form className="form-design" onSubmit={(event) => handleSubmit(event)}>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label fw-bold">
          Enter Your User ID Here
        </label>
        <input
          type="text"
          ref={idElement}
          className="form-control"
          placeholder="Your user Id"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label fw-bold">
          Post Title
        </label>
        <input
          type="text"
          ref={titleElement}
          className="form-control"
          placeholder="How are you feeling today..."
        />
      </div>

      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label fw-bold">
          Post Content
        </label>
        <input
          type="text"
          ref={bodyElement}
          className="form-control"
          placeholder="Tell us more about it"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label fw-bold">
          Number of Reactions
        </label>
        <input
          type="text"
          ref={reactionsElement}
          className="form-control"
          placeholder="How many people reacted to this post"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="tags" className="form-label fw-bold">
          Enter your hashtags here
        </label>
        <input
          type="text"
          ref={tagsElement}
          className="form-control"
          id="tags"
          placeholder="Please enter tags using space"
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Create Post
      </button>
    </form>
  );
};

export default Create_Post;
