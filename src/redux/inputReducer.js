import {INPUT_TEXT} from "../types/types";

const initialText = {
    text: ''
}

export const inputReducer = (state = initialText, action) => {
    switch (action.type) {
        case INPUT_TEXT:
            return {
                ...state,
                text: action.text
            }
        default:
            return state
    }
}