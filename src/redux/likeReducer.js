import {INCREMENT, DECREMENT} from "../types/types";

const initialLikesState = {
    likes: 0
}

export const likesReducer = (state = initialLikesState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                likes: state.likes + 1
            }
        case DECREMENT:
            return {
                ...state,
                likes: state.likes - 1
            }
        default:
            return state
    }
}