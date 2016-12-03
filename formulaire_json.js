
var app = angular.module('myApp', []);
app.controller('myCtrl', ['$scope', '$http', function($scope, $http){
	$http.get('exp.json').success(function(data){
		alert("It is a valid JSON file, indeed.");
		$scope.json = data;
	});
	$http.get('exp.json').error(function(data){
		alert("It is not a valid JSON file!");
	});
}]);