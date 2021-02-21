import React from "react";
import { connect } from "react-redux";
import Dialogs from "../components/Dialogs/Dialogs";
import {
  addMessage,
  updateMessage,
  deleteMessage,
} from "../store/DialogsStore/DialogsActionCreators";

function DialogsContainer(props) {
  async function getGifs(term) {
    try {
      const resJson = await fetch(
        `https://api.giphy.com/v1/gifs/search?api_key=v9wY6vSjekwPAY6V0HDCAAL4cuLxTy2Y&q=${term}&limit=25&offset=0&rating=g&lang=en`
      );
      const res = await resJson.json();
      props.addMessage(props.chatName, "", res.data[0].images.downsized.url);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <Dialogs
      messageText={props.messageText}
      addMessage={props.addMessage}
      messages={props.messages}
      updateMessage={props.updateMessage}
      getGifs={getGifs}
      deleteMessage={props.deleteMessage}
      chatName={props.chatName}
    />
  );
}

let mapStateToProps = (state) => ({
  messageText: state.dialogsStore.messageText,
});

export default connect(mapStateToProps, {
  addMessage,
  deleteMessage,
  updateMessage,
})(DialogsContainer);
