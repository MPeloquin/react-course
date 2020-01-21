import React, { Component } from "react";
import { handleInitialData } from "../actions/shared";
import { connect } from "react-redux";
import Polls from "./Polls";
import Poll from "./Poll";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import Leaderboard from "./Leaderboard";
import AddPoll from "./AddPoll";

class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(handleInitialData());
  }

  render() {
    const { loading } = this.props;

    const body =
      loading === true ? (
        <h3>Loading</h3>
      ) : (
        <Switch>
          <Route exact path="/">
            <Polls />
          </Route>
          <Route path="/polls/:pollId" component={Poll}></Route>
          <Route path="/leaderboard">
            <Leaderboard></Leaderboard>
          </Route>
          <Route path="/" component={AddPoll}></Route>
        </Switch>
      );

    return (
      <Router>
        <div className="container">
          <nav className="nav">
            <ul>
              <li>
                <NavLink exact activeClassName="active" to="/">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName="active" to="/leaderboard">
                  Leaderboard
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName="active" to="/add">
                  Add Poll
                </NavLink>
              </li>
            </ul>
          </nav>

          {body}
        </div>
      </Router>
    );
  }
}

export default connect(state => ({
  loading: state.loading
}))(App);
