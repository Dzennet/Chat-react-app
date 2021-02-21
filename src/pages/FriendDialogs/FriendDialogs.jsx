import React from "react";
import { connect } from "react-redux";
import DialogsContainer from "../../containers/DialogsContainer";

function FriendDialogs(props) {
  return (
    <DialogsContainer chatName="Friend's Chat" messages={props.workMessages} />
  );
}
let mapStateToProps = (state) => ({
  workMessages: state.dialogsStore.messages.filter(
    (message) => message.chatName === "Friend's Chat"
  ),
});
export default connect(mapStateToProps, {})(FriendDialogs);
