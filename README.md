JSON Editor

Synopsis
___________________________________________________________________________
JSON Editor is a tool allowing to modify the content of a .json file by 
adding to the previous file, an object with the help of a form. The file 
itself isn't modified but our tool offers to the user the new content in 
another field where he just needs to copy it into his original file.

Used files
___________________________________________________________________________
index.html: the web page representing the JSON Editor, it's the page that 
allows user to modify and see his content.

JSONEditor.js: the core, the script that handles all the json files and 
new forms.
*.json: json files to modify.

Requirements
___________________________________________________________________________
- Bower
- Localhost

Installation
___________________________________________________________________________
A simple "bower install" command allows you to install all needed 
dependences to run the project.
Use the following command into the desired folder:
"Bower install https://github.com/SancheCarlos/JsonEditor.git"
This line will install angularjs and bootstrap packages too.

Utilisation
___________________________________________________________________________
To begin with, in the file.js : you have to modify the filename variable,
 if you want to edit a new file.
then in the html file you can add any kind of fields accoarding to your json file.
the original content of the html file is an exemple of various kind of inputs.
