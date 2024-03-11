import React, { useState } from "react";

const PlayerInfo = ({ initialName, symbol }) => {
  const [editPlayer, setEditPlayer] = useState(false);
  const [playerName, setPlayerName] = useState(initialName);

  const handleEditPlayer = () => {
    setEditPlayer((prev) => !prev);
  };

  const handleNameChange = (e) => {
    setPlayerName(e.target.value);
  };

  return (
    <li>
      <span className="player">
        {editPlayer ? (
          <input
            type="text"
            value={playerName}
            required
            onChange={handleNameChange}
          />
        ) : (
          <span className="player-name">{playerName}</span>
        )}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditPlayer}>{editPlayer ? "Save" : "Edit"}</button>
    </li>
  );
};

export default PlayerInfo;
