angular.module('contractorCalculator', ['ngMessages'])
  .controller('FormCtrl', function() {

    var vm = this;
  	
    vm.initValues = function() {
      vm.submitted = false;
      vm.dailyRate = 0;
      vm.vat = 0;
      vm.dailyExpenses = 0;
      vm.payTotal = 0;
      vm.dayCount = 0;
      vm.averageDailyPay = 0;
      vm.subtotal = 0;
    };

    vm.initValues();

    vm.clearForm = function() {
      vm.dailyRate = null;
      vm.vat = null;
      vm.dailyExpenses = null;
    }; 

    vm.reset = function() {
      vm.contractorForm.$setPristine();
      vm.initValues();
    }

    vm.submit = function() {
      if (vm.contractorForm.$valid) {
        vm.submitted = true;
        vm.getSubtotal();
        vm.getPayTotal();
        vm.dayCount += 1;
        vm.averageDailyPay = vm.payTotal / vm.dayCount;
      } 
    };

    vm.getSubtotal = function() {
      var vatPercentage = vm.vat / 100 * vm.dailyRate;
      vm.subtotal = vatPercentage + vm.dailyRate;
      return vm.subtotal;
    };

    vm.getPayTotal = function() {
      var dayTotals = vm.dailyExpenses + vm.subtotal;
      vm.payTotal += dayTotals;
      return vm.payTotal;
    };

  });