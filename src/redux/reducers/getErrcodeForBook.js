import { INIT_STATE } from "../../initState"
export default function getErrCodeBook(state = INIT_STATE.errCodeBook, action) {
    switch (action.type) {
        case 'createBookRequest':

            return {
                ...state
            }
        case 'createBookSuccess':

            return {

                ...state,
                errCode: action.payload

            }
        case 'createBookFail':

            return {
                ...state,

            }

        default:
            return state;
    }

}