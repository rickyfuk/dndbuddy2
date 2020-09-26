// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
const express = require('express');
const router = express.Router();

// Import the model (index.js) to use its database functions.
const db = require('../models');

// Requiring our custom middleware for checking if a user is logged in
const isAuthenticated = require('../config/middleware/isAuthenticated');

// Routes
// =============================================================

// Create all our routes and set up logic within those routes where required.

// the route for register the account to our database
router.get('/register', function (req, res) {
	// If the user already has an account send them to the members page
	if (req.user) {
		return res.redirect('/');
		// return res.render('indexmodal');
	}
	res.render('register', { layout: 'auth' });
});

// router.get('/modal', isAuthenticated, function (req, res) {
// 	res.render('indexmodal');
// });

// the route for login into the page
router.get('/login', function (req, res) {
	// console.log('login route rum');
	// If the user already sign in an account send them to the main page
	if (req.user) {
		return res.redirect('/');
	}
	res.render('login', { layout: 'auth' });
});

// Here we've add our isAuthenticated middleware to this route.
// If a user who is not logged in tries to access this route they will be redirected to the signup page
router.get('/', isAuthenticated, function (req, res) {
	// console.log('normal route rum');
	res.render('index');
	// *** for testing only - for indexmodal even the normal login route
	// res.render('indexmodal');
});

// Here we've add our isAuthenticated middleware to this route.
// If a user who is not logged in tries to access this route they will be redirected to the signup page
// this route is serve for the user to go to the LANDING PAGE WITH MODAL
router.get('/indexModal', isAuthenticated, function (req, res) {
	// console.log('indexmodal is running');
	res.render('indexmodal');
});

// Here we've add our isAuthenticated middleware to this route.
// If a user who is not logged in tries to access this route they will be redirected to the signup page
// this route is serve for the user to go to the DEFENSE PAGE FOR MOBILE SCREEN
router.get('/defense', isAuthenticated, function (req, res) {
	// console.log('indexmodal is running');
	res.render('defense');
});

// Here we've add our isAuthenticated middleware to this route.
// If a user who is not logged in tries to access this route they will be redirected to the signup page
// this route is serve for the user to go to the OFFENSE PAGE FOR MOBILE SCREEN
router.get('/offense', isAuthenticated, function (req, res) {
	// console.log('indexmodal is running');
	res.render('offense');
});

// Here we've add our isAuthenticated middleware to this route.
// If a user who is not logged in tries to access this route they will be redirected to the signup page
// this route is serve for the user to go to the ROLEPLAY PAGE FOR MOBILE SCREEN
router.get('/roleplay', isAuthenticated, function (req, res) {
	// console.log('indexmodal is running');
	res.render('roleplay');
});

// Here we've add our isAuthenticated middleware to this route.
// If a user who is not logged in tries to access this route they will be redirected to the signup page
// this route is serve for the user to go to the UTILITY PAGE FOR MOBILE SCREEN
router.get('/utility', isAuthenticated, function (req, res) {
	// console.log('indexmodal is running');
	res.render('utility');
});

module.exports = router;
