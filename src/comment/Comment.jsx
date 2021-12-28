import InputForm from '../inputform/InputForm';

export default function Comment(props){
    return(
    <div>
    <div>
     <InputForm />
    </div>
    <div className="comment">
    <div className="username">{props.username}</div>
    <div className="text">{props.text}</div>
    <div className="rating">{props.rating}</div>
    </div>
    </div>)
}