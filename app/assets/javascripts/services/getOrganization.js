var coleadr = angular.module("coleadrApp"); 

coleadr.factory("getOrganization", function($http) { 
	//get the current organization
	var organization = {name:"", id:""}; 
	$http.get("../organizations/json")
    .then(function(response) {
		 console.log(response.data);
		 organization.id = response.data.id; 
		 organization.name = response.data.name;
	   });
	return organization; 
});