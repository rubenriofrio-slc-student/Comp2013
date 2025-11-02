import React, { useEffect, useState } from 'react';
import PostsContainer from './Containers/PostsContainer';
import PostForm from './Containers/PostForm';
import './App.css';

//please refer to the comments at the bottom of this file for explanation of handler placement

function App() {
  const [data, setData] = useState([]);
  const [post, setPost] = useState({ title: '', body: '' });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
      .then((response) => response.json())
      .then((json) => setData(json)); setLoading(false);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!post.title || !post.body) return;
    const newPost = {
      id: data.length + 1,
      title: post.title,
      body: post.body,
    };
    setData([newPost, ...data]);
    setPost({ title: '', body: '' });
  };

  const handleChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  }


  return (
    <div className="app-container">
      <h1 className="app-title">Fake API App</h1>
      <PostForm
        post={post}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
      {loading ? <p>Loading...</p> : <PostsContainer posts={data} />}
    </div>
  );
}

export default App

/*
  I placed the handlers in the parent (App.jsx) because React’s official docs recommend “lifting state up” so the component that owns the data also owns the state updates, 
  and the form remains a controlled, presentational component that receives its handlers via props.

  https://react.dev/learn/sharing-state-between-components#lifting-state-up
  https://react.dev/learn/responding-to-events#passing-event-handlers-as-props
  https://react.dev/learn/thinking-in-react#step-4-identify-where-your-state-should-live
  https://kentcdodds.com/blog/application-state-management-with-react

  React documentation recommends placing shared state and handlers in the parent component so that data flows downward and UI components stay stateless (React.dev, “Sharing State Between Components”). 
  This aligns with the “lifting state up” pattern and ensures reusable and predictable behavior. Presentational components receive state and callback functions as props rather than owning logic 
  (Dodds, Application State Management in React).

  Visual flow of data and handlers:

    App (state + handlers)
  └── PostForm (inputs, calls parent handler)
  └── PostsContainer
        └── PostCard
  This structure keeps components focused on rendering UI while the parent manages state and logic, following React best practices.
*/