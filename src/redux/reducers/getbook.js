import { INIT_STATE } from "../../initState"
export default function getMyBook(state = INIT_STATE.book, action) {
    switch (action.type) {
        case 'getBookRequest':

            return {
                ...state
            }
        case 'getBookSuccess':

            return {

                ...state,
                Data: action.payload

            }
        case 'getBookFail':

            return {
                ...state,

            }

        default:
            return state;
    }

}