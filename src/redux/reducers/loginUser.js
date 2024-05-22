import { INIT_STATE } from "../../initState"

export default function loginReducers(state = INIT_STATE.user, action) {
  switch (action.type) {
    case 'getUserRequest':

      return {
        ...state,
      }
    case 'getUserSuccess':

      if (action.payload.errcode === 0) {

        return {
          ...state,
          isLogin: true,
          data_user: action.payload,
        }
      }
      else {

        return {
          ...state,
          isLogin: false,
          data_user: action.payload,

        }
      }
    case 'getUserFail':

      return {
        ...state,
        isLogin: false,
      }
    default:
      return state;
  }
}