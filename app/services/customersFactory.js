(function() {
  const customersFactory = function($http) {
      console.log('$http', $http)
    var factory = {};
    console.log('factory', factory)

    factory.getCustomers = function() {
      return $http.get("/customers");
    };

    factory.getCustomer = function(customerId) {
      return $http.get("/customers/" + customerId);
    };

    factory.getOrders = function() {
      return $http.get("/orders");
    };

    factory.deleteCustomer = function(customerId) {
      return $http.delete("/customers/" + customerId);
    };
    console.log('factory', factory)
    return factory;
  };

  angular.module("customersApp").factory("customersFactory", customersFactory);
})();
