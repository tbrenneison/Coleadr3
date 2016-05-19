var coleadr = angular.module("coleadrApp"); 

coleadr.factory("getMembers", function($http) { 
	//..organizations/organization id/members returns JSON for organization members
	return { getthem: function(organizationId) { 
		$http.get("../organizations/" + organizationId + "/members")
		.then(function success(response) {
			//success
			members = response.data;
		},
		function error(response) {
			//error
		});
		return members; 
	}}
});