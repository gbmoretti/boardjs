class Board
  constructor: (@size,@width,@height = null) ->
    @height = @heigth || @width
    @paper = Raphael(1, 1, 800, 600)
    @pecas = new Array()
    @drawBorder()
  
  clean: ->
    for peca in @pecas
      peca.element.remove()
    
  drawBorder: ->
    border = @size + (@size/5)
    for x in [1..@width]
      for y in [1..@height]
        square = @paper.rect(x*border,y*border,@size,@size)
        square.attr(
          fill: "#EDF"
          stroke: "#000"
        )
        square.data("coord",x+","+y)
        square.click (e) ->
          console.log this.data("coord")
          console.log this.id

  drawPieces: ->
    for peca in @pecas
      peca.draw()

  newPiece: (x,y,cor) ->
    if @width >= x && @height
      peca = new Piece(x,y,cor,@paper)
      @pecas.push peca
      
      peca.draw()
      return peca
