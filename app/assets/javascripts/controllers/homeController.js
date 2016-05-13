var coleadr = angular.module("coleadrApp"); 

coleadr.controller("defaultCtrl", function($scope, getOrganization) { 
	$scope.appName = "Coleadr"; 
	
	$scope.organization = getOrganization; 
	
	});