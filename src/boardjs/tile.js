export default class Tile
  constructor: (@x,@y,@size,@paper,@board,@fill,@stroke) ->
    @border = @size+1

  draw: (fill,stroke) ->
    square = @paper.rect(@x*@border,@y*@border,@size,@size)
    id = @x << 16 & 0xffff0000 | @y & 0x0000ffff
    square.attr(
      fill: @fill
      stroke: @stroke
    )
    square.id = id
