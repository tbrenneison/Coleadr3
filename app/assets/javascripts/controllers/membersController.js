var coleadr = angular.module("coleadrApp"); 

coleadr.controller("membersCtrl", function($scope, $http) { 
	
	$scope.members = {};
	
	$scope.newMember;
	
	$scope.createNewMember = function(newMember) { 
		$http.post("../organizations/" + $scope.organization.id + "/members/", JSON.stringify(newMember))
		.then(function(response){
			//success
			console.log(response.data); 
		}), 
		(function(response){
			//problem
		});
	}
		
});