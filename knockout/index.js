$(function () {
  var Record = function () {
    this.key = Math.random();
    this.value = Math.random()*100;
  };
  var View = function () {
    this.timer = ko.observable();
    this.amount = ko.observable();
    this.records = ko.observableArray([new Record(), new Record()]);
    this.total = ko.computed(function () {
      return this.records().length;
    }, this);
    this.select = function (record, ev) {
      $('.error').each(function (i, el) {
        $(el).removeClass('error');
      });
      $(ev.currentTarget).addClass('error');
    };
    this.insert = function () {
      this.records.unshift(new Record());
    };
    this.add = function () {
      this.records.push(new Record());
    };
    this.start = function () {
      var that = this,
          i = 0;
      (function adding() {
        that.insert();
        i += 1;
        if (i < that.amount()) setTimeout(adding, that.timer());
      })();
    };
  };
  ko.applyBindings(new View());
});