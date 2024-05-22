import { INIT_STATE } from "../../initState"

export default function getfullUser(state = INIT_STATE.doctors, action) {
    switch (action.type) {
        case 'getFullUserRequest':

            return {
                ...state,
            }
        case 'getFullUserSuccess':

            return {
                ...state,
                data : action.payload
            }
        case 'getFullUserFail':
            return {
                ...state,

            }
        default:
            return state;
    }

}