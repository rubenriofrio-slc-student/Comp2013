import React, { useEffect, useState } from 'react';
import PostsContainer from './PostsContainer';
import PostForm from './PostForm';

function FakeApiApp() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newPost, setNewPost] = useState({ title: '', body: '' });

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
      .then((response) => response.json())
      .then((json) => {
        setData(json);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const handleChange = (e) => {
    setNewPost({ ...newPost, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newPost.title || !newPost.body) return;
    const post = {
      id: data.length + 1,
      title: newPost.title,
      body: newPost.body,
    };
    setData([post, ...data]);
    setNewPost({ title: '', body: '' });
  };

  return (
    <div className="app-container">
      <h1 className="app-title">Fake API App</h1>
      <PostForm post={newPost} onChange={handleChange} onSubmit={handleSubmit} />
      {loading ? <p>Loading...</p> : <PostsContainer posts={data} />}
    </div>
  );
}

export default FakeApiApp;