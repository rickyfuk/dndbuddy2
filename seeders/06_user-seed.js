'use strict';
const date = new Date();

// the original login password for aa@aa.com is 11111111
// the original login password for bb@b.com is 22222222
const inputData = [
	['aa@aa.com', '$2y$10$5FtL6gG2ddyUf/9pWKvebOssL4Rw.x32o51Wh/psVA9U/5NWXiQ8K'],
	['bb@bb.com', '$2y$10$INe1vl9eyXC3Hm3gCw954eH.3m2JeOAoxOjd7mVAXwQ3yWAfHUNsK'],
];

module.exports = {
	up: async (queryInterface, Sequelize) => {
		const inputarray = [];
		for (let i = 0; i < inputData.length; i++) {
			inputarray.push({
				email: inputData[i][0],
				password: inputData[i][1],
				created_at: date,
				updated_at: date,
			});
		}
		await queryInterface.bulkInsert('user', inputarray, {
			validate: true,
			ignoreDuplicates: true,
		});
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete('user', null, {});
	},
};
