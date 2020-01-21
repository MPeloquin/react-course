import { RECEIVED_DATA } from "../actions/shared";
import { VOTE_POLL, ADD_POLL } from "../actions/polls";

export default function users(state = [], action) {
  switch (action.type) {
    case RECEIVED_DATA:
      return action.users;
    case ADD_POLL:
      return {
        ...state,
        [action.user.id]: {
          ...state[action.user.id],
          polls: state[action.user.id].answers.concat(action.poll.id)
        }
      };
    case VOTE_POLL:
      return {
        ...state,
        [action.userId]: {
          ...state[action.userId],
          answers: state[action.userId].answers.concat(action.postId)
        }
      };
    default:
      return state;
  }
}
