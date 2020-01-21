import React, { Component } from "react";
import { connect } from "react-redux";

class UserAvatar extends Component {
  render() {
    const { id, users } = this.props;
    const user = users[id];
    return <img src={user.avatarURL} alt="Author's avatar"></img>;
  }
}

export default connect(state => ({
  users: state.users
}))(UserAvatar);
