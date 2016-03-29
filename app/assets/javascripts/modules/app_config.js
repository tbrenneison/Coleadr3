var coleadr = angular.module("coleadrApp");

coleadr.config(["$routeProvider",
  function($routeProvider) {
    $routeProvider.
	  	when("/dashboard", { 
			templateUrl: "dashboard.html", 
			controller: "defaultCtrl"
		}).
      when("/members", {
        templateUrl: "memberlist.html",
        controller: "memberCtrl"
    	}).
      when("/memberForms/createNewMember", {
        templateUrl: "memberForms/createNewMember.html",
        controller: "memberCtrl"
    	}).
      when("/memberViews/updateMember", {
        templateUrl: "memberViews/updateMember.html",
        controller: "memberCtrl"
    	}).
      when("/groups", {
        templateUrl: "grouplist.html",
        controller: "groupCtrl"
    	}).
      when("/organization", {
        templateUrl: "organization.html",
        controller: "defaultCtrl"
    	}).
      otherwise({
        redirectTo: "/dashboard"
      });
		
}]);