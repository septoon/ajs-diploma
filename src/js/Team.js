import PositionedCharacter from './PositionedCharacter';

const userIndex = [0, 1, 8, 9, 16, 17, 24, 25, 32, 33, 40, 41, 48, 49, 56, 57];
const enemyIndex = [6, 7, 14, 15, 22, 23, 30, 31, 38, 39, 46, 47, 54, 55, 62, 63];

const getUserIndex = () => {
  const result = [];
  const userRandom = Math.floor(Math.random() * userIndex.length);
  result.push(userRandom);
  return result;
};

const getEnemyIndex = () => {
  const result = [];
  const enemyRandom = Math.floor(Math.random() * enemyIndex.length);
  result.push(enemyRandom);
  return result;
};

export default class Team {
  constructor(team, count) {
    this.team = team;
    this.count = count;
  }

  character(which) {
    const userPosition = new PositionedCharacter(this.team, getUserIndex());
    const enemyPosition = new PositionedCharacter(this.team, getEnemyIndex());
    if (which === 'user') return userPosition;
    if (which === 'enemy') return enemyPosition;
  }
}
