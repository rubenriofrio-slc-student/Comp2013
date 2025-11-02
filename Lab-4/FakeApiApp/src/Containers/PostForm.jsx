import React from "react";
import "../App.css";

function PostCard({ post, onChange, onSubmit }) {
    return (
        <form className="post-form" onSubmit={onSubmit}>
            <h2>Post Form</h2>
            <label>
                Title:
                <input type="text" name="title" value={post.title} onChange={onChange} />
            </label>
            <label>
                Body:
                <textarea name="body" value={post.body} onChange={onChange} />
            </label>
            <button type="submit">Submit</button>
        </form>    
    );
}
export default PostCard;