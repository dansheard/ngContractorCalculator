angular.module('contractorCalculator', ['ngMessages'])
  .controller('FormCtrl', ['$scope', function($scope) {
  	
    $scope.initValues = function() {
      $scope.submitted = false;
      $scope.dailyRate = 0;
      $scope.vat = 0;
      $scope.dailyExpenses = 0;
      $scope.payTotal = 0;
      $scope.dayCount = 0;
      $scope.averageDailyPay = 0;
      $scope.subtotal = 0;
    };

    $scope.initValues();

    $scope.clearForm = function() {
      $scope.dailyRate = null;
      $scope.vat = null;
      $scope.expenses = null;
    }; 

    $scope.reset = function() {
      $scope.contractorForm.$setPristine();
      $scope.initValues();
    }

    $scope.submit = function() {
      if ($scope.contractorForm.$valid) {
        $scope.getSubtotal();
        $scope.getPayTotal();
        $scope.dayCount += 1;
        $scope.averageDailyPay = $scope.payTotal / $scope.dayCount;
      } 
    };

    $scope.getSubtotal = function() {
      var vatPercentage = $scope.vat / 100 * $scope.dailyRate;
      $scope.subtotal = vatPercentage + $scope.dailyRate;
      return $scope.subtotal;
    };

    $scope.getPayTotal = function() {
      var dayTotals = $scope.dailyExpenses + $scope.subtotal;
      $scope.payTotal += dayTotals;
      return $scope.payTotal;
    };

  }]);