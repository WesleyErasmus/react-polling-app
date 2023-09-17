import React from "react";
import "../styles/responses.css";
import { userData } from "../services/userData";


// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
const Responses = () => {
  // Initialize a variable 'voteCounts' using the 'reduce' method on the 'userData' array.
  const voteCounts = userData.reduce((votes, user) => {
    // Check if the 'user.vote' value is not a key in the 'votes' object.
    if (!votes[user.vote]) {
      // If it's not a key, initialize it with a count of 1.
      votes[user.vote] = 1;
    } else {
      // If it's already a key, increment the count by 1.
      votes[user.vote]++;
    }
    // Return the 'votes' object, which will be used as the accumulator in the next iteration.
    return votes;
  }, {}); // Initialize 'votes' as an empty object.

  // 'voteCounts' now contains the count of votes for each unique 'user.vote' value.

  // Object.keys() is used to extract the keys (votes) from the voteCounts object.
  // The reduce method is then applied to iterate over these keys and calculate the total number of votes.
  const totalVotes = Object.values(voteCounts).reduce(
    (total, current) => total + current,
    0
  );

  return (
    <div className="responses-container">
      <div className="responses-heading">
        What programming language do you use during the coding interview?
      </div>
      <ul className="results-list">
        {/* {Object.keys(voteCounts).map((vote) => (
          <li key={vote}>
            {((voteCounts[vote] / totalVotes) * 100)}% {vote}
          </li>
        ))} */}
        {Object.keys(voteCounts).map((vote) => {
          // ***NOTE*** voteCounts[vote]: has to be square brackets because the property is dynamic and not known in advance. Dot notation cannot be used in this instance - Bracket notation needs to be used to access dynamic properties and properties that are determined at runtime.
          const percentage = (voteCounts[vote] / totalVotes) * 100;

          return (
            // Using the vote which is the unique identifier as the key. Is this good practice or should I use the  id's in the userData.js file?
            <li key={vote}>
              {/* Display the calculated percentage */}
              {percentage}% {vote}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Responses;