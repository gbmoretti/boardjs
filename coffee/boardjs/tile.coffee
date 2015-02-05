class Tile
  constructor: (@x,@y,@size,@paper,@board,@fill,@stroke) ->
    @border = @size+1

  draw: (fill,stroke) ->
    square = @paper.rect(@x*@border,@y*@border,@size,@size)
    square.attr(
      fill: @fill
      stroke: @stoke
      id: ((@x-1)*10)+(@y-1)
    )

    square.data("coord-x",@x)
    square.data("coord-y",@y)

    that = @
    square.click (e) ->
      coord = {x: this.data("coord-x"), y: this.data("coord-y")}
      that.click(e,that)

  click: (event,source) ->
    data = {event: event, source: source}
    @clickCallback(@,data) if @clickCallback isnt undefined
    @board.click(event,source)

  onClick: (clickCallback) ->
    @clickCallback = clickCallback

module.exports = Tile
