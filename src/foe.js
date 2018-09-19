import MoveActions from './move_actions';

class FoeBrain {
  constructor() {
    this.moves = [
      MoveActions.moveUp,
      MoveActions.moveDown,
      MoveActions.moveRight,
      MoveActions.moveLeft,
      MoveActions.stationate
    ];
  }

  nextAction(context) {
    const possibleMoves = [];
    for (let move of this.moves) {
      const moveInstance = new move();
      if (moveInstance.cost <= context.me.actionPoints) { 
        possibleMoves.push(move);
      }
    }

    return possibleMoves[Math.floor(Math.random()*possibleMoves.length)];
  }
}

export default class Foe {
  constructor(game, pos, attrs) {
    this.game = game;
    this.pos = pos;
    this.color = '#3E3';
    this.hp = attrs.hp || 10;
    this.speed = attrs.speed || 50;
    this.name = attrs.name || 'Unknow';
    this.actionPoints = 0;
    this.action = new MoveActions.stationate();

    this.brain = new FoeBrain();
  }

  tick() {
    this.actionPoints += this.speed;
    if (this.actionPoints > 100) { this.actionPoints = 100; }

    const nextAction = this.brain.nextAction({me: this});
    this.action = new nextAction();
    this.actionPoints -= this.action.cost;
  }

  draw() {}
}
