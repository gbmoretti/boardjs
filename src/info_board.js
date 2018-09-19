import Mustache from 'mustache'

export default class InfoBoard
  constructor: (@entities) ->
    @boardElement = document.getElementById("infoboard")

  draw: ->
    @boardElement.innerHTML = "<h1>Status</h1>"

    for entity in @entities
      @boardElement.innerHTML += Mustache.render(@entityStatusTemplate(), entity)

  entityStatusTemplate: ->
    "<p>{{name}} - {{hp}} - {{actionPoints}} (action: {{action.name}})</p>"
