var coleadr = angular.module("coleadrApp"); 

coleadr.controller("memberCtrl", function($scope) { 
	$scope.members = [
		{"firstName": "Tori", "lastName": "Brenneison"},
		{"firstName": "Angua", "lastName": "Brenneison"},
		{"firstName": "Dave", "lastName": "Goerlich"}];
	});