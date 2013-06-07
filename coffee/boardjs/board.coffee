class Board
  constructor: (@size,@width,@height = null) ->
    @height = @heigth || @width
    @paper = Raphael(1, 1, 800, 600)
    @pecas = new Array()
    @drawBorder()
  
  clean: ->
    for peca in @pecas
      peca.element.remove()
  
  draw: ->
    @drawPieces()
  
  onClick: (callback) ->
    @clickCallback = callback
    
  clickTrigger: (id,coord) ->    
    peca = @searchPiece(coord)    
    @clickCallback.call(@,coord,peca) unless @clickCallback is undefined
  
  drawBorder: ->
    border = @size + (@size/5)
    for x in [1..@width]
      for y in [1..@height]
        square = @paper.rect(x*border,y*border,@size,@size)
        square.attr(
          fill: "#3D3"
          stroke: "#000"
        )
        square.data("coord-x",x)
        square.data("coord-y",y)
        that = @
        square.click (e) ->
          coord = {x: this.data("coord-x"), y: this.data("coord-y")}
          that.clickTrigger(this.id,coord)

  drawPieces: ->
    for peca in @pecas
      peca.draw()

  newPiece: (x,y,cor) ->
    if @width >= x && @height
      peca = new Piece(x,y,cor,@paper)
      @pecas.push peca
      
      peca.draw()
      return peca
      
  searchPiece: (coord) ->      
    peca = null
    for p in @pecas
      if p.x == coord.x && p.y == coord.y
        peca = p
        break
    peca 
  
