import { INIT_STATE } from "../../initState"
// import { getUser, getType } from "../actions";

// createCommentRequest: (payload) => payload,
// createCommentSuccess: (payload) => payload,
// createCommentFail: (err) => err,

export default function createComment(state = INIT_STATE.comment.data, action) {
    switch (action.type) {
        case 'createCommentRequest':

            return [
                ...state
            ]
        case 'createCommentSuccess':

            return [
                ...state,
                action.payload
            ]
        case 'createCommentFail':

            return {
                ...state,

            }

        default:
            return state;
    }

}