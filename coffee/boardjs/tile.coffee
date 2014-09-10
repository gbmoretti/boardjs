class Tile
  constructor: (@x,@y,@size,@paper,@fill,@stroke) ->

  draw: (fill,stroke)->
    border = @size + (@size/5)
    square = @paper.rect(x*border,y*border,@size,@size)
    square.attr(
      fill: @fill
      stroke: @stoke
    )
    square.data("coord-x",@x)
    square.data("coord-y",@y)

    that = @
    square.click (e) ->
      coord = {x: this.data("coord-x"), y: this.data("coord-y")}
      that.clickTrigger(this.id,coord)

module.exports = Tile
