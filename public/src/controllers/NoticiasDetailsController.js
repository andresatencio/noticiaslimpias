

function NoticiasDetailsController($scope, $http, $routeParams) {
  $scope.id = $routeParams.id;

  $http.get( url +'/noticias/' + $scope.id ).success(function(data) {
	  $scope.noticia = data;
  });
 
}