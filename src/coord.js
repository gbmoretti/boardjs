export default class Coord {
  constructor(x,y) {
    this.x = x;
    this.y = y;
  }

  add(other) {
    return new Coord(this.x + other.x, this.y + other.y);
  }
}
