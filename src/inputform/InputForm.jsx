import { CommentsContext } from "../context/comments_context";
import { useState, useEffect, useContext, createContext } from "react";
import "./InputForm.css";

function InputForm(props){

    const [text, setText] = useState("");
    const [visible, setVisibility] = useState(props.visible);
    var {comments, setComments} = useContext(CommentsContext);

    useEffect(() => {
      if(!props.first) setVisibility(visible => !visible);
    }, [props.visible]);

    return (
        visible ? <div className="input_form" {...props}>
        <input
          placeholder="What are your thoughts?"
          value={text}
          onChange={value => {
            setText(value.target.value);
          }}
        />
        <div className="panel">
          <button className="comment_button" disabled={text.length === 0} onClick={() => { setText(''); if(!props.first) {setVisibility(false); } setComments({text: text, parentid: props.parentid})}}>Comment</button>
        </div>

       </div> : null

    ); }

export default InputForm;