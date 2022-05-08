import React from 'react';
import { Link } from 'react-router-dom'


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
      <Link to={`/${player.id}`} > Ver más</Link>
    </div>
  );
};

export default Player;