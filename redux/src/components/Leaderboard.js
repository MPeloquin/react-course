import React, { Component } from "react";
import User from "./User";
import { connect } from "react-redux";

class Leaderboard extends Component {
  render() {
    const { usersObj } = this.props;

    const users = Object.values(usersObj);

    return (
      <div>
        <ul>
          {users.map(user => (
            <User user={user} key={user.id}></User>
          ))}
        </ul>
      </div>
    );
  }
}

export default connect(state => ({
  usersObj: state.users
}))(Leaderboard);
