var coleadr = angular.module("coleadrApp"); 

coleadr.factory("initializeData", function($http) { 
	var data = {};
	
	data.fetch = function() { 
		return $http.get("../json"); 
	}
	
	return data; 
});