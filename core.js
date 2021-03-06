var module = angular.module("sampleApp", ['ngRoute']);

module.config(['$routeProvider', function($routeProvider){
  $routeProvider.
  when('/route1/:param', {
    templateUrl: 'angular-route-template-1.jsp',
    controller: 'RouteController'
  }).
  when('/route2/:param',{
    templateUrl: 'angular-route-template-2.jsp',
    controller: 'RouteController'
  }).
  otherwise ({
      redirectTo: '/'
  });
}]);

module.controller("RouteController", function($scope, $routeParams){
  $scope.param = $routeParams.param;
})

