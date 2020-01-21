import { getInitialData } from "../utils/api";

export const RECEIVED_DATA = "RECEIVED_DATA";

function receiveData({ polls, users }) {
  return {
    type: RECEIVED_DATA,
    polls,
    users
  };
}

export function handleInitialData() {
  return dispatch => {
    getInitialData().then(function(data) {
      dispatch(receiveData(data));
    });
  };
}
