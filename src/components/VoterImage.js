import React from "react";
import { userData } from "../services/userData";
import '../styles/voterImage.css'

const VoterImage = () => {
  return (
    <div className="voter-images-container">
      {userData.map((userData) => (
        <img key={userData.id} className="voter-image" src={userData.voterImg} alt="voter" />
      ))}
    </div>
  );
};

export default VoterImage;
