function Record () {
  this.key = Math.random();
  this.value = Math.random()*100;
}

function TableController($scope) {
  $scope.records = [new Record(), new Record()];
  $scope.insert = function () {
    this.records.unshift(new Record());
  };
  $scope.add = function () {
    this.records.push(new Record());
  };
  $scope.select = function (ev) {
    $('.error').each(function (i, el) {
      $(el).removeClass('error');
    });
    $(ev.currentTarget).addClass('error');
  };
  $scope.start = function () {
    var that = this,
        i = 0;
    (function adding() {
      that.insert();
      if (i !== 0) that.$apply();
      i += 1;
      if (i < that.amount) setTimeout(adding, that.timer);
    })();
  };
}