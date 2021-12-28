import './Comment.css';
import { useState } from 'react';
import CommentsContextProvider from '../context/comments_context';
import InputForm from '../inputform/InputForm';
import { renderComments } from '../comments/Comments';

function Comment(props) {
    const [show, setShow] = useState(true)
    const toggleReply = () => setShow(!show)

    return (
        <div className="comment" {...props}>
            <div className="user_info">
            <div className="profile"></div>
            <div className="username">{props.username}</div>
            </div>
            <div className="text">{props.text}</div>
            <div className="cta">
                <a className="cta_link" onClick={toggleReply}>Reply</a>
                <a className="cta_link">Share</a>
                <a className="cta_link">Report</a>
              <CommentsContextProvider> 
                    <InputForm parentid={props.id} />  </CommentsContextProvider>
             
            </div>
            <div className={`comments`}>
                    {renderComments(props.comments)}
                </div>
        </div>
    )
}

export default Comment;

