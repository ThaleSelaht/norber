'use strict';

var angularUiApp = angular.module('angularUiApp', 
	['ngAnimate','mgcrea.ngStrap', 'ngRoute','ngLocale', 'ui.bootstrap']);
	angularUiApp.config(function($modalProvider) {
	    angular.extend($modalProvider.defaults, {
	    	html: true
	    });
	});
	/*angularUiApp.config(['$routeProvider','$locationProvider',  function($routeProvider, $locationProvider){
		$routeProvider.when('/',{
			templateUrl:'partials/index.html',
			controller:'angularUiCtrls'
		}).when('/thanks',{
			templateUrl:'partials/thanks.html',
			controller:'angularUiCtrls'
		}).otherwise({redirectTo:'/'});

		if(window.history && window.history.pushState){
		    $locationProvider.html5Mode({
			  enabled: true,
			  requireBase: true
			});
		 }
	}]);*/
	
	angularUiApp.controller('angularUiCtrls', function($scope, $http){	
		
	});

	