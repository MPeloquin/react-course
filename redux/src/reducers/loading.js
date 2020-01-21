import { RECEIVED_DATA } from "../actions/shared";

export default function loading(state = true, action) {
  switch (action.type) {
    case RECEIVED_DATA:
      return false;
    default:
      return state;
  }
}
