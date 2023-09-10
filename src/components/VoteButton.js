import React from 'react';
import '../styles/voteButton.css';

const VoteButton = (props) => {
  return (
    <button>{props.name}</button>
  )
}

export default VoteButton