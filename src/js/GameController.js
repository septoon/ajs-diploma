/* eslint-disable no-console */
import themes from './themes';
import { usTeam, enTeam } from './characters/arrCharacters';
import Team from './Team';
import icons from './iconsInfo';

const generateUser = new Team(usTeam, 1, 2);
// console.log(generateUser);
const generateEnemy = new Team(enTeam, 1, 2);
// console.log(generateEnemy);

const user = generateUser.side('user');
// console.log(user);
const enemy = generateEnemy.side('enemy');
// console.log(enemy);

const allTeam = [...user, ...enemy];
// console.log(allTeam);

const coursor = { pointer: 'pointer', crosshair: 'crosshair', notallowed: 'notallowed' };

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
    this.showSpecific(this.gamePlay);
  }

  showSpecific() {
    this.gamePlay.addCellEnterListener(this.onCellEnter.bind(this));
    this.gamePlay.addCellLeaveListener(this.onCellLeave.bind(this));
    this.gamePlay.addCellClickListener(this.onCellClick.bind(this));
  }

  onCellClick(index) {
    // TODO: react to click
    // eslint-disable-next-line no-restricted-syntax
    for (const i of user) {
      const types = ['swordsman', 'bowman', 'magician'];
      if (i.position === index && types.includes(i.character.type)) {
        console.log(i);
        this.gamePlay.selectCell(index);
        console.log(i.position);
      }
    }
  }

  onCellEnter(index) {
    // TODO: react to mouse enter
    // eslint-disable-next-line no-restricted-syntax
    for (const i of allTeam) {
      if (i.position === index) {
        const ch = i.character;
        const specific = `${icons.level}${ch.level} ${icons.attack}${ch.attack} ${icons.defence}${ch.defence} ${icons.health}${ch.health}`;
        this.gamePlay.showCellTooltip(specific, index);
        this.gamePlay.setCursor(coursor.pointer);
      }
    }
  }

  onCellLeave(index) {
    // TODO: react to mouse leave
    this.gamePlay.hideCellTooltip(index);
  }
}
