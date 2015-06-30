var Class = (function () {
  function Class(obj) {
    if(obj.hasOwnProperty('initialize')) {
      return obj.initialize;
    }
    return function() {
    }
  }

  return Class;
})();

module.exports = Class;
