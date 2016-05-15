var coleadr = angular.module("coleadrApp"); 

coleadr.factory("getOrganization", function($http) { 
	//get the current organization
	var organization = {name:"", id:"", created_at:"", last_update:""}; 
	$http.get("../organizations/json")
    .then(function(response) {
		 console.log(response.data);
		 organization.id = response.data.id; 
		 organization.name = response.data.name;
		 organization.created_at = response.data.created_at; 
		 organization.last_update = response.data.updated_at;
	   });
	return organization; 
});