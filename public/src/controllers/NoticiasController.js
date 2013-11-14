
function NoticiasController($scope, $http) {
	
  	$http.get( url + '/noticias').success(function(data) {
		$scope.noticias = data;
		console.log(data)
  	});
 
	//defines una variable
	$scope.var1 = "variable definida desde el controlador";
	
	//selecciona el desplegable y ordena automaticamente, variable definida en la vista con ng-model
	$scope.orderField = "titulo";
	$scope.orderReverse = "true";
}