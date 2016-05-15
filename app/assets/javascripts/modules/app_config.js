var coleadr = angular.module("coleadrApp");

coleadr.config(["$routeProvider",
  function($routeProvider) {
    $routeProvider.
	  	when("/dashboard", { 
			templateUrl: "dashboard.html", 
			controller: "defaultCtrl"
		}).
      when("/groups", {
        templateUrl: "grouplist.html",
        controller: "groupCtrl"
    	}).
      when("/members/new", {
        templateUrl: "membertemplates/newmember.html",
        controller: "membersCtrl"
    	}).
      when("/organization", {
        templateUrl: "organization.html",
        controller: "defaultCtrl"
    	}).
      otherwise({
        redirectTo: "/dashboard"
      });
		
}]);