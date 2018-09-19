import Coord from './coord';
import MoveActions from './move_actions';

export default class Player {
  constructor(game) {
    this.game = game;
    this.pos = new Coord(1,1);
    this.color = '#E33';
    this.action = null;
    this.name = "Player";
    this.hp = 100;
  }

  draw() {}

  tick() {}

  moveUp() {
    this.action = new MoveActions.moveUp();
  }

  moveDown() {
    this.action = new MoveActions.moveDown();
  }

  moveRight() {
    this.action = new MoveActions.moveRight();
  }

  moveLeft() {
    this.action = new MoveActions.moveLeft();
  }

  stationate() {
    this.action = new MoveActions.stationate();
  }
}
