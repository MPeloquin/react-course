import { savePollAnswer, savePoll } from "../utils/api";

export const ADD_POLL = "ADD_POLL";
export const FILTER_POLLS = "FILTER_POLLS";
export const VOTE_POLL = "VOTE_POLL";

export function addPoll(poll, user) {
  return { type: ADD_POLL, poll, user };
}

export function filterPolls(filter) {
  return { type: FILTER_POLLS, filter };
}

function votePoll(pollId, userId, answer) {
  return { type: VOTE_POLL, pollId, userId, answer };
}

export function handleVotePoll(poll, user, answer) {
  return dispatch => {
    return savePollAnswer({ authedUser: user.id, id: poll.id, answer }).then(
      () => {
        dispatch(votePoll(poll.id, user.id, answer));
      }
    );
  };
}

export function handleAddPoll(poll, user) {
  return dispatch => {
    return savePoll(poll).then(newPoll => {
      console.log(newPoll);
      dispatch(addPoll(newPoll, user));
    });
  };
}
