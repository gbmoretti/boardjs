// TODO: This file was created by bulk-decaffeinate.
// Sanity-check the conversion and remove this comment.
/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
export default class Piece {
  constructor(x,y,color,paper,size) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.paper = paper;
    this.size = size;
    this.element = null;
  }

  clean() {
    return this.element.remove();
  }

  draw() {
    const id = ((this.x << 16) & 0xffff0000) | (this.y & 0x0000ffff); //formula para pegar o id
    const square = this.paper.getById(id);

    if (!square) {
      console.log(`Cannot find ${id}`);
      return false;
    }

    const bbox = square.getBBox();
    const x = bbox.x + (bbox.width/2);
    const y = bbox.y + (bbox.height/2);

    const piece = this.paper.circle(x,y,this.size);

    piece.attr({
      fill: this.color,
      stroke: "#000"
    });

    return this.element = piece;
  }
}
