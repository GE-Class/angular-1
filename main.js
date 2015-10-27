angular.module('ge', [])
.controller('main', function($scope){
  $scope.x = 3;
  $scope.y = 2 * 11;
  $scope.numbers = [];
  $scope.add = function(){
    $scope.numbers.push(this.z);
  };
});
