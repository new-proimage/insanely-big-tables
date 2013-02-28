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
  $scope.select = function () {
    console.log(arguments);
  };
}