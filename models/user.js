// user.js server for:
//  1. define the setup of the user table in the database
//  2. define the type and set the restriction for all the variable under user
//  3. define the forgine key relationship (if any)
//  4. export the user table to the database

// Requiring bcrypt for password hashing. Using the bcryptjs version as the regular bcrypt module sometimes causes errors on Windows machines
const bcrypt = require('bcryptjs');

module.exports = function (sequelize, DataTypes) {
	const User = sequelize.define(
		// the following 'user' defines the table name
		'User',
		// the following object defines each element inside this table
		{
			// The email cannot be null, and must be a proper email before creation
			email: {
				type: DataTypes.STRING,
				allowNull: false,
				unique: true,
				validate: {
					isEmail: true,
				},
			},
			// The password cannot be null
			password: {
				type: DataTypes.STRING,
				allowNull: false,
			},
		},
		{
			// this is the option for the table setup
			// 1. freeze the table name (will not go to plurual)
			freezeTableName: true,
			// 2. underscore between two words for the column (i.e. updateAt will change to update_at)
			underscored: true,
			// 3. the data will not remove from the database (need to define what should be deleted)
			paranoid: true,
		}
	);

	// Creating a custom method for our User model. This will check if an unhashed password entered by the user can be compared to the hashed password stored in our database
	User.prototype.validPassword = function (password) {
		return bcrypt.compareSync(password, this.password);
	};

	// Hooks are automatic methods that run during various phases of the User Model lifecycle
	// In this case, before a User is created, we will automatically hash their password
	User.addHook('beforeCreate', function (user) {
		user.password = bcrypt.hashSync(
			user.password,
			bcrypt.genSaltSync(10),
			null
		);
	});

	// foreign key setup
	User.associate = function (models) {
		User.hasMany(models.MainDatabase, {
			onDelete: 'cascade',
		});
	};

	return User;
};
