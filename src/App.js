import './App.css';
import React from 'react';
import Comments from './comments/Comments';
import CommentsContextProvider from './context/comments_context';
function App() {

  return (
    <div className="App">
     <CommentsContextProvider>
        <Comments />
      </CommentsContextProvider>
    </div>
  );
}


export default App;
