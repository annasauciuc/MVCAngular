(function() {
  var OrdersController = function($scope, $routeParams, customersFactory) {
      console.log('Intru aici?')
    var customerId = $routeParams.customerId;
    $scope.customer = null;

    function init() {
      customersFactory.getCustomer(customerId).then(
        function(response) {
          $scope.customer = response.data;
        },
        function(data, status, headers, config) {
          //handle error
        }
      );
    }

    init();
  };

  angular
    .module("customersApp")
    .controller("OrdersController", OrdersController);
})();
