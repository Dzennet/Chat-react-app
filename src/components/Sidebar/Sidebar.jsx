import React from "react";
import s from "./Sidebar.module.css";
import WorkIcon from "@material-ui/icons/Work";
import SendIcon from "@material-ui/icons/Send";
import userPhoto from "../../common/img/sidebar/user.png";
import IconButton from "@material-ui/core/IconButton";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import { makeStyles } from "@material-ui/core/styles";
import { updateAvatar } from "../../store/AuthStore/AuthActionCreators";
import { connect } from "react-redux";
import SidebarDialog from "./SidebarDialog/SidebarDialog";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  input: {
    display: "none",
  },
}));

function Sidebar(props) {
  const classes = useStyles();

  const onSelectedMainPhoto = (e) => {
    if (e.target.files.length) {
      props.updateAvatar(e.target.files[0]);
    }
  };

  return (
    <div className={s.sidebar}>
      <div className={s.sidebar__my_info}>
        <div className={s.sidebar__avatar}>
          <img src={props.image || userPhoto} alt="user" />
        </div>
        <input
          accept="image/*"
          className={classes.input}
          id="icon-button-file"
          type="file"
          color="action"
          onChange={onSelectedMainPhoto}
        />
        <label htmlFor="icon-button-file">
          <IconButton
            color="primary"
            aria-label="upload picture"
            component="span"
          >
            <PhotoCamera />
          </IconButton>
        </label>
        <div className={s.sidebar__login}>{props.login}</div>
      </div>

      <nav className={s.sidebar__dialogs}>
        <SidebarDialog
          title="Work Chat"
          icon={<WorkIcon color="action" />}
          path="/dialogs/work"
        />
        <SidebarDialog
          title="Friend's Chat"
          icon={<SendIcon color="action" />}
          path="/dialogs/friend"
        />
      </nav>
    </div>
  );
}

let mapStateToProps = (state) => ({
  image: state.authStore.image,
  login: state.authStore.login,
});

export default connect(mapStateToProps, { updateAvatar })(Sidebar);
