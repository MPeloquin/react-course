import React from "react";
import { getPercentage } from "../utils/helpers";

export function PollOption({ poll, option, showResults, chosen, onClick }) {
  let body;

  if (showResults) {
    body = (
      <div className="result">
        <span>{option.text}</span>
        <span>
          {getPercentage(
            option.votes.length,
            poll.aVotes.length +
              poll.bVotes.length +
              poll.cVotes.length +
              poll.dVotes.length
          )}
          % ({option.votes.length})
        </span>
      </div>
    );
  } else {
    body = option.text;
  }

  return (
    <li
      className={`option ${chosen ? "chosen" : ""}`}
      onClick={() => showResults || onClick()}
    >
      {body}
    </li>
  );
}
