
(function(){
	var app = angular.module('form', [ ]);
	app.controller('ChampsController', function(){
	var objet = {};//on cree un objet js vide
	this.addchamps = function(){
		var values = "";
		var objets = document.getElementsByClassName('controlled');//on prend tous les tags qui ont controlled comme class
		for (var i = 0; objets[i] ; i++){
			if ((objets[i].type == "text") || (objets[i].type == "color") ||
			 (objets[i].type == "date") || (objets[i].type == "datetime") || 
			 (objets[i].type == "datetime-local")  || (objets[i].type == "email")  || 
			 (objets[i].type == "month")  || (objets[i].type == "number")  || 
			 (objets[i].type == "tel")  || (objets[i].type == "time")  || 
			 (objets[i].type == "url")  || (objets[i].type == "week")){
			objet[objets[i].name] = objets[i].value;//on egalise la propriete(name tag) avec sa valeur(value tag)
			} else if ((objets[i].type == "radio") && (objets[i].checked)){
			objet[objets[i].name] = objets[i].value;
			} else if ((objets[i].type == "checkbox") && (objets[i].checked)){
				values += objets[i].value + " ";
				console.log(values);
				objet[objets[i].name] = values;
			}
		}
		console.log(objet);
		jsonobj = JSON.stringify(objet);
	}
	//console.log(objet);
	var jsonobj = JSON.stringify(objet);//on pass l'objet js a objet JSON
	//console.log(jsonobj);
	console.log(jsonobj);
	//L'objet en forme JSON est sur la variable jsonobj, il ne reste plus qu'a l'ecrire sur le .json.
});
	app.controller('myController', ['$scope', '$http', function($scope, $http){
	$http.get('country_codes.json').success(function(data){
		console.log("It is a valid JSON file, indeed.");
		$scope.json = data;
	});
	$http.get('country_codes.json').error(function(data){
		console.log("It is not a valid JSON file!");
	});
}]);
})();
/*
var objet = {};//on cree un objet js vide
	var objets = document.getElementsByClassName('controlled');//on prend tous les tags qui ont controlled comme class
	for (var i = 0; objets[i] ; i++){
		if (objets[i].type == "text"){
			objet[objets[i].name] = objets[i].value;//on egalise la propriete(name tag) avec sa valeur(value tag)
		} else if ((objets[i].type == "radio") &&(objets[i].checked)) {
			objet[objets[i].name] = objets[i].value;
		}
	}
	var jsonobj = JSON.stringify(objet);//on pass l'objet js a objet JSON
	console.log(jsonobj);//on verifie que le JSON soit avec la bonne structure
*/