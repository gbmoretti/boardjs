/*
 * decaffeinate suggestions:
 * DS101: Remove unnecessary use of Array.from
 * DS102: Remove unnecessary code created because of implicit returns
 * DS207: Consider shorter variations of null checks
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
const moduleKeywords = ['extended', 'included'];

class Module {
  static extend(obj) {
    for (let key in obj) {
      const value = obj[key];
      if (!Array.from(moduleKeywords).includes(key)) {
        this[key] = value;
      }
    }

    if (obj.extended != null) {
      obj.extended.apply(this);
    }
    return this;
  }

  static include(obj) {
    for (let key in obj) {
      // Assign properties to the prototype
      const value = obj[key];
      if (!Array.from(moduleKeywords).includes(key)) {
        this.prototype[key] = value;
      }
    }

    if (obj.included != null) {
      obj.included.apply(this);
    }
    return this;
  }
}
