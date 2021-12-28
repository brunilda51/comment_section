import Comment from '../comment/Comment';

function generate_comments(props) {
    props.comments.map(comment => {
        return (<Comment
            username={comment.username}
            text={comment.text}
            rating={comment.rating}
        />)
    })
}
export default function Comments(props) {
    return (<div className="coments">
        {generate_comments(props)}
    </div>)
}