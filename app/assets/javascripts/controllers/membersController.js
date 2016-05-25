var coleadr = angular.module("coleadrApp"); 

coleadr.controller("membersCtrl", function($rootScope, $scope, $http, initializeData, $location) { 
	
	$scope.createNewMember = function(newMember) { 
		$http.post("../organizations/" + $scope.organization.id + "/members/", JSON.stringify(newMember))
		.then(function(response){
			//success
			console.log(response.data);
			$rootScope.members.push(response.data); 
			$location.url("/dashboard");
		}), 
		(function(response){
			//there is problem, what do oh noes
		});
	}
		
});