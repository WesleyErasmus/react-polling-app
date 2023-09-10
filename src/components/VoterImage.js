import React from "react";
import { votersData } from "../services/votersData";
import '../styles/voterImage.css'

const VoterImage = () => {
  return (
    <div className="voter-images-container">
      {votersData.map((voterData) => (
        <img className="voter-image" src={voterData.voterImg} alt="voter" />
      ))}
    </div>
  );
};

export default VoterImage;
