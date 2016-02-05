'use strict';

var angularUiApp = angular.module('angularUiApp', 
	['ngAnimate','mgcrea.ngStrap', 'ngRoute','ngLocale', 'ui.bootstrap']);
	angularUiApp.config(function($modalProvider) {
	    angular.extend($modalProvider.defaults, {
	    	html: true
	    });
	});
	
	angularUiApp.directive('scrollOnClick', function() {
	  return {
	    restrict: 'A',
	    link: function(scope, $elm, attrs) {
	      var idToScroll = attrs.href;
	      $elm.on('click', function() {
	        var $target;
	        if (idToScroll) {
	          $target = $(idToScroll);
	        } else {
	          $target = $elm;
	        }
	        $("body").animate({scrollTop: $target.offset().top}, "slow");
	      });
	    }
	  }
	});
	
	angularUiApp.controller('angularUiCtrls', function($scope, $uibModal, $log, $http){	
		$scope.items = ['item1', 'item2', 'item3'];

		$scope.animationsEnabled = true;

	  $scope.open = function (size) {

	    var modalInstance = $uibModal.open({
	      animation: $scope.animationsEnabled,
	      templateUrl: 'myModalContent.html',
	      controller: 'ModalInstanceCtrl',
	      size: size,
	      resolve: {
	        items: function () {
	          return $scope.items;
	        }
	      }
	    });

	    modalInstance.result.then(function (selectedItem) {
	      	$scope.selected = selectedItem;
	    	}, function () {
	      		$log.info('Modal dismissed at: ' + new Date());
	    	});
	  	};

	  	$scope.toggleAnimation = function () {
	    	$scope.animationsEnabled = !$scope.animationsEnabled;
  		};

});

// Please note that $uibModalInstance represents a modal window (instance) dependency.
// It is not the same as the $uibModal service used above.

angularUiApp.controller('ModalInstanceCtrl', function ($scope, $uibModalInstance) {

	$scope.formData = {};

  	$scope.ok = function () {
    	$uibModalInstance.close($scope.selected.item);
  	};

  	$scope.cancel = function () {
    	$uibModalInstance.dismiss('cancel');
  	};

  	$scope.submitForm = function(){
		$http({
		    method : 'POST',
		    url : 'process.php',
		    data : param($scope.formData), 
		    headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
			})
		    .success(function(data) {
		       $scope.submissionMessage = data.messageSuccess;
		       $scope.formData = {}; 
		       $scope.submission = true; 
		       console.log(data);
		    });
	};
});	