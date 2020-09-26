'use strict';
const date = new Date();

const inputData = [
	['1', '36'],
	['1', '1'],
	['2', '36'],
	['1', '15'],
	['2', '23'],
];

module.exports = {
	up: async (queryInterface, Sequelize) => {
		const inputarray = [];
		for (let i = 0; i < inputData.length; i++) {
			inputarray.push({
				main_database_id: inputData[i][0],
				char_weapon_id: inputData[i][1],
				created_at: date,
				updated_at: date,
			});
		}
		await queryInterface.bulkInsert('main_weapon', inputarray, {
			validate: true,
			ignoreDuplicates: true,
		});
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete('main_weapon', null, {});
	},
};
