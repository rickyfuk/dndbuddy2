'use strict';
const date = new Date();

const inputData = [
	[
		'Hobert',
		'Male',
		'11',
		'10',
		'11',
		'10',
		'12',
		'8',
		'15',
		'18',
		'15',
		'2',
		'1',
		'2',
	],
	[
		'Mary',
		'Female',
		'5',
		'8',
		'19',
		'12',
		'7',
		'18',
		'12',
		'13',
		'10',
		'3',
		'2',
		'4',
	],
];

module.exports = {
	up: async (queryInterface, Sequelize) => {
		const inputarray = [];
		for (let i = 0; i < inputData.length; i++) {
			inputarray.push({
				name: inputData[i][0],
				gender: inputData[i][1],
				level: inputData[i][2],
				stat_str: inputData[i][3],
				stat_dex: inputData[i][4],
				stat_con: inputData[i][5],
				stat_int: inputData[i][6],
				stat_wis: inputData[i][7],
				stat_cha: inputData[i][8],
				stat_hp: inputData[i][9],
				stat_ac: inputData[i][10],
				char_class_id: inputData[i][11],
				user_id: inputData[i][12],
				race_id: inputData[i][13],
				created_at: date,
				updated_at: date,
			});
		}
		await queryInterface.bulkInsert('mainDatabase', inputarray, {
			validate: true,
			ignoreDuplicates: true,
		});
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete('mainDatabase', null, {});
	},
};
