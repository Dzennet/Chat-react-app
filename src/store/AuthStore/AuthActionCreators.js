import { TOGGLE_IS_AUTH, UPDATE_AVATAR } from "./AuthConstants";

export const toggleIsAuth = () => ({
  type: TOGGLE_IS_AUTH,
});
export const updateAvatar = (image) => ({
  type: UPDATE_AVATAR,
  image,
});
