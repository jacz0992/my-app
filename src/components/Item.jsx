import React from 'react';


const Player = ({ player }) => {
  return (
    <div className="player-card">
      <h1>{player.name}</h1>
      <h3>Etapa: {player.etapa}</h3>
      <h3>Precio: {player.precio}</h3>
      <img
        src={player.pictureUrl}
        alt={player.name}
        className="player-picture"
      />
    </div>
  );
};

export default Player;