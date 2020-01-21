import React from "react";

export default function User({ user }) {
  return (
    <li className="user">
      <img src={user.avatarURL} alt={`Avatar for ${user.name}`} />
      <div>
        <h1>{user.name}</h1>
        <p>{user.polls.length} Polls</p>
        <p>{user.answers.length} Answers</p>
      </div>
    </li>
  );
}
