import themes from './themes';
import arrCharacters from './characters/arrCharacters';

export default class GameController {
  constructor(gamePlay, stateService) {
    this.gamePlay = gamePlay;
    this.stateService = stateService;
  }

  init() {
    // TODO: add event listeners to gamePlay events
    // TODO: load saved stated from stateService
    this.gamePlay.drawUi(themes.prairie);
    this.gamePlay.redrawPositions(arrCharacters);
  }

  showSpecific() {
    this.gamePlay.addCellEnterListner(this.onCellEnter);
    this.gamePlay.addCellLeaveListner(this.onCellLeave);
    this.gamePlay.addCellClickListner(this.onCellClick);
  }

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
