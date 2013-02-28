function Record () {
  this.key = Math.random();
  this.value = Math.random()*100;
  this.selected = false;
}

function TableController($scope) {
  $scope.timer = null;
  $scope.amount = null;
  $scope.records = [new Record(), new Record()];
  $scope.insert = function () {
    this.records.unshift(new Record());
  };
  $scope.add = function () {
    this.records.push(new Record());
  };
  $scope.select = function (index) {
    if (!this.records[index].selected) {
      this.records.forEach(function (el) {el.selected = false;});
      this.records[index].selected = true;
    }
  };
}