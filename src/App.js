import { useContext } from 'react/cjs/react.production.min';
import './App.css';
import Comments from './comments/Comments';
import { CommentsContext } from './context/comments_context';
import CommentContextProvider from './context/comments_context';
function App() {
  const [comment, setComments] = useContext(CommentsContext);
  return (
    <div className="App">
      <CommentContextProvider value={{comment, setComments}}>
        <Comments />
      </CommentContextProvider>
    </div>
  );
}

export default App;
