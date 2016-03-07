var coleadr = angular.module("coleadrApp"); 

coleadr
	.factory("getMembers", function($resource) { 
	//get the members with t3h organization ID
	var members = $resource("/organizations/:id/members");
	return members; 
	});