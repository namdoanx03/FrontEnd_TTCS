import { INIT_STATE } from "../../initState"
// import { getUser, getType } from "../actions";

export default function registerReducers(state = INIT_STATE, action) {
    switch (action.type) {
        case 'createUserRequest':

            return {
                ...state,
            }
        case 'createUserSuccess':

            return {
                ...state,
            }
        case 'createUserFail':

            return {
                ...state,
            }

        default:
            return state;
    }

}