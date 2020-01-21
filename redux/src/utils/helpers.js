export function isObject(item) {
  return Object.prototype.toString.call(item) === "[object Object]";
}

export function getPercentage(count, total) {
  return total === 0 ? 0 : parseInt((count / total) * 100, 10);
}

export function hasVoted(post, user) {
  var votes = post.aVotes
    .concat(post.bVotes)
    .concat(post.cVotes)
    .concat(post.dVotes);

  return votes.indexOf(user.id) !== -1;
}
