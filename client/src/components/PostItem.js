import React from "react";
import { Link } from "react-router-dom";

const PostItem = ({ post, userName }) => {
  return (
    <div className="card mb-3" style={{ maxWidth: "100%", width: "100%" }}>
      <div className="row no-gutters">
        <div className="col-md-3">
          <Link to={`/posts/${post._id}`}>
            <img
              style={{
                maxHeight: "10rem",
                maxWidth: "100%",
                objectFit: "cover",
              }}
              src={`/api/v1/photos/uploads/${post.photo}`}
              className="card-img"
              alt="..."
            ></img>
          </Link>
        </div>

        <div className="col-md-9">
          <div className="card-body">
            <Link to={`/posts/${post._id}`}>
              <h5
                style={{ color: "#02729e", fontWeight: "bold" }}
                className="card-title"
              >
                {post.title}
              </h5>
            </Link>
            <p className="card-text">{post.teaser}</p>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <p style={{ marginBottom: 0 }} className="text-muted">
                {post.user.name}
              </p>
              <p style={{ marginBottom: 0 }} className="text-muted font-italic">
                {new Date(post.createdAt).toLocaleDateString()}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostItem;
