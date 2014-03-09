(function (global) {
  var Item, View, ko = global.ko;
  Item = function() {
    this.key = Math.random();
    this.value = Math.random();
  };

  View = function () {
    this.content = ko.observableArray([
      new Item(),
      new Item()
    ]);
    this.rate = ko.observable(null);
    this.amount = ko.observable(null);
    this.time = ko.observable(null);

    this.unshift = function () {
      this.content.unshift(new Item());
    };
    this.push = function () {
      this.content.push(new Item());
    };
    this.remove = function () {

    };
    this.clear = function () {
      this.content.removeAll();
    };
    this.start = function () {
      var intervalId;
      if (this.amount() === null && this.rate() === null) {
        console.log('amount and rate should be specified');
        return;
      }

      // start mark
      global.IBT.startMeasuring();

      // add the first
      this.unshift();

      // set interval for further adds
      intervalId = setInterval(this.add.bind(this), global.IBT.calculateInterval(this.rate()));
      this.intervalId = intervalId;
    };
    this.stop = function () {
      // stop mark
      global.IBT.stopMeasuring();
      clearInterval(this.intervalId);
      this.time(global.IBT.calculateMeasure());
      global.IBT.calculateHundreds().forEach(function (item) {
        console.log(item);
      });
    };
    this.add = function () {
      if (this.content().length % 100 === 0) {
        global.IBT.markHundred(this.content().length / 100);
      }
      if (this.amount() === 0) {
        this.stop();
      }
      else {
        this.unshift();
        this.amount(this.amount() - 1);
      }
    };
  };

  ko.applyBindings(new View());
})(window);