'use strict';
const date = new Date();

const inputData = [
	['1', '74'],
	['2', '76'],
	['2', '1'],
	['1', '15'],
	['2', '56'],
];

module.exports = {
	up: async (queryInterface, Sequelize) => {
		const inputarray = [];
		for (let i = 0; i < inputData.length; i++) {
			inputarray.push({
				main_database_id: inputData[i][0],
				char_spell_id: inputData[i][1],
				created_at: date,
				updated_at: date,
			});
		}
		await queryInterface.bulkInsert('main_spell', inputarray, {
			validate: true,
			ignoreDuplicates: true,
		});
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete('main_spell', null, {});
	},
};
