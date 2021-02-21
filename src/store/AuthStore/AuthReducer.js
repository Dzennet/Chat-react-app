import { TOGGLE_IS_AUTH, UPDATE_AVATAR } from "./AuthConstants";

let initState = {
  login: "email@mail.ru",
  password: "qwerty12345",
  isAuth: true,
  avatar: null,
};

function AuthReducer(state = initState, action) {
  switch (action.type) {
    case TOGGLE_IS_AUTH:
      return {
        ...state,
        isAuth: !state.isAuth,
      };
    case UPDATE_AVATAR:
      return {
        ...state,
        image: URL.createObjectURL(action.image),
      };
    default:
      return state;
  }
}

export default AuthReducer;
