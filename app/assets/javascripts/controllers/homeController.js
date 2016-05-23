var coleadr = angular.module("coleadrApp"); 

coleadr.controller("defaultCtrl", function ($scope, initializeData){ 
	$scope.appName = "Coleadr"; 
	
	initializeData.fetch().success(function(response) {
		$scope.organization = response.organization; 
		$scope.members = response.members;
	})

	
	});