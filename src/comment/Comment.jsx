import './Comment.css';
import { useState, useContext} from 'react';
import CommentsContextProvider, {CommentsContext} from '../context/comments_context';
import InputForm from '../inputform/InputForm';
import { renderComments } from '../comments/Comments';

function Comment(props) {
    const [show, setShow] = useState(true);
    // const [replying, setReplying] = useContext(CommentContext);
    // const [minimized, setMinimized] = useState(false);
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
                <InputForm visible={show} parentid={props.id} /> 
            </div>
            <div className={`comments`}>
                    {renderComments(props.comments)}
                </div>
        </div>
    )
}

export default Comment;

