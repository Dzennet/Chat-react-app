import React from "react";
import { connect } from "react-redux";
import DialogsContainer from "../../containers/DialogsContainer";
function WorkDialogs(props) {
  return (
    <DialogsContainer chatName="Work Chat" messages={props.workMessages} />
  );
}
let mapStateToProps = (state) => ({
  workMessages: state.dialogsStore.messages.filter(
    (message) => message.chatName === "Work Chat"
  ),
});
export default connect(mapStateToProps, {})(WorkDialogs);
