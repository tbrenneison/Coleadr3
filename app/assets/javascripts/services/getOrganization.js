var coleadr = angular.module("coleadrApp"); 

coleadr.factory("getOrganization", function($resource) { 
	//get the organization with t3h id
	var organization = $resource("/organizations/:id");
	return organization; 
});