/* eslint-disable no-console */
import themes from './themes';
import { usTeam, enTeam } from './characters/arrCharacters';
import Team from './Team';
import icons from './iconsInfo';

const generateUser = new Team(usTeam, 1, 2);
console.log(generateUser);
const generateEnemy = new Team(enTeam, 1, 2);
console.log(generateEnemy);

const user = generateUser.side('user');
console.log(user);
const enemy = generateEnemy.side('enemy');
console.log(enemy);

const allTeam = [...user, ...enemy];
console.log(allTeam);

export default class GameController {
  constructor(gamePlay, stateService) {
    this.gamePlay = gamePlay;
    this.stateService = stateService;
  }

  init() {
    // TODO: add event listeners to gamePlay events
    // TODO: load saved stated from stateService
    this.gamePlay.drawUi(themes.prairie);
    this.gamePlay.redrawPositions(allTeam);

  }

  // showSpecific() {
  //   this.gamePlay.addCellEnterListner(this.onCellEnter);
  //   this.gamePlay.addCellLeaveListner(this.onCellLeave);
  //   this.gamePlay.addCellClickListner(this.onCellClick);
  // }

  onCellClick(index) {
    // TODO: react to click
  }

  onCellEnter(index) {
    // TODO: react to mouse enter
  }

  onCellLeave(index) {
    // TODO: react to mouse leave
  }
}
