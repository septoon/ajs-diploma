import PositionedCharacter from './PositionedCharacter';
// eslint-disable-next-line import/no-cycle
import { generateTeam } from './generators';

const userIndex = [0, 1, 8, 9, 16, 17, 24, 25, 32, 33, 40, 41, 48, 49, 56, 57];
const enemyIndex = [6, 7, 14, 15, 22, 23, 30, 31, 38, 39, 46, 47, 54, 55, 62, 63];

const getUserIndex = () => {
  const userRandom = Math.floor(Math.random() * userIndex.length);
  const result = userIndex[userRandom];
  return result;
};

const getEnemyIndex = () => {
  const enemyRandom = Math.floor(Math.random() * enemyIndex.length);
  const result = enemyIndex[enemyRandom];
  return result;
};

export default class Team {
  constructor(team, level, count) {
    this.team = team;
    this.level = level;
    this.count = count;
  }

  get command() {
    const random = this.team.sort(() => Math.random() - 0.5);
    return generateTeam(random, this.level, this.count);
  }

  side(which) {
    const total = [];
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < this.command.length; i++) {
      const userPosition = new PositionedCharacter(this.command[i], getUserIndex());
      const enemyPosition = new PositionedCharacter(this.command[i], getEnemyIndex());
      if (which === 'enemy') total.push(enemyPosition);
      if (which === 'user') total.push(userPosition);
    }
    return total;
  }
}
