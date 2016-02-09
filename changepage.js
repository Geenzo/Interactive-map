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
                controller  : 'aboutController'
            })

            // route for the sights page
            .when('/sights', {
                templateUrl : 'pages/sights.html',
                controller  : 'contactController'
            });
    });

    // create the controller and inject Angular's $scope
    interactivemap.controller('mainController', function($scope) {
        // create a message to display in our view
        $scope.message = 'Everyone come and see how good I look!';
    });

    interactivemap.controller('aboutController', function($scope) {
        $scope.message = 'Look! I am an about page.';
    });

    interactivemap.controller('contactController', function($scope) {
        $scope.message = 'Contact us! JK. This is just a demo.';
    });