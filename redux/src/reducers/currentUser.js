import { RECEIVED_DATA } from "../actions/shared";

export default function currentUser(state = {}, action) {
  switch (action.type) {
    case RECEIVED_DATA:
      return Object.values(action.users)[1];
    default:
      return state;
  }
}
