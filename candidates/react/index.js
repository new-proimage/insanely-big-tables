(function (global) {

  var Item = function () {
    this.key = Math.random();
    this.value = Math.random();
  };

  var App = function () {
    var that = this;
    that.content = [new Item(), new Item()];

    that.rate = null;
    that.amount = null;
    that.time = null;

    that.unshiftItem = function () {
      that.content.unshift(new Item());
    };

    that.pushItem = function () {
      that.content.push(new Item());
    };
    that.removeItem = function () {

    };
    that.clearItems = function () {
      that.content.length = 0;
    };
    that.start = function () {

    };
    that.stop = function () {

    };
  };
  global.App = new App();
})(window);