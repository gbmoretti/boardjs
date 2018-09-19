// TODO: This file was created by bulk-decaffeinate.
// Sanity-check the conversion and remove this comment.
/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
export default class Tile {
  constructor(x,y,size,paper,board,fill,stroke) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.paper = paper;
    this.board = board;
    this.fill = fill;
    this.stroke = stroke;
    this.border = this.size+1;
  }

  draw(fill,stroke) {
    const square = this.paper.rect(this.x*this.border,this.y*this.border,this.size,this.size);
    const id = ((this.x << 16) & 0xffff0000) | (this.y & 0x0000ffff);
    square.attr({
      fill: this.fill,
      stroke: this.stroke
    });
    return square.id = id;
  }
}
