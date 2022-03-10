import {COMMENT_CREATE} from "../types/types";
import {errorOn} from "./actions";

const badWords = ['дебил', 'дурак'];

export function spamFilter({dispatch}) {
    return function (next) {
        return function (action) {
            if (action.type === COMMENT_CREATE) {
                const hasBadWords = badWords.some(res => action.data.text.toLowerCase().includes(res))
                if (hasBadWords) {
                    return dispatch(errorOn('УВАЖАЙТЕ ДРУГИХ'))
                }
            }
            return next(action);
        }
    }
}