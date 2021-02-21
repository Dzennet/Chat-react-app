import React from "react";
import "./App.css";
import Container from "@material-ui/core/Container";
import Sidebar from "./components/Sidebar/Sidebar";
import { Redirect, Route } from "react-router-dom";
import { connect } from "react-redux";
import LoginContainer from "./containers/LoginContainer";
import WorkDialogs from "./pages/WorkDialogs/WorkDialogs";
import FriendDialogs from "./pages/FriendDialogs/FriendDialogs";

function App(props) {
  if (!props.isAuth) {
    return <LoginContainer />;
  }

  return (
    <Container>
      <div className="app">
        <Sidebar />
        <div className="app-content">
          <Route
            exact
            path="/"
            render={() => <Redirect to="/dialogs/work" />}
          />
          <Route path="/dialogs/work" component={WorkDialogs} />
          <Route path="/dialogs/friend" component={FriendDialogs} />
        </div>
      </div>
    </Container>
  );
}
let mapStateToProps = (state) => ({
  isAuth: state.authStore.isAuth,
});
export default connect(mapStateToProps, {})(App);
