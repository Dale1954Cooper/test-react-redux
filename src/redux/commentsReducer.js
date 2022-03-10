import {COMMENT_CREATE, COMMENT_DELETE, COMMENT_UPDATE, COMMENTS_LOAD} from "../types/types";

const initialState = {
    comments: []
}

export const commentsReducer = (state = initialState, action) => {
    const {data} = action;
    const {comments} = state;

    switch (action.type) {
        case COMMENT_CREATE:
            return {
                ...state,
                comments: [...state.comments, action.data]
            }

        case COMMENT_UPDATE:
            const indexUpdateItem = comments.findIndex(comment =>
                comment.id === data.id
            )
            const newUpdateComments = [
                ...comments.slice(0, indexUpdateItem),
                data,
                ...comments.slice(indexUpdateItem + 1)
            ];
            return {
                ...state,
                comments: newUpdateComments
            }

        case COMMENT_DELETE:
            const indexDeleteItem = comments.findIndex(comments =>
                comments.id === data.id
            )
            const newDeleteComments = [
                ...comments.slice(0, indexDeleteItem),
                ...comments.slice(indexDeleteItem + 1)
            ];
            return {
                ...state,
                comments: newDeleteComments
            }

        case COMMENTS_LOAD:
            const commentsNew = data.map(res => {
                return {
                    text: res.name,
                    id: res.id
                }
            })

            return {
                ...state,
                comments: commentsNew
            }

        default:
            return state
    }
}