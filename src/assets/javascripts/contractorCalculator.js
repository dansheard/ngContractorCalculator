angular.module('contractorCalculator', ['ngMessages'])
  .controller('FormCtrl', ['$scope', function($scope) {
  	$scope.submitted = false;

    $scope.initValues = function() {
      $scope.dailyRate = 0;
      $scope.vat = 0;
      $scope.dailyExpenses = 0;
    };

    $scope.initValues();

    $scope.clearForm = function() {
      console.log("clearing...")
      $scope.dailyRate = null;
      $scope.vat = null;
      $scope.expenses = null;
    }; 

    $scope.submit = function() {
      if ($scope.contractorForm.$valid) {
        $scope.getSubtotal();
      } else {
        console.log('fuck off');
      }
    };

    $scope.getSubtotal = function() {
      var vatPercentage = $scope.vat / 100 * $scope.dailyRate;
      $scope.subtotal = vatPercentage + $scope.dailyRate;
      return $scope.subtotal;
    }
  }]);