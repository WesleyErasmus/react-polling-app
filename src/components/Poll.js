/* shortcut for React template rafce
 -> short for  React arrow function component export
*/
import React, { useState } from "react";
import "../styles/poll.css";
import VoteButton from "./VoteButton";
import VoterImage from "./VoterImage";

const Poll = () => {
  // Initialize a state variable to track the selected programming language. Set to an empty string
  const [selectedLanguage, setSelectedLanguage] = useState("");

  return (
    <div className="poll-container">
      {/* Polls Form */}
      <form>
        <div className="poll-heading">
          <div>
            What programming language do you use during the coding interview?
          </div>
        </div>
        {/* The checked attribute of each radio button is set based on whether the selectedLanguage matches the value of that radio button. When a radio button is selected, the onChange event triggers the corresponding setter function (setSelectedLanguage) to update the state with the new selected language. */}
        <div className="radio-buttons">
          <label>
            <input
              type="radio"
              value="python"
              name="language"
              checked={selectedLanguage === "python"}
              // Update the selectedLanguage to python when this radio button is clicked
              onChange={() => setSelectedLanguage("python")}
            />
            Python
          </label>
          <label>
            <input
              type="radio"
              value="javascript"
              name="language"
              checked={selectedLanguage === "javascript"}
              // Update the selectedLanguage to javascript when this radio button is clicked
              onChange={() => setSelectedLanguage("javascript")}
            />
            JavaScript
          </label>
          <label>
            <input
              type="radio"
              value="go"
              name="language"
              checked={selectedLanguage === "go"}
              // Update the selectedLanguage to go when this radio button is clicked
              onChange={() => setSelectedLanguage("go")}
            />
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
