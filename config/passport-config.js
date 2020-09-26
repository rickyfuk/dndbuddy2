// require the npm model
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
// required the database for reading and writing the data into database
const db = require('../models');

// function initialize(passport, getUserByEmail, getUserById) {
// 	const authenticateUser = async (email, password, done) => {
// 		const user = getUserByEmail(email);
// 		if (user == null) {
// 			return done(null, false, { message: 'No user with that email' });
// 		}

// 		try {
// 			if (await bcrypt.compare(password, user.password)) {
// 				return done(null, user);
// 			} else {
// 				return done(null, false, { message: 'Password incorrect' });
// 			}
// 		} catch (e) {
// 			return done(e);
// 		}
// 	};

// 	passport.use(new LocalStrategy({ usernameField: 'email' }, authenticateUser));
// 	passport.serializeUser((user, done) => done(null, user.id));
// 	passport.deserializeUser((id, done) => {
// 		return done(null, getUserById(id));
// 	});
// }

// module.exports = initialize;

// Telling passport we want to use a Local Strategy. In other words, we want login with a username/email and password
passport.use(
	new LocalStrategy(
		// Our user will sign in using an email, rather than a "username"
		{
			usernameField: 'email',
		},
		function (email, password, done) {
			// When a user tries to sign in this code runs
			db.User.findOne({
				where: {
					email: email,
				},
			}).then(function (dbUser) {
				// If there's no user with the given email
				if (!dbUser) {
					return done(null, false, {
						message: 'Incorrect email.',
					});
				}
				// If there is a user with the given email, but the password the user gives us is incorrect
				else if (!dbUser.validPassword(password)) {
					return done(null, false, {
						message: 'Incorrect password.',
					});
				}
				// If none of the above, return the user
				return done(null, dbUser);
			});
		}
	)
);

// In order to help keep authentication state across HTTP requests,
// Sequelize needs to serialize and deserialize the user
// Just consider this part boilerplate needed to make it all work
passport.serializeUser(function (user, cb) {
	cb(null, user);
});

passport.deserializeUser(function (obj, cb) {
	cb(null, obj);
});

// Exporting our configured passport
module.exports = passport;
