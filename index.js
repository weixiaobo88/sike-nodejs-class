function Class(obj) {
  var fn = obj.initialize || (function(){});

  for(var key in obj) {
    if(key != 'initialize') {
      fn.prototype[key] = obj[key];
    }
  }

  return fn;
};

module.exports = Class;
