import { RECEIVED_DATA } from "../actions/shared";
import { ADD_POLL, FILTER_POLLS, VOTE_POLL } from "../actions/polls";

export default function polls(state = [], action) {
  switch (action.type) {
    case RECEIVED_DATA:
      return { data: Object.values(action.polls), filter: "FILTER_UNANSWERED" };
    case ADD_POLL:
      action.poll.author = action.user.id;
      return { ...state, data: state.data.concat(action.poll) };
    case VOTE_POLL:
      const answeredPoll = state.data.find(p => p.id === action.pollId);

      const newPoll = {
        ...answeredPoll,
        [action.answer + "Votes"]: answeredPoll[action.answer + "Votes"].concat(
          action.userId
        )
      };

      return {
        data: state.data.filter(p => p.id !== action.pollId).concat(newPoll),
        filter: state.filter
      };
    case FILTER_POLLS:
      return { ...state, filter: action.filter };
    default:
      return state;
  }
}
