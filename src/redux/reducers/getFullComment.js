import { INIT_STATE } from "../../initState"
export default function getFullComment(state = INIT_STATE.comment, action) {
    switch (action.type) {
        case 'getFullCommentRequest':

            return {
                ...state,
            }
        case 'getFullCommentSuccess':

            return  {
                ...state,
                data : action.payload
            }
        case 'getFullCommentFail':

            return {
                ...state,

            }

        default:
            return state;
    }

}