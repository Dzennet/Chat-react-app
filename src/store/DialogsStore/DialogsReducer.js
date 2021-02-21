import {
  ADD_MESSAGE,
  DELETE_MESSAGE,
  UPDATE_MESSAGE,
} from "./DialogsConstants";

let initState = {
  messageText: "",
  messages: [
    {
      chatName: "Work Chat",
      author: "Ann",
      message: "I'm at work",
      id: 1,
      gifsUrl: null,
    },
    {
      chatName: "Friend's Chat",
      author: "Harry Potter",
      message: "Avada Kedavra!",
      id: 2,
      gifsUrl: null,
    },
    {
      chatName: "Friend's Chat",
      author: "Harry Potter",
      message: "",
      id: 3,
      gifsUrl:
        "https://media4.giphy.com/media/11WzxptsVKqEJa/giphy.gif?cid=a1080fd69je2qd9elozsvocj6i39yftbbumanquwh6pvnv99&rid=giphy.gif",
    },
    {
      chatName: "Work Chat",
      author: "Lora",
      message: "I'm too!",
      id: 4,
      gifsUrl: null,
    },
    {
      chatName: "Work Chat",
      author: "Lora",
      message: "",
      id: 5,
      gifsUrl:
        "https://media4.giphy.com/media/nCVVpakhBTwBi/giphy.gif?cid=a1080fd69inrejhg1xb1szvxpytfzx3ospz9wiibydad3u19&rid=giphy.gif",
    },
  ],
};

function DialogsReducer(state = initState, action) {
  switch (action.type) {
    case ADD_MESSAGE:
      return {
        ...state,
        messages: [
          ...state.messages,
          {
            chatName: action.chatName,
            author: "me",
            message: action.message,
            id: action.id,
            gifsUrl: action.gifsUrl,
          },
        ],
      };
    case DELETE_MESSAGE:
      return {
        ...state,
        messages: state.messages.filter(
          (message) => message.id !== action.messageId
        ),
      };
    case UPDATE_MESSAGE:
      return {
        ...state,
        messageText: action.messageText,
      };
    default:
      return state;
  }
}

export default DialogsReducer;
