$(function () {
  var Record = function () {
    this.key = ko.observable(Math.random());
    this.value = ko.observable(Math.random()*100);
  };
  var View = function () {
    var that = this;

    that.timer = ko.observable();
    that.amount = ko.observable();
    that.records = ko.observableArray([new Record(), new Record()]);
    that.total = ko.computed(function () {
      return that.records().length;
    }, that);
    that.selected = -1;
    that.select = function (index, record, ev) {
      that.selected = index;
      $('.error').each(function (i, el) {
        $(el).removeClass('error');
      });
      $(ev.currentTarget).addClass('error');
    };
    that.insert = function () {
      that.records.unshift(new Record());
    };
    that.add = function () {
      that.records.push(new Record());
    };
    that.start = function () {
      var i = 0;
      (function adding() {
        that.insert();
        i += 1;
        if (i < that.amount()) setTimeout(adding, that.timer());
      })();
    };
    that.edit = function () {
      if (that.selected !== -1) {
        that.records()[that.selected].value('Edited');
      }
    };
  };
  ko.applyBindings(new View());
});