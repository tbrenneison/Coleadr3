var coleadr = angular.module("coleadrApp"); 

coleadr.controller("defaultCtrl", function($scope, dataService) { 
	$scope.appName = "Coleadr"; 
	
	$scope.organization = dataService.organization;
	
	});