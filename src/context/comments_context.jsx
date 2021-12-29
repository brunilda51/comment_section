import { createContext, useReducer, useEffect } from 'react';
import Comments from '../comments/Comments';
import { commentReducer } from './comment_reducer';
import InputForm from '../inputform/InputForm';
export const CommentsContext = createContext({});


const CommentsContextProvider = (props) => {
    var [comments, setComments] = useReducer(commentReducer, [], () => {
        return comments; 
      });
    
      return (
        <div {...props}>
           <CommentsContext.Provider value={{comments, setComments}}>
            <Comments />
            </CommentsContext.Provider>
        </div> 
      );
}

export default CommentsContextProvider;


