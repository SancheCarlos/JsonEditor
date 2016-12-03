var testJSON;
testJSON = {"code_postal" : "95170"};
document.getElementById('test').innerHTML = testJSON.code_postal;
//$("#codepostal").attr("placeholder", testJSON.code_postal);
	var prop = {
			"title": "contact", // the name of our JSON
			"type": "object", // we're declaring an object
			"properties": {
				"myname" : "carlos",
				/* properties we want: postcode...
				** we must precise the type of the data */
				"postcode":{	
					"type": "string"
				}
			}
	}

	document.getElementById('test').innerHTML = prop.title;
