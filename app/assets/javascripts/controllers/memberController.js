var coleadr = angular.module("coleadrApp"); 

coleadr.controller("memberCtrl", function($scope) { 
	$scope.members = [
		{"firstName": "Tori", "lastName": "Brenneison"},
		{"firstName": "Angua", "lastName": "Brenneison"},
		{"firstName": "Dave", "lastName": "Goerlich"}];
		
	$scope.addNewMember = function(newMember) { 
		$scope.members.push(
			{firstName: newMember.firstName, 
			lastName: newMember.lastName}); 
	};
});