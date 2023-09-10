/* shortcut for React template rafce
 -> short for  React arrow function component export
*/
import React from "react";
import "../styles/poll.css";
import VoteButton from "./VoteButton";
import VoterImage from "./VoterImage";

const Poll = (props) => {
  return (
    <div className="poll-container">
      {/* Polls Form */}
      <form>
        <div className="poll-heading-label">
          <div>
            What programming language do you use during the coding interview?
          </div>
        </div>
        <div className="radio-buttons">
          <label>
            <input type="radio" value="Python" name="python" />
            Python
          </label>
          <label>
            <input type="radio" value="JavaScript" name="javascript" />
            JavaScript
          </label>
          <label>
            <input type="radio" value="Go" name="go" />
            Go
          </label>
        </div>
        <div className="poll-footer-container">
          <div>
            {/* Voters Images Component */}
            <VoterImage />
          </div>
          <div>
            {/* Vote Button Component */}
            <VoteButton type="submit" name="Vote" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Poll;