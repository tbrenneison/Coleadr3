var coleadr = angular.module("coleadrApp"); 

coleadr.service('dataService', function(getOrganization) { 

	var _organization = getOrganization; 
	this.organization = _organization;
	
})