import { players } from './Items';

export const getPlayers = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(players), 2000);
  });
};