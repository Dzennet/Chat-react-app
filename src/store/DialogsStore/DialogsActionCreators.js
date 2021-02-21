import {
  ADD_MESSAGE,
  DELETE_MESSAGE,
  UPDATE_MESSAGE,
} from "./DialogsConstants";

let messageId = 6;

export const addMessage = (chatName, message, gifsUrl) => ({
  type: ADD_MESSAGE,
  id: messageId++,
  chatName,
  message,
  gifsUrl,
});
export const deleteMessage = (messageId) => ({
  type: DELETE_MESSAGE,
  messageId,
});
export const updateMessage = (messageText) => ({
  type: UPDATE_MESSAGE,
  messageText,
});
