var Class = (function () {
  function Class(obj) {
    return function(a, b){
      this.a = a;
      this.b = b;
      this.getA = obj.getA;
      this.getB = obj.getB;
    };
  }

  return Class;
})();

module.exports = Class;
