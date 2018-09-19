// TODO: This file was created by bulk-decaffeinate.
// Sanity-check the conversion and remove this comment.
/*
 * decaffeinate suggestions:
 * DS101: Remove unnecessary use of Array.from
 * DS102: Remove unnecessary code created because of implicit returns
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
import Mustache from 'mustache';

export default class InfoBoard {
  constructor(entities) {
    this.entities = entities;
    this.boardElement = document.getElementById("infoboard");
  }

  draw() {
    this.boardElement.innerHTML = "<h1>Status</h1>";

    return Array.from(this.entities).map((entity) =>
      (this.boardElement.innerHTML += Mustache.render(this.entityStatusTemplate(), entity)));
  }

  entityStatusTemplate() {
    return "<p>{{name}} - {{hp}} - {{actionPoints}} (action: {{action.name}})</p>";
  }
}
