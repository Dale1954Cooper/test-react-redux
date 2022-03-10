import {useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import uniqId from 'uniqid';

import {commentCreate, commentsLoad} from "../redux/actions";
import SingleComment from "./SingleComment";


function Comments(props) {
    const [textComment, setTextComment] = useState('');
    const dispatch = useDispatch();
    const comments = useSelector(state => {
        const {commentsReducer} = state;
        return commentsReducer.comments;
    })
    useEffect(() => {
        dispatch(commentsLoad())
    }, []);

    const handleInput = (e) => {
        setTextComment(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const id = uniqId();
        dispatch(commentCreate(textComment, id));
    }

    return (
        <div className='card-comments'>
            <form onSubmit={handleSubmit} className='comments-item-create'>
                <input type='text' value={textComment} onChange={handleInput}/>
                <input type='submit' hidden/>
            </form>
            {comments.length !== 0 ? comments.map(comment => {
                return <SingleComment key={comment.id} data={comment}/>
            }) : null}
        </div>
    )
}

export default Comments;