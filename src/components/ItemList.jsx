import React from 'react';
import Player from './Item';


const PlayersList = ({ players }) => {
  return (
    <div className="players-list">
      {players.map((player) => (
        <Player key={player.id} player={player} />
      ))}
    </div>
  );
};

export default PlayersList;