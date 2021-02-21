import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import s from "./Login.module.css";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

function Login(props) {
  const classes = useStyles();
  const [login, setlogin] = useState("");
  const [password, setpassword] = useState("");
  const [isAuthDataCorrect, setisAuthDataCorrect] = useState(true);

  const authDataSend = (login, password) => {
    if (login === props.login && password === props.password) {
      props.toggleIsAuth();
    } else {
      setisAuthDataCorrect(false);
    }
  };

  return (
    <div className={s.auth}>
      <form className={s.auth_form} noValidate autoComplete="off">
        <TextField
          id="standard-required"
          className={s.auth_form__input}
          label="Login"
          value={login}
          onChange={(e) => {
            setlogin(e.target.value);
          }}
        />

        <TextField
          id="standard-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          className={s.auth_form__input}
          value={password}
          onChange={(e) => {
            setpassword(e.target.value);
          }}
        />

        <div className={s.auth_form__btn}>
          <Button
            variant="outlined"
            size="small"
            color="primary"
            className={classes.margin}
            onClick={() => {
              authDataSend(login, password);
            }}
          >
            Войти
          </Button>
        </div>
        {!isAuthDataCorrect && (
          <div className={s.auth_form__error}>
            Error: Incorrect or invalid login/password
          </div>
        )}
      </form>
    </div>
  );
}

export default Login;
