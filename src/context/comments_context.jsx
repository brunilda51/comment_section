import React, { createContext, useReducer, useEffect } from 'react';
import { commentReducer } from './commentReducer';

export const CommentsContext = createContext({});

const CommentContextProvider = (props) => {
    const [comments, setComments] =  useReducer(commentReducer, [], () => {
        return comments;
    })
    return(<CommentContext.Provider value={{ comments, setComments }}>
      <Comments />
    </CommentContext.Provider>)
}

export default CommentContextProvider;