import Mustache from 'mustache';

export default class InfoBoard {
  constructor(entities) {
    this.entities = entities;
    this.boardElement = document.getElementById("infoboard");
  }

  draw() {
    this.boardElement.innerHTML = "<h1>Status</h1>";

    this.entities.map((entity) =>
      (this.boardElement.innerHTML += Mustache.render(this.entityStatusTemplate(), entity)));
  }

  entityStatusTemplate() {
    return "<p>{{name}} - {{hp}} - {{actionPoints}} (action: {{action.name}})</p>";
  }
}
