'use strict';
const date = new Date();

const inputData = ['Bard', 'Cleric', 'Fighter', 'Ranger', 'Rogue', 'Wizard'];

module.exports = {
	up: async (queryInterface, Sequelize) => {
		const inputarray = [];
		for (let i = 0; i < inputData.length; i++) {
			inputarray.push({
				name: inputData[i],
				created_at: date,
				updated_at: date,
			});
		}

		await queryInterface.bulkInsert('charClass', inputarray, {
			validate: true,
			ignoreDuplicates: true,
		});
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete('charClass', null, {});
	},
};
