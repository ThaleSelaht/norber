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

	angularUiApp.filter('offset', function() {
	  return function(input, start) {
	    start = parseInt(start, 10);
	    return input.slice(start);
	  };
	});

	angularUiApp.controller("PaginationCtrl", function($scope) {

	  $scope.itemsPerPage = 5;
	  $scope.currentPage = 0;
	  $scope.items = [];

	  for (var i=0; i<50; i++) {
	    $scope.items.push({
	      id: i, name: "name "+ i, description: "description " + i
	    });
	  }

	  $scope.prevPage = function() {
	    if ($scope.currentPage > 0) {
	      $scope.currentPage--;
	    }
	  };

	  $scope.prevPageDisabled = function() {
	    return $scope.currentPage === 0 ? "disabled" : "";
	  };

	  $scope.pageCount = function() {
	    return Math.ceil($scope.items.length/$scope.itemsPerPage)-1;
	  };

	  $scope.nextPage = function() {
	    if ($scope.currentPage < $scope.pageCount()) {
	      $scope.currentPage++;
	    }
	  };

	  $scope.nextPageDisabled = function() {
	    return $scope.currentPage === $scope.pageCount() ? "disabled" : "";
	  };

	});

	angularUiApp.controller('ButtonsCtrl', function ($scope) {
	  $scope.singleModel = 1;

	  $scope.radioModel = 'Middle';

	  $scope.checkModel = {
	    left: false,
	    middle: true,
	    right: false
	  };

	  $scope.checkResults = [];

	  $scope.$watchCollection('checkModel', function () {
	    $scope.checkResults = [];
	    angular.forEach($scope.checkModel, function (value, key) {
	      if (value) {
	        $scope.checkResults.push(key);
	      }
	    });
	  });
	});

	angularUiApp.controller('AlertDemoCtrl', function ($scope) {
	  $scope.alerts = [
	    { type: 'danger', msg: 'Oh snap! Change a few things up and try submitting again.' },
	  ];

	  $scope.closeAlert = function(index) {
	    $scope.alerts.splice(index, 1);
	  };
	});

	angularUiApp.controller('CarouselDemoCtrl', function ($scope) {
	  $scope.myInterval = 5000;
	  $scope.noWrapSlides = false;
	  var slides = $scope.slides = [];
	  var currIndex = 0;

	  $scope.addSlide = function() {
	    var newWidth = 600 + slides.length + 1;
	    slides.push({
	      image: '//lorempixel.com/' + newWidth + '/300',
	      text: ['Nice image','Awesome photograph','That is so cool','I love that'][slides.length % 4],
	      id: currIndex++
	    });
	  };

	  $scope.randomize = function() {
	    var indexes = generateIndexesArray();
	    assignNewIndexesToSlides(indexes);
	  };

	  for (var i = 0; i < 4; i++) {
	    $scope.addSlide();
	  }

	  // Randomize logic below

	  function assignNewIndexesToSlides(indexes) {
	    for (var i = 0, l = slides.length; i < l; i++) {
	      slides[i].id = indexes.pop();
	    }
	  }

	  function generateIndexesArray() {
	    var indexes = [];
	    for (var i = 0; i < currIndex; ++i) {
	      indexes[i] = i;
	    }
	    return shuffle(indexes);
	  }

	  // http://stackoverflow.com/questions/962802#962890
	  function shuffle(array) {
	    var tmp, current, top = array.length;

	    if (top) {
	      while (--top) {
	        current = Math.floor(Math.random() * (top + 1));
	        tmp = array[current];
	        array[current] = array[top];
	        array[top] = tmp;
	      }
	    }

	    return array;
	  }
	});