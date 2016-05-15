var coleadr = angular.module("coleadrApp"); 

coleadr.factory("getMembers", function($http) { 
	//get the current organization's members
	var members = {}; 
	return members; 
});