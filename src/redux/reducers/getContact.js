import { INIT_STATE } from "../../initState"
export default function getMyContact(state = INIT_STATE.Contact, action) {
    switch (action.type) {
        case 'getContactRequest':

            return {
                ...state
            }
        case 'getContactSuccess':

            return {

                ...state,
                Data: action.payload

            }
        case 'getContactFail':

            return {
                ...state,

            }

        default:
            return state;
    }

}