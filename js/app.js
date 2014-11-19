var app = angular.module('scaffold', ['ngRoute']);

app.config(function($routeProvider) {

    $routeProvider.when('/view1', {
        templateUrl: 'partials/view1.html',
        controller: 'view1Controller'
    });
    $routeProvider.when('/view2', {
        templateUrl: 'partials/view2.html',
        controller: 'view2Controller'
    });
    $routeProvider.otherwise({
        redirectTo: '/view1'
    });

});
