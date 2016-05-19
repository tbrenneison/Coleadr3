var coleadr = angular.module("coleadrApp"); 

coleadr.controller("membersCtrl", function($scope, $http, dataService, getMembers) { 
	
	$scope.members = getMembers.getthem(dataService.organization.id);
	
	$scope.createNewMember = function(newMember) { 
		$http.post("../organizations/" + $scope.organization.id + "/members/", JSON.stringify(newMember))
		.then(function(response){
			//success
			console.log(response.data); 
		}), 
		(function(response){
			//there is problem, what do oh noes
		});
	}
		
});