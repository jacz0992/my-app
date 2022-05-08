import React, { useEffect, useState } from 'react';
import { getPlayers } from '../utils/getItems';
import PlayersList from './ItemList';



const PlayersListContainer = () => {
  const [players, setPlayers] = useState([]);
  

  useEffect(() => {
    getPlayers()
      .then((result) => setPlayers(result))
      .catch((error) => console.log(error))
     
  }, []);

  return (
    <>
      <h1>Lista de productos:</h1>
      <PlayersList players={players} />
    </>
  );
};

export default PlayersListContainer;