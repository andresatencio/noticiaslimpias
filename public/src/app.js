var url = window.location.origin;

angular.module('app', []).
	
  config(['$routeProvider', function($routes) {
  
  $routes.
		when('/noticias', {
			templateUrl: 'src/views/noticias.html',
			controller: NoticiasController
		}).
	  
	  	when('/noticias/:id', {
			templateUrl: 'src/views/noticia.html',
			controller: NoticiasDetailsController
		}).
		otherwise({
			redirectTo: '/noticias'});

}]);