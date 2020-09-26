'use strict';
// This charWeapon.js server for:
//  1. define the setup of the table in the database
//  2. define the type and set the restriction for all the variable under charWeapon
//  3. define the forgine key relationship (if any)
//  4. export the charWeapon table to the database

module.exports = function (sequelize, DataTypes) {
	const CharWeapon = sequelize.define(
		// the following 'charWeapon' define the table name
		'CharWeapon',
		// the following object define each element inside this table
		{
			name: {
				type: DataTypes.STRING,
				allowNull: false,
				isAlphanumeric: true,
				unique: true,
				validate: {
					len: [1, 80],
				},
			},
			proficiency: {
				type: DataTypes.STRING,
				allowNull: false,
				isAlphanumeric: true,
			},
			damage_dice: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			damage_type: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			properties: {
				type: DataTypes.STRING,
				allowNull: false,
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
	// 1. maindatabase and weapon - (many to many relationship)
	// please alert when putting in the data from frontend
	// the data goes to main_weapon table
	CharWeapon.associate = function (models) {
		CharWeapon.belongsToMany(models.MainDatabase, {
			onDelete: 'cascade',
			through: 'Main_weapon',
		});
	};
	// old code
	// CharWeapon.associate = function (models) {
	// 	CharWeapon.hasMany(models.MainDatabase, {
	// 		onDelete: 'cascade',
	// 	});
	// };

	return CharWeapon;
};
