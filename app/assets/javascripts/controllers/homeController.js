var coleadr = angular.module("coleadrApp"); 

coleadr.controller("defaultCtrl", function ($rootScope, $scope, initializeData){ 
	$scope.appName = "Coleadr"; 
	
	initializeData.fetch().success(function(response) {
		$rootScope.organization = response.organization; 
		$rootScope.members = response.members;
	})
	

	
	});