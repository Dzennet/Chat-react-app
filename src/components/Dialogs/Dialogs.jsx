import React, { useState } from "react";
import s from "./Dialogs.module.css";
import Message from "../Message/Message";
import TextField from "@material-ui/core/TextField";
import Icon from "@material-ui/core/Icon";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";
import GifIcon from "@material-ui/icons/Gif";
import cn from "classnames";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
  margin: {
    margin: theme.spacing(1),
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "25ch",
  },
}));

function Dialogs(props) {
  const classes = useStyles();
  const [isVisible, setisVisible] = useState(false);
  const [term, updateTerm] = useState("");

  let sendMessage = () => {
    if (props.messageText.length > 0) {
      props.addMessage(props.chatName, props.messageText, null);
      props.updateMessage("");
    }
  };

  let messages = props.messages.map((message) => (
    <Message
      message={message.message}
      author={message.author}
      key={message.id}
      id={message.id}
      gifsUrl={message.gifsUrl}
      deleteMessage={props.deleteMessage}
    />
  ));
  return (
    <div className={s.dialogs}>
      <div className={s.dialogs__header}>{props.chatName}</div>

      <div className={s.dialogs__body}>
        <div className={s.dialogs__messages}>
          <div className={s.dialogs__messages_list}>{messages}</div>
        </div>
      </div>

      <div className={s.dialogs__chat}>
        <div className={s.dialogs__chat_input}>
          <TextField
            id="standard-full-width"
            value={props.messageText}
            onChange={(e) => props.updateMessage(e.target.value)}
            style={{ margin: 8 }}
            helperText="Напиши сюда!"
            margin="normal"
            multiline
            rowsMax={4}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            endIcon={<Icon>send</Icon>}
            onClick={() => sendMessage()}
            size="small"
            variant="outlined"
          >
            send
          </Button>
        </div>
        <div className={s.dialogs__chat_options}>
          <IconButton
            size="medium"
            color="primary"
            aria-label="gif"
            className={classes.margin}
            onClick={() => setisVisible(!isVisible)}
          >
            <GifIcon />
          </IconButton>

          <div className={cn({ [s.hide]: !isVisible }, s.gifs)}>
            <TextField
              id="margin-none"
              className={classes.textField}
              value={term}
              onChange={(e) => updateTerm(e.target.value)}
              size="small"
            />
            <IconButton
              className={s.gifs_send_btn}
              onClick={() => {
                props.getGifs(term);
                setisVisible(!isVisible);
              }}
              color="primary"
            >
              <AddIcon />
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dialogs;
