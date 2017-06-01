// bring in Express
var express = require('express');
var app = express();

// set up the Handlebars view engine
var handlebars = require('express-handlebars').create({ defaultLayout:'main' });
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

// find static files in public directory
app.use(express.static('public'));

//***ROUTES***//

//Home page
app.get("/", function(req,res){
	//Render the "home" template 
	res.render("home");
});


//About page
app.get("/about", function(req,res){
	//Render the "about" template 
	res.render("about");
});

//Courses page
app.get("/courses", function(req,res){
	//Render the "courses" template 
	res.render("courses");
});



//Start the server & listen for traffic on port 7000
app.listen(7000,function(){
	//Prints out a message to the console
	console.log ('Listening on port 7000, press Ctrl + C to exit')
});