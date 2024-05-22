import { INIT_STATE } from "../../initState"
// import { getUser, getType } from "../actions";

// getUserActionRequest: (payload) => payload,
// getUserActionSuccess: (payload) => payload,
// getUserActionFail: (err) => err,
export default function createComment(state = INIT_STATE.detailUserLogin, action) {
    switch (action.type) {
        case 'getUserActionRequest':

            return {
                ...state,
            }
        case 'getUserActionSuccess':

            return {
                ...state,
                data : action.payload
            }
        case 'getUserActionFail':

            return {
                ...state,
                
            }

        default:
            return state;
    }

}