import React, { useContext } from "react";
import { AiFillDelete } from "react-icons/ai";
import { PostList } from "../Store/Social_Media_Store";

const Post = ({ post }) => {
  const { deletePost } = useContext(PostList);
  return (
    <div className="card " style={{ width: "70%" }}>
      <div className="card-body">
        {/* <h5 className="card-title">{post.id}</h5> */}
        <h5 className="card-title">{post.title}</h5>
        <span
          className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
          onClick={() => deletePost(post.id)}
        >
          <AiFillDelete />
        </span>
        <p className="card-text">{post.body}</p>
        {post.tags.map((tag) => (
          <span key={tag} className="badge text-bg-primary tags">
            {tag}
          </span>
        ))}
      </div>
      <div className="alert alert-success" role="alert">
        {`Yout post is reacted by ${post.reactions.likes} peoples 🎉`}
      </div>
    </div>
  );
};

export default Post;
