import React from "react";
import s from "./Message.module.css";
import DeleteIcon from "@material-ui/icons/Delete";

function Message(props) {
  return (
    <div className={props.author === "me" ? s.my_message : s.message}>
      <div className={s.message__wrapper}>
        {props.author !== "me" && (
          <div className={s.message__author}>{props.author}</div>
        )}
        <div className={s.message__body}>
          <div className={s.message__options}>
            <div
              onClick={() => props.deleteMessage(props.id)}
              className={s.message__options_delete}
            >
              <DeleteIcon fontSize="small" />
            </div>
          </div>
          <div className={s.message__body_inner}>
            {props.gifsUrl ? (
              <div className={s.message__body_gif}>
                <img src={props.gifsUrl} alt="" />
              </div>
            ) : null}
            <div className={s.message__body_text}>{props.message}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Message;
