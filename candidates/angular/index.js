(function (global) {
  var App, Item;
  App = angular.module('myApp', []);

  Item = function() {
    this.key = Math.random();
    this.value = Math.random();
  };

  App.controller('ApplicationController', function ($scope) {
    var add;

    add = function () {
      if ($scope.content.length % 100 === 0) {
        global.IBT.markHundred($scope.content.length / 100);
      }
      if ($scope.amount === 0) {
        $scope.stop();
      }
      else {
        $scope.unshift();
        $scope.amount -= 1;
      }
      $scope.$apply();
    };

    $scope.content = [new Item(), new Item()];
    $scope.unshift = function () {
      $scope.content.unshift(new Item());
    };
    $scope.push = function () {
      $scope.content.push(new Item());
    };
    $scope.remove = function () {

    };
    $scope.clear = function () {
      $scope.content.length = 0;
    };
    $scope.start = function () {
      var intervalId;
      if ($scope.amount === null && $scope.rate === null) {
        console.log('amount and rate should be specified');
        return;
      }

      // start mark
      global.IBT.startMeasuring();

      // add the first
      $scope.unshift();

      // set interval for further adds
      intervalId = setInterval(add, global.IBT.calculateInterval($scope.rate));
      $scope.intervalId = intervalId;
    };
    $scope.stop = function () {
      // stop mark
      global.IBT.stopMeasuring();
      clearInterval($scope.intervalId);
      $scope.time = global.IBT.calculateMeasure();
      global.IBT.calculateHundreds().forEach(function (item) {
        console.log(item);
      });
    };

    $scope.rate = null;
    $scope.amount = null;
    $scope.time = null;
  });
  App.$inject = ['$scope'];
})(window);