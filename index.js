var Class = (function () {
  function Class() {
    return function(a, b){
      this.a = a;
      this.b = b;
    };
  }

  return Class;
})();

module.exports = Class;
