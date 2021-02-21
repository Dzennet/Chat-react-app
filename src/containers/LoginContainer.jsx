import React from "react";
import { connect } from "react-redux";
import { toggleIsAuth } from "../store/AuthStore/AuthActionCreators";
import Login from "../pages/Login/Login";

function LoginContainer(props) {
  return (
    <Login
      login={props.login}
      password={props.password}
      isAuth={props.isAuth}
      toggleIsAuth={props.toggleIsAuth}
    />
  );
}
let mapStateToProps = (state) => ({
  login: state.authStore.login,
  password: state.authStore.password,
  isAuth: state.authStore.isAuth,
});
export default connect(mapStateToProps, { toggleIsAuth })(LoginContainer);
