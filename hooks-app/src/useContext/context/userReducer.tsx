import {type UserState} from "./UserContext";
import {type User} from "../data/user.mock";

type UserActions =
  | {type: "login", payload: User}
  | {type: "logout"};

export const userReducer = (state: UserState, action: UserActions) => {
  switch (action.type) {
    case "login":
      return {
        ...state,
        authStatus: "authenticated",
        user: action.payload
      }
    case "logout":
      return {
        ...state,
        authStatus: "no-authenticated",
        user: null
      }
    default:
      return state;
  }
}
