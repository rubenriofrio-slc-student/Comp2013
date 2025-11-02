import React from "react";
import PostCard from "./PostCard";
import "../App.css";

function PostsContainer({ posts }) {
    return (
        <div className="posts-container">
            {posts.map((post) => (
                <PostCard key={post.id} post={post} />
            ))}
        </div>
    );
}
export default PostsContainer;