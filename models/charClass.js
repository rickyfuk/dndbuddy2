'use strict';
// This charClass.js server for:
//  1. define the setup of the table in the database
//  2. define the type and set the restriction for all the variable under charClass
//  3. define the forgine key relationship (if any)
//  4. export the charClass table to the database

module.exports = function (sequelize, DataTypes) {
	const CharClass = sequelize.define(
		// the following 'charClass' define the table name
		'CharClass',
		// the following object define each element inside this table
		{
			name: {
				type: DataTypes.STRING,
			},
			deleted_at: { type: DataTypes.DATE },
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

	// foreign key setup
	// 1. maindatabase and class - (one to many relationship)
	CharClass.associate = function (models) {
		CharClass.hasMany(models.MainDatabase, {
			onDelete: 'cascade',
		});
	};

	return CharClass;
};
