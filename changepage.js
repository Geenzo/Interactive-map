 // create the module and name it interactivemap
        // also include ngRoute for all our routing needs
    var interactivemap = angular.module('interactivemap', ['ngRoute']);

    // configure our routes
    interactivemap.config(function($routeProvider) {
        $routeProvider

            // route for the home page
            .when('/', {
                templateUrl : 'pages/home.html',
                controller  : 'mainController'
            })

            // route for the cycle page
            .when('/cycle', {
                templateUrl : 'pages/cycle.html',
                controller  : 'cycleController'
            })

            // route for the sights page
            .when('/sights', {
                templateUrl : 'pages/sights.html',
                controller  : 'sightController'
            });
    });

    // create the controller and inject Angular's $scope
    interactivemap.controller('mainController', function($scope) {
        // create a message to display in our view
        $scope.message = 'hiking routes';
    });

    interactivemap.controller('cycleController', function($scope) {
        $scope.message = 'Cycling routes';
    });

    interactivemap.controller('sightController', function($scope) {
        $scope.message = 'Sights to see';
    });