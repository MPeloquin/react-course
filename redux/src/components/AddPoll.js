import React, { Component } from "react";
import { connect } from "react-redux";
import { handleAddPoll } from "../actions/polls";

class AddPoll extends Component {
  constructor(props) {
    super(props);

    this.state = { poll: { a: "", b: "", c: "", d: "", question: "" } };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleQuestionChange = this.handleQuestionChange.bind(this);
  }

  handleAnswerChange(answer, event) {
    const answerText = event.target.value;
    this.setState(state => ({
      poll: { ...state.poll, [answer]: answerText }
    }));
  }

  handleQuestionChange(event) {
    const questionText = event.target.value;
    this.setState(state => ({
      poll: { ...state.poll, question: questionText }
    }));
  }

  handleSubmit(event) {
    event.preventDefault();

    this.props.dispatch(handleAddPoll(this.state.poll, this.props.currentUser));
  }

  render() {
    return (
      <form className="add-form" onSubmit={this.handleSubmit}>
        <h3>What is your question?</h3>
        <input
          type="text"
          value={this.state.poll.question}
          onChange={this.handleQuestionChange}
          name="question"
          className="input"
        />
        <h3>What are the options?</h3>
        <label className="label" htmlFor="input">
          A.
        </label>
        <input
          type="text"
          value={this.state.poll.a}
          onChange={event => this.handleAnswerChange("a", event)}
          name="question"
          className="input"
        />
        <label className="label" htmlFor="input">
          B.
        </label>
        <input
          type="text"
          value={this.state.poll.b}
          onChange={event => this.handleAnswerChange("b", event)}
          name="question"
          className="input"
        />
        <label className="label" htmlFor="input">
          C.
        </label>
        <input
          type="text"
          value={this.state.poll.c}
          onChange={event => this.handleAnswerChange("c", event)}
          name="question"
          className="input"
        />
        <label className="label" htmlFor="input">
          D.
        </label>
        <input
          type="text"
          value={this.state.poll.d}
          onChange={event => this.handleAnswerChange("d", event)}
          name="question"
          className="input"
        />
        <button className="btn" type="submit">
          Submit
        </button>
      </form>
    );
  }
}

export default connect(state => ({
  polls: state.polls,
  currentUser: state.currentUser
}))(AddPoll);
