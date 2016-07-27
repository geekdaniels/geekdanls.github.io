	// create the module and name it scotchApp
	var scotchApp = angular.module('scotchApp', ['ngRoute']);

	// configure our routes
	scotchApp.config(function($routeProvider) {
		$routeProvider

			// route for the home page
			.when('/', {
				templateUrl : 'home1.html',
				controller  : 'mainController'
			})
		
			// route for the home page
			.when('/home', {
				templateUrl : 'home1.html',
				controller  : 'mainController'
			})

			// route for the about page
			.when('/about', {
				templateUrl : 'about.html',
				controller  : 'aboutController'
			})
		
			// route for the resources page
			.when('/resources', {
				templateUrl : 'resources.html',
				controller  : 'contactController'
			})
		
		// route for the about page
			.when('/blog', {
				templateUrl : 'blog.html',
				controller  : 'aboutController'
			});
	});

	// create the controller and inject Angular's $scope
	scotchApp.controller('mainController', function($scope) {
		// create a message to display in our view
		$scope.message = 'Everyone come and see how good I look!';
	});

	scotchApp.controller('aboutController', function($scope) {
		$scope.message = 'Look! I am an about page.';
	});

	scotchApp.controller('resourcesController', function($scope) {
		$scope.message = 'Contact us! JK. This is just a demo.';
	});

scotchApp.controller('blogController', function($scope) {
		$scope.message = 'Contact us! JK. This is just a demo.';
	});
