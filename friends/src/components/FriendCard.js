import React, { Fragment } from "react";

function FriendCard(props) {
  const friend = props.friends.find(
    friend => friend.id == parseInt(props.match.params.friendId, 10)
  );
  function handleFriendDelete() {
    props.handleDelete(friend.id);
    props.history.push('/friends')
  }
  return (
    <Fragment>
    <h1>{friend.name}</h1>
    <p>Age: {friend.age}</p>
    <p>Email: {friend.email}</p>
    <button onClick={event => {
    event.preventDefault();
    props.goToUpdatePage(event, friend.id)
  }}>Update Information</button>
    <button onClick={handleFriendDelete}>Delete Friend</button>
    </Fragment>
  )}

export default FriendCard;
