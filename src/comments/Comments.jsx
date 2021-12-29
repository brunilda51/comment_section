import React, { useContext}  from 'react';
import CommentContextProvider, { CommentsContext } from '../context/comments_context';
import Comment from '../comment/Comment';
import './Comments.css';
import CommentContext from '../comment/Comment';
import InputForm from '../inputform/InputForm';

export const renderComments = (props) => {
    if(!props) {props = []}
    return props.map((comment, i) => {
        return (<Comment
            username={comment.username}
            id={comment.id}
            date={comment.date}
            text={comment.text}
            votes={comment.votes}
            key={i}
            comments={comment.comments}
        />)
    })
}

function Comments(props){
    const { comments, setComments } = useContext(CommentsContext);
    return (<div className="comments">
        <InputForm visible="true" first="true" />
        {renderComments(comments)}
    </div>)
}

export default Comments;