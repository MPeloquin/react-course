import React, { Component } from "react";
import { connect } from "react-redux";
import { filterPolls } from "../actions/polls";
import { Link } from "react-router-dom";
import { hasVoted } from "../utils/helpers";

const FILTER_UNANSWERED = "FILTER_UNANSWERED";
const FILTER_ANSWERED = "FILTER_ANSWERED";

class Polls extends Component {
  render() {
    const { polls, currentUser, dispatch } = this.props;
    const { data, filter } = polls;

    var pollsUi = Object.keys(data).map(key => {
      const poll = data[key];

      if (
        (filter === FILTER_UNANSWERED && hasVoted(poll, currentUser)) ||
        (filter === FILTER_ANSWERED && !hasVoted(poll, currentUser))
      ) {
        return "";
      }

      return (
        <li key={key}>
          <Link to={`/polls/${poll.id}`}>{poll.question}</Link>
        </li>
      );
    });

    const style = key =>
      key === filter ? { textDecoration: "underline" } : {};

    return (
      <div>
        <div className="dashboard-toggle">
          <button
            style={style(FILTER_UNANSWERED)}
            onClick={() => dispatch(filterPolls(FILTER_UNANSWERED))}
          >
            Unanswered
          </button>
          <span> | </span>
          <button
            style={style(FILTER_ANSWERED)}
            onClick={() => dispatch(filterPolls(FILTER_ANSWERED))}
          >
            Answered
          </button>
        </div>
        <ul className="dashboard-list">{pollsUi}</ul>
      </div>
    );
  }
}

export default connect(state => ({
  polls: state.polls,
  currentUser: state.currentUser
}))(Polls);
