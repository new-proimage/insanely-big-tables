function Record () {
  this.key = Math.random();
  this.value = Math.random()*100;
}

function TableController($scope) {
  $scope.selected = -1;
  $scope.records = [new Record(), new Record()];

  $scope.insert = function () {
    this.records.unshift(new Record());
  };

  $scope.add = function () {
    this.records.push(new Record());
  };

  $scope.edit = function () {
    $scope.records[$scope.selected].value = 'Edited';
  };

  $scope.select = function (ev, index) {
    $scope.selected = index;
    $('.error').each(function (i, el) {
      $(el).removeClass('error');
    });
    $(ev.currentTarget).addClass('error');
  };

  $scope.start = function () {
    var that = this,
        i = 0,
        launch = new Date().getTime();
    (function adding() {
      that.insert();
      if (i !== 0) that.$apply();
      i += 1;
      if (i < that.amount) setTimeout(adding, that.timer);
      else {
        $scope.elapsed = (new Date().getTime() - launch)/1000;
        that.$apply();
      }
    })();
  };

}