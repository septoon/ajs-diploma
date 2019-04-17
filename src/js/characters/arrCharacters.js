import Bowman from './Bowman';
import Swordsman from './Swordsman';
import Daemon from './Daemon';
import Magician from './Magician';
import Undead from './Undead';
import Vampire from './Vampire';

const arrCharacters = [Bowman, Swordsman, Magician, Daemon, Undead, Vampire];

export const usTeam = arrCharacters.slice(0, 3);
// const randomUser = Math.floor(Math.random() * usTeam.length);
// const totalUser = usTeam[randomUser];

export const enTeam = arrCharacters.slice(3, 6);
// const randomEnemy = Math.floor(Math.random() * enTeam.length);
// const totalEnemy = enTeam[randomEnemy];

// export function getRandomUser () {
//   const usTeam = arrCharacters.slice(0, 3);
//   const randomUser = Math.floor(Math.random() * usTeam.length);
//   const totalUser = usTeam[randomUser];
//   return totalUser;
// }

// export function getRandomEnemy () {
//   const enTeam = arrCharacters.slice(3, 6);
//   const randomEnemy = Math.floor(Math.random() * enTeam.length);
//   const totalEnemy = enTeam[randomEnemy];
//   return totalEnemy;
// }

export default arrCharacters;
