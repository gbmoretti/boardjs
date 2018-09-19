/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
export default class Coord {
  constructor(x,y) {
    this.x = x;
    this.y = y;
  }

  add(other) {
    return new Coord(this.x + other.x, this.y + other.y);
  }
}
