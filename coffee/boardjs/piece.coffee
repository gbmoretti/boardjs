class Piece
  constructor: (@x,@y,@color,@paper,@tile,@size) ->
    @element = null

  clean: ->
    @element.remove()

  draw: ->
    id = @x << 16 & 0xffff0000 | @y & 0x0000ffff #formula para pegar o id
    square = @paper.getById(id)

    unless square
      console.log "Cannot find #{id}"
      return false

    bbox = square.getBBox()
    x = bbox.x + (bbox.width/2)
    y = bbox.y + (bbox.height/2)

    piece = @paper.circle(x,y,@size)

    piece.attr(
      fill: @color
      stroke: "#000"
    )

    @element = piece

module.exports = Piece
