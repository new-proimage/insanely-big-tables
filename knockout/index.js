$(function () {
  var Record = function () {
    this.key = Math.random();
    this.value = Math.random()*100;
  };
  var View = function () {
    this.timer = ko.observable();
    this.amount = ko.observable();
    this.records = [new Record(), new Record()];
    select = function (record, ev) {
      $('.error').each(function (i, el) {
        $(el).removeClass('error');
      });
      $(ev.currentTarget).addClass('error');
      };
  };
  ko.applyBindings(new View());
});