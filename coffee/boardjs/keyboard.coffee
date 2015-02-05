Combokeys = require 'combokeys'
class Keyboard
  constructor: ->
    @listener = new Combokeys(document)

    @register_keys()


  register_keys: ->
    @listener.bind('up', ->
      console.log 'up'
    )

module.exports = Keyboard
