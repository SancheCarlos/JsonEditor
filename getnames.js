(function(){
	var app = angular.module('form', [ ]);//creation of a module that we insert in html tag
	app.controller('ChampsController', function(){
	var objet = {};//creation of an empty javascript objet
	this.addchamps = function(){//function that parses name and value attribute of the html into the objet previously created
		console.log("function addchamps");//test that it really enters in the function when submit button is clicked
		var objets = document.getElementsByClassName('controlled');//we take all tags with "controlled" as class
		for (var i = 0; objets[i] ; i++){//we pass trough all class tags.
			if (objets[i].type == "text"){//if input is text
			objet[objets[i].name] = objets[i].value;//we equal the name with its value and store it into the js object.
			} else if ((objets[i].type == "radio") &&(objets[i].checked)) {//if input is radio
			objet[objets[i].name] = objets[i].value;
			}
      //only text and radio inputs are evaluated for the moment (11:15 02/12/2016)
		}
		console.log(objet);//we check that the js object is exactly as we want
		jsonobj = JSON.stringify(objet);//we change format from js objet to json objet
	}

	//console.log(objet);
	this.forms = jsonvalue;//we store json object into our controller
	var jsonobj = JSON.stringify(objet);
	//console.log(jsonobj);
});
	var jsonvalue = [
 {
   "title": "UXP Sprint review - Next",
   "url": "http://10.25.31.4:8080/sprint-reviews/sprint_6/UXP-Sprint-review_Next_Q&A.mp4",
   "description": "What's coming next: UXP roadmap overview. ",
   "author": "ADNENE MANAI",
   "date": "2016/09/28",
   "level": "user",
   "tags": " label label-success",
   "category": "sprint review",
   "color": "label label-primary",
   "keyword": "misysboard",
   "colorkey": "label label-misys",
   "tagged": "UXP",
   "tagcolor": "label label-uxp",
   "poster": "icons/posters/uxp-next.png",
   "image": "icons/misys.png",
   "id": "uxp-sprint-review-next"
 },
 {
   "title": "UXP Sprint review - Template Sharing",
   "url": "http://10.25.31.4:8080/sprint-reviews/sprint_6/UXP-Sprint-review_05_template sharing.mp4",
   "description": "David is walking us through template creation and sharing using the Component editor. You can see how to attach reports and data t",
   "author": "DAVID BOCLE",
   "date": "2016/09/28",
   "level": "developper",
   "tags": " label label-danger",
   "category": "sprint review",
   "color": "label label-primary",
   "keyword": "misysboard",
   "colorkey": "label label-misys",
   "tagged": "UXP",
   "tagcolor": "label label-uxp",
   "poster": "icons/posters/uxp-share.png",
   "image": "icons/developpers.png",
   "id": "uxp-sprint-review-template-sharing"
 }];

})();
