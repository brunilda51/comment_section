import { CommentsContext } from "../context/comments_context";
import { useState, useEffect, useContext, createContext } from "react";
import "./InputForm.css";

function InputForm(props){
    const [text, setText] = useState("");
    var {comments, setComments} = useContext(CommentsContext);
    return (
        <div className="input_form" {...props}>
        <input
          placeholder="What are your thoughts?"
          onChange={value => {
            setText(value.target.value);
          }}
        />
        <div className="panel">
          <button className="comment_button" onClick={() => setComments({text: text, parentid: props.parentid})}>COMMENT</button>
        </div>

       </div>

    ); }

export default InputForm;