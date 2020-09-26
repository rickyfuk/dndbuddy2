'use strict';
// This charClass.js server for:
//  1. define the setup of the table in the database
//  2. define the type and set the restriction for all the variable under charClass
//  3. define the forgine key relationship (if any)
//  4. export the charClass table to the database

module.exports = function (sequelize, DataTypes) {
	const MainDatabase = sequelize.define(
		// the following 'charClass' define the table name
		'MainDatabase',
		// the following object define each element inside this table
		{
			name: {
				type: DataTypes.STRING,
				allowNull: false,
				isAlphanumeric: true,
				unique: true,
				validate: {
					len: [1, 50],
				},
			},
			gender: {
				type: DataTypes.STRING,
				allowNull: false,
				len: [1, 6],
			},
			level: {
				type: DataTypes.INTEGER,
				allowNull: false,
				len: [2],
			},
			stat_str: {
				type: DataTypes.INTEGER,
				allowNull: false,
				len: [2],
			},
			stat_dex: {
				type: DataTypes.INTEGER,
				allowNull: false,
				len: [2],
			},
			stat_con: {
				type: DataTypes.INTEGER,
				allowNull: false,
				len: [2],
			},
			stat_int: {
				type: DataTypes.INTEGER,
				allowNull: false,
				len: [2],
			},
			stat_wis: {
				type: DataTypes.INTEGER,
				allowNull: false,
				len: [2],
			},
			stat_cha: {
				type: DataTypes.INTEGER,
				allowNull: false,
				len: [2],
			},
			stat_hp: {
				type: DataTypes.INTEGER,
				allowNull: false,
				len: [2],
			},
			stat_ac: {
				type: DataTypes.INTEGER,
				allowNull: false,
				len: [2],
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

	// 1. maindatabase and race - (one to many relationship)
	MainDatabase.associate = function (models) {
		MainDatabase.belongsTo(models.racesModel, {
			foreignKey: {
				allowNull: false,
			},
		});
	};

	// 2. maindatabase and class - (one to many relationship)
	MainDatabase.associate = function (models) {
		MainDatabase.belongsTo(models.charClass, {
			foreignKey: {
				allowNull: false,
			},
		});
	};

	// 3. maindatabase and spell - (many to many relationship)
	// please alert when putting in the data from frontend
	// the data goes to main_spell table
	MainDatabase.associate = function (models) {
		MainDatabase.belongsToMany(models.charSpell, {
			through: 'Main_spell',
		});
	};
	// old code
	// MainDatabase.associate = function (models) {
	// 	MainDatabase.belongsTo(models.charSpell, {
	// 		foreignKey: {
	// 			allowNull: true,
	// 		},
	// 	});
	// };

	// 4. maindatabase and weapon - (many to many relationship)
	// please alert when putting in the data from frontend
	// the data goes to main_weapon table
	MainDatabase.associate = function (models) {
		MainDatabase.belongsToMany(models.charWeapon, {
			through: 'Main_weapon',
		});
	};
	// old code
	// MainDatabase.associate = function (models) {
	// 	MainDatabase.belongsTo(models.CharWeapon, {
	// 		foreignKey: {
	// 			allowNull: true,
	// 		},
	// 	});
	// };

	MainDatabase.associate = function (models) {
		MainDatabase.belongsTo(models.User, {
			foreignKey: {
				allowNull: true,
			},
		});
	};
	return MainDatabase;
};
