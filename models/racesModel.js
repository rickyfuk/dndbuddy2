'use strict';
// This race.js server for:
//  1. define the setup of the table in the database
//  2. define the type and set the restriction for all the variable under race
//  3. define the forgine key relationship (if any)
//  4. export the race table to the database

module.exports = function (sequelize, DataTypes) {
	const Race = sequelize.define(
		// the following 'race' define the table name
		'Race',
		// the following object define each element inside this table
		{
			race: DataTypes.STRING,
			as_str: DataTypes.INTEGER,
			as_dex: DataTypes.INTEGER,
			as_con: DataTypes.INTEGER,
			as_int: DataTypes.INTEGER,
			as_wis: DataTypes.INTEGER,
			as_cha: DataTypes.INTEGER,
			language: DataTypes.STRING,
			language2: DataTypes.STRING,
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
	// 1. maindatabase and race - (one to many relationship)
	Race.associate = function (models) {
		Race.hasMany(models.MainDatabase, {
			onDelete: 'cascade',
		});
	};

	return Race;
};
