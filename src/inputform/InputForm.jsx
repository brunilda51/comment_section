import "./InputForm.css";

export default function(props){
    return(<div className="comment_input">
        <form className="comment_form">
            <input type="text" placeholder="Please enter your comment"/>
        </form>
    </div>)
}