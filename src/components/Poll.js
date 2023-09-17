/* shortcut for React template rafce
 -> short for  React arrow function component export
*/
import React from "react";
import "../styles/poll.css";
import VoteButton from "./VoteButton";
import VoterImage from "./VoterImage";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";




const Poll = () => {
  return (
    <div className="poll-container">
      {/* Polls Form */}
      <form>
        <div className="poll-heading">
          <div>
            What programming language do you use during the coding interview?
          </div>
        </div>
        <div className="radio-buttons">
          <label>
            <input type="radio" value="python" name="language" />
            Python
          </label>
          <label>
            <input
              checked
              type="radio"
              value="javascript"
              name="language"
            />
            JavaScript
          </label>
          <label>
            <input type="radio" value="go" name="language" />
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
