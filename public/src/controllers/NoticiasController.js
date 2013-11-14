
function NoticiasController($scope, $http) {
	
  	$http.get( url + '/noticias').success(function(data) {
		$scope.noticias = data;
		console.log(data)
  	});
	
	$scope.orderField = "titulo";
	$scope.orderReverse = "true";
}