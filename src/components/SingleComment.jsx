import {useState, useEffect} from "react";
import {useDispatch} from "react-redux";

import {commentDelete, commentUpdate} from "../redux/actions";

function SingleComment(props) {
    const {text, id} = props.data;

    const [commentText, setCommentText] = useState('');
    const dispatch = useDispatch();

    useEffect(() => {
        if (text) {
            setCommentText(text)
        }
    }, [text])

    const handleInput = (e) => {
        setCommentText(e.target.value);
    }

    const handleUpdate = (e) => {
        e.preventDefault()
        setCommentText(commentText)
        dispatch(commentUpdate(commentText, id));
    }

    const handleDelete = (e) => {
        e.preventDefault()
        dispatch(commentDelete(id))
    }

    return (
        <form onSubmit={handleUpdate} className='comments-item'>
            <div onClick={handleDelete} className='comments-item-delete'>&times;</div>
            <input type='text' value={commentText} onChange={handleInput}/>
            <input type='submit' hidden/>
        </form>
    )
}

export default SingleComment;