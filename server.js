// Main server
// Get the express dependencies
const express = require('express');
// express-session for controlling the validality of the login session
const session = require('express-session');
// Requiring passport from the passport-config.js
// (no need for require passport directly as the module export by passport-config has included passport module)
const passport = require('./config/passport-config');

// Sets up the Express App and PORT for Frontend
const app = express();
const PORT = process.env.PORT || 8080;

// Requiring our models for syncing
const db = require('./models');

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static('public'));

// (standard requirment for using passport module)
// the sessions moduel for keeping track of our user's login status
app.use(
	session({ secret: 'keyboard cat', resave: true, saveUninitialized: true })
);
app.use(passport.initialize());
app.use(passport.session());

// Set Handlebars
const exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Set the route
const htmlRoute = require('../dnd-buddy-2.0/controllers/htmlRoute');
const apiRoute = require('../dnd-buddy-2.0/controllers/apiRoute');

app.use(apiRoute);
app.use(htmlRoute);

// sync the sequelize model
db.sequelize.sync({ force: true }).then(function () {
	app.listen(PORT, function () {
		console.log('App listening on PORT ' + PORT);
	});
});
