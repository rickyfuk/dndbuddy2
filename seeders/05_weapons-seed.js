'use strict';
const date = new Date();

const inputData = [
	['Club', 'Simple Melee Weapons', '1d4', 'bludgeoning', 'Light'],
	[
		'Dagger',
		'Simple Melee Weapons',
		'1d4',
		'piercing',
		'Finesse, light, thrown (range 20/60)',
	],
	['Greatclub', 'Simple Melee Weapons', '1d8', 'bludgeoning', 'Two-handed'],
	[
		'Handaxe',
		'Simple Melee Weapons',
		'1d6',
		'slashing',
		'Light, thrown (range 20/60)',
	],
	[
		'Javelin',
		'Simple Melee Weapons',
		'1d6',
		'piercing',
		'Thrown (range 30/120)',
	],
	[
		'Light hammer',
		'Simple Melee Weapons',
		'1d4',
		'bludgeoning',
		'Light, thrown (range 20/60)',
	],
	['Mace', 'Simple Melee Weapons', '1d6', 'bludgeoning', 'Heavy'],
	[
		'Quarterstaff',
		'Simple Melee Weapons',
		'1d6',
		'bludgeoning',
		'Versatile (1d8)',
	],
	['Sickle', 'Simple Melee Weapons', '1d4', 'slashing', 'Light'],
	[
		'Spear',
		'Simple Melee Weapons',
		'1d6',
		'piercing',
		'Thrown (range 20/60), versatile (1d8)',
	],
	[
		'Crossbow, light',
		'Simple Ranged Weapons',
		'1d8',
		'piercing',
		'Ammunition (range 80/320), loading, two-handed',
	],
	[
		'Dart',
		'Simple Ranged Weapons',
		'1d4',
		'piercing',
		'Finesse, thrown (range 20/60)',
	],
	[
		'Shortbow',
		'Simple Ranged Weapons',
		'1d6',
		'piercing',
		'Ammunition (range 80/320), two-handed',
	],
	[
		'Sling',
		'Simple Ranged Weapons',
		'1d4',
		'bludgeoning',
		'Ammunition (range 30/120)',
	],
	['Battleaxe', 'Martial Melee Weapons', '1d8', 'slashing', 'Versatile (1d10)'],
	['Flail', 'Martial Melee Weapons', '1d8', 'bludgeoning', 'Finesse, reach'],
	[
		'Glaive',
		'Martial Melee Weapons',
		'1d10',
		'slashing',
		'Heavy, reach, two-handed',
	],
	[
		'Greataxe',
		'Martial Melee Weapons',
		'1d12',
		'slashing',
		'Heavy, two-handed',
	],
	[
		'Greatsword',
		'Martial Melee Weapons',
		'2d6',
		'slashing',
		'Heavy, two-handed',
	],
	[
		'Halberd',
		'Martial Melee Weapons',
		'1d10',
		'slashing',
		'Heavy, reach, two-handed',
	],
	['Lance', 'Martial Melee Weapons', '1d12', 'piercing', 'Reach, special'],
	['Longsword', 'Martial Melee Weapons', '1d8', 'slashing', 'Versatile (1d10)'],
	['Maul', 'Martial Melee Weapons', '2d6', 'bludgeoning', 'Heavy, two-handed'],
	['Morningstar', 'Martial Melee Weapons', '1d8', 'piercing', 'Finesse, reach'],
	[
		'Pike',
		'Martial Melee Weapons',
		'1d10',
		'piercing',
		'Heavy, reach, two-handed',
	],
	['Rapier', 'Martial Melee Weapons', '1d8', 'piercing', 'Finesse'],
	['Scimitar', 'Martial Melee Weapons', '1d6', 'slashing', 'Finesse, light'],
	['Shortsword', 'Martial Melee Weapons', '1d6', 'piercing', 'Finesse, light'],
	[
		'Trident',
		'Martial Melee Weapons',
		'1d6',
		'piercing',
		'Thrown (range 20/60), versatile (1d8)',
	],
	['War pick', 'Martial Melee Weapons', '1d8', 'piercing', 'Reach, special'],
	[
		'Warhammer',
		'Martial Melee Weapons',
		'1d8',
		'bludgeoning',
		'Versatile (1d10)',
	],
	['Whip', 'Martial Melee Weapons', '1d4', 'slashing', 'Finesse, reach'],
	[
		'Blowgun',
		'Martial Ranged Weapons',
		'1d4',
		'piercing',
		'Ammunition (range 25/100), loading',
	],
	[
		'Crossbow, hand',
		'Martial Ranged Weapons',
		'1d6',
		'piercing',
		'Ammunition (range 30/120), light, loading',
	],
	[
		'Crossbow, heavy',
		'Martial Ranged Weapons',
		'1d10',
		'piercing',
		'Ammunition (range 100/400), heavy, loading, two-handed',
	],
	[
		'Longbow',
		'Martial Ranged Weapons',
		'1d8',
		'piercing',
		'Ammunition [range 150/600], heavy, two-handed',
	],
];

module.exports = {
	up: async (queryInterface, Sequelize) => {
		const inputarray = [];
		for (let i = 0; i < inputData.length; i++) {
			inputarray.push({
				name: inputData[i][0],
				proficiency: inputData[i][1],
				damage_dice: inputData[i][2],
				damage_type: inputData[i][3],
				properties: inputData[i][4],
				created_at: date,
				updated_at: date,
			});
		}

		await queryInterface.bulkInsert('charWeapon', inputarray, {
			validate: true,
			ignoreDuplicates: true,
		});
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete('charWeapon', null, {});
	},
};
