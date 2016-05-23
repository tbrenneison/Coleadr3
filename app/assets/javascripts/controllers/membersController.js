var coleadr = angular.module("coleadrApp"); 

coleadr.controller("membersCtrl", function($rootScope, $scope, $http, initializeData) { 
	
	initializeData.fetch().success(function(response) {
		$scope.organization = response.organization; 
		$scope.members = response.members;
	})
	
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