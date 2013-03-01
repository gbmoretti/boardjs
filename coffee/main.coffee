$(document).ready ->
  paper = Raphael(1, 1, 800, 600)
  
  #desenhando tabuleiro 10x10
  for x in [1..10]
    for y in [1..10]
      square = paper.rect(x*28,y*28,25,25)
      square.attr(
        fill: "#EDF"
        stroke: "#000"
      )
      square.data("coord",x+","+y)
      square.click (e) ->
        console.log this.data("coord")
        console.log this.id
        
  
  #desenhando um peça no quadrante 1,1
  coord_x = 2
  coord_y = 10
  id = ((coord_x-1)*10)+(coord_y-1) #formula para pegar o id 
  console.log id
  square = paper.getById(id)
  console.log square.data("coord")
  bbox = square.getBBox()
  
  x = bbox.x + (bbox.width/2)
  y = bbox.y + (bbox.height/2)
  piece = paper.circle(x,y,8)
  
  piece.attr(
    fill: "#F33"
    stroke: "#000"
  )

  #desenhando outrsa peça no quadrante 4,8
  piece = paper.circle()

