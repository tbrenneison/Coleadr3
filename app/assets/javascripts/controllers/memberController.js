var coleadr = angular.module("coleadrApp"); 

coleadr.controller("memberCtrl", function($scope, getMembers, $http) { 

	//get with organization ID
	$scope.members = getMembers.query({id:1}); 
	
	//add a new member to the organization member list 
	$scope.addNewMember = function(newMember) { 
		$http.post("/organizations/" + "1" + "/members.json", newMember)
			.success(function(response) {
				//if success, add member to controller $scope
				$scope.members.push(
					{firstName: response.first_name, 
					lastName: response.last_name}); 
			})
			.error(function(response) {
				//if not so success, log exception returned by RoR 
				console.log("EXCEPTION TO CREATE NEW MEMBER POST REQUEST:" + response); 
			})
	};
	
});