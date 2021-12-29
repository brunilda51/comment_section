import './App.css';
import React from 'react';
import Comments from './comments/Comments';
import HeaderForum from './headerforum/HeaderForum';
import CommentsContextProvider from './context/comments_context';
function App() {

  return (
    <div className="App">
      <HeaderForum></HeaderForum>
     <CommentsContextProvider>
      <Comments />
      </CommentsContextProvider>

    </div>
  );
}


export default App;
