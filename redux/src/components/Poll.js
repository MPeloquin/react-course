import React, { Component } from "react";
import { connect } from "react-redux";
import UserAvatar from "./UserAvatar";
import { hasVoted } from "../utils/helpers";
import { PollOption } from "./PollOption";
import { handleVotePoll } from "../actions/polls";

class Poll extends Component {
  vote(poll, answer) {
    const { dispatch, currentUser } = this.props;

    dispatch(handleVotePoll(poll, currentUser, answer));
  }

  render() {
    const pollId = this.props.match.params.pollId;

    const { polls, currentUser } = this.props;
    const poll = polls.data.find(p => p.id === pollId);

    if (!poll) return "Not found! :(";

    const voted = hasVoted(poll, currentUser);

    return (
      <div className="poll-container">
        <h1>{poll.question}</h1>
        <div className="poll-author">
          By <UserAvatar id={poll.author}></UserAvatar>
        </div>
        <ul>
          <PollOption
            poll={poll}
            option={{ text: poll.aText, votes: poll.aVotes }}
            showResults={voted}
            chosen={poll.aVotes.includes(currentUser.id)}
            onClick={() => this.vote(poll, "a")}
          ></PollOption>
          <PollOption
            poll={poll}
            option={{ text: poll.bText, votes: poll.bVotes }}
            showResults={voted}
            chosen={poll.bVotes.includes(currentUser.id)}
            onClick={() => this.vote(poll, "b")}
          ></PollOption>
          <PollOption
            poll={poll}
            option={{ text: poll.cText, votes: poll.cVotes }}
            showResults={voted}
            chosen={poll.cVotes.includes(currentUser.id)}
            onClick={() => this.vote(poll, "c")}
          ></PollOption>
          <PollOption
            poll={poll}
            option={{ text: poll.dText, votes: poll.dVotes }}
            showResults={voted}
            chosen={poll.dVotes.includes(currentUser.id)}
            onClick={() => this.vote(poll, "d")}
          ></PollOption>
        </ul>
      </div>
    );
  }
}

export default connect(state => ({
  polls: state.polls,
  currentUser: state.currentUser
}))(Poll);
