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
      otherwise({
        redirectTo: "/dashboard"
      });
}]);