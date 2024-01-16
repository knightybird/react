import React, { useState, useEffect } from "react";

const App = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      const response = await fetch(
        "https://knightyb.000webhostapp.com/wp-json/wp/v2/posts"
      )

      const posts = await response.json();
      setPosts(posts);

    }
    fetchPosts();
  },[]);
  return (
    <div>
      {posts.map((post, index) => (
        <div key={index}>
          <p dangerouslySetInnerHTML={{__html: post.title.rendered}}/>
          <p dangerouslySetInnerHTML={{__html: post.content.rendered}}/>
        </div>
        ))}
    </div>
  );
}

export default App;
