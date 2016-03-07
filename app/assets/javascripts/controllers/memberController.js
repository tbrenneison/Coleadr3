var coleadr = angular.module("coleadrApp"); 

coleadr.controller("memberCtrl", function($scope, getMembers) { 

	//get with organization ID
	$scope.members = getMembers.query({id:1}); 
		
	$scope.addNewMember = function(newMember) { 
		$scope.members.push(
			{firstName: newMember.firstName, 
			lastName: newMember.lastName}); 
	};
});