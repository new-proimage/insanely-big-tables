function Record () {
  this.key = Math.random();
  this.value = Math.random()*100;
}

function createCustomContent (amount) {
  var records = [];
  for (var i = 0; i < amount; i += 1) {
    records.push(new Record());
  }
  return records;
}

function TableController($scope) {
  $scope.selected = -1;
  $scope.records = createCustomContent(4000);

  $scope.insert = function () {
    this.records.unshift(new Record());
  };

  $scope.add = function () {
    this.records.push(new Record());
  };

  $scope.edit = function () {
    if ($scope.selected !== -1) {
      $scope.records[$scope.selected].value = 'Edited';
    }
  };

  $scope.remove = function () {
    if ($scope.selected !== -1) {
      $scope.records.splice($scope.selected, 1);
    }
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
      if (i % 100 === 0) {
        console.log((new Date().getTime() - launch)/1000);
      }
      if (i < that.amount) setTimeout(adding, that.timer);
      else {
        $scope.elapsed = (new Date().getTime() - launch)/1000;
        that.$apply();
      }
    })();
  };

}