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

    that.unshift = function () {
      that.content.unshift(new Item());
      that.render();
    };

    that.push = function () {
      that.content.push(new Item());
      that.render();
    };
    that.remove = function () {

    };
    that.clear = function () {
      that.content.length = 0;
      that.render();
    };
    that.start = function () {
      var intervalId;
      if (that.amount === null && that.rate === null) {
        console.log('amount and rate should be specified');
        return;
      }

      // start mark
      global.IBT.startMeasuring();

      // add the first
      that.unshift();

      // set interval for further adds
      intervalId = setInterval(that.add.bind(that), global.IBT.calculateInterval(that.rate));
      that.intervalId = intervalId;
    };
    that.stop = function () {
      // stop mark
      global.IBT.stopMeasuring();
      clearInterval(that.intervalId);
      that.time = global.IBT.calculateMeasure();
      global.IBT.calculateHundreds().forEach(function (item) {
        console.log(item);
      });
      that.render();
    };
    that.add = function () {
      if (that.content.length % 100 === 0) {
        global.IBT.markHundred(that.content.length / 100);
      }
      if (that.amount === 0) {
        that.stop();
      }
      else {
        that.unshift();
        that.amount -= 1;
        that.render();
      }
    };
  };
  global.App = new App();
})(window);