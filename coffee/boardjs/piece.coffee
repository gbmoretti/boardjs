class Piece
  constructor: (@x,@y,@cor,@paper,@tile) ->
    @element = null

  draw: ->
    id = ((@x-1)*10)+(@y-1) #formula para pegar o id
    console.log(id)
    square = @paper.getById(id)
    bbox = square.getBBox()
    x = bbox.x + (bbox.width/2)
    y = bbox.y + (bbox.height/2)

    piece = @paper.circle(x,y,8)

    piece.attr(
      fill: @cor
      stroke: "#000"
    )

    piece.click (e) =>
      @clickCallback(e,@) if @clickCallback isnt undefined
      @tile.click() if @tile isnt undefined

    @element = piece

  onClick: (callback) ->
    @clickCallback = callback

  move: (x,y) ->
    @x += x
    @y += y

module.exports = Piece
