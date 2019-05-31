/* eslint-disable no-console */
import themes from './themes';
import { usTeam, enTeam } from './characters/arrCharacters';
import Team from './Team';
import icons from './iconsInfo';
import cursors from './cursors';

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
      const userTypes = ['swordsman', 'bowman', 'magician'];
      if (i.position === index && userTypes.includes(i.character.type)) {
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
      const ch = i.character;
      const specific = `${icons.level}${ch.level} ${icons.attack}${ch.attack} ${icons.defence}${ch.defence} ${icons.health}${ch.health}`;
      const enemyTypes = ['vampire', 'undead', 'daemon'];
      if (i.position === index) {
        this.gamePlay.showCellTooltip(specific, index);
        this.gamePlay.setCursor(cursors.pointer);
      }
      if (i.position === index && enemyTypes.includes(i.character.type)) {
        this.gamePlay.setCursor(cursors.crosshair);
        this.gamePlay.selectCell(index, 'red');
      }
      if (index !== i.position) {
        this.gamePlay.selectCell(index, 'green');
      }
    }
  }

  onCellLeave(index) {
    // TODO: react to mouse leave
    this.gamePlay.hideCellTooltip(index);
    this.gamePlay.setCursor(cursors.auto);
    this.gamePlay.deselectCell(index, 'green');
  }
}
