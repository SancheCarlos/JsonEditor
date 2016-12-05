(function(){
	var filename = "country_codes.json";
	var app = angular.module('form', [ ]);//We create a module with no dependencies
	var objet = {};//We create an empty javascript object
	app.controller('ChampsController', function(){//Controller that will add controlled inputs into a json object
		this.addchamps = function(){
			var values = "";
			var objets = document.getElementsByClassName('controlled');//We take all controlled classes to add into the object
			for (var i = 0; objets[i] ; i++){
				if ((objets[i].type == "text") || (objets[i].type == "color") ||
				 (objets[i].type == "date") || (objets[i].type == "datetime") || 
				 (objets[i].type == "datetime-local")  || (objets[i].type == "email")  || 
				 (objets[i].type == "month")  || (objets[i].type == "number")  || 
				 (objets[i].type == "tel")  || (objets[i].type == "time")  || 
				 (objets[i].type == "url")  || (objets[i].type == "week")  || (objets[i].type == "range") || (objets[i].tagName == "TEXTAREA")){
				objet[objets[i].name] = objets[i].value;//
				} else if ((objets[i].type == "radio") && (objets[i].checked)){
				objet[objets[i].name] = objets[i].value;
				} else if ((objets[i].type == "checkbox") && (objets[i].checked)){
					values += objets[i].value + " ";
					objet[objets[i].name] = values;
				}
			}
			var old_value = document.getElementById("new_json").value;//We take old value of json output (in this case, old json file)
			var old_value2 = JSON.parse(old_value);//We change json objects into javascript objets format
			old_value2.push(objet);//We add the javascript object previusly created with all controlled inputs added
			old_value2 = JSON.stringify(old_value2, null, 2);//We change back format
			document.getElementById("new_json").value = old_value2;//We update json output
		}
	});
	app.controller('myController', ['$scope', '$http', function($scope, $http){//Controller that will print old json file
		$http.get(filename).success(function(data){
			console.log("It is a valid JSON file, indeed.");
			$scope.oldjson = data;
			$scope.$json = $scope.oldjson;
			console.log($scope.$json);
		});
		$http.get(filename).error(function(data){
			console.log("It is not a valid JSON file!");
		});
	}]);
	app.controller('jsonWriter', ['$scope', '$http', function($scope, $http){//Controller that will write old json file into json output
    	$http.get(filename).success(function(data){
        	console.log("It is a valid JSON file, indeed.");
        	console.log(objet);
        	var textedJson = JSON.stringify(data, null, 2);
        	document.getElementById("new_json").value += textedJson;
        	});
        $http.get(filename).error(function(data){
        	console.log("It is not a valid JSON file!");
    	});
	}]);
})();