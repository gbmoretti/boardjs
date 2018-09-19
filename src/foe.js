import MoveActions from './move_actions';

export default class Foe {
  constructor(game, pos, attrs) {
    this.game = game;
    this.pos = pos;
    this.color = '#3E3';
    this.moves = [
      MoveActions.moveUp,
      MoveActions.moveDown,
      MoveActions.moveRight,
      MoveActions.moveLeft,
      MoveActions.stationate
    ];
    this.hp = attrs.hp || 10;
    this.speed = attrs.speed || 50;
    this.name = attrs.name || 'Unknow';
    this.actionPoints = 0;
    this.action = new MoveActions.stationate();
  }

  tick() {
    this.actionPoints += this.speed;
    if (this.actionPoints > 100) { this.actionPoints = 100; }

    const possibleMoves = [];
    for (let move of this.moves) {
      const moveInstance = new move();
      if (moveInstance.cost <= this.actionPoints) { possibleMoves.push(move); }
    }

    const randAction = possibleMoves[Math.floor(Math.random()*possibleMoves.length)];

    this.action = new randAction();
    this.actionPoints -= this.action.cost;
  }

  draw() {}
}
