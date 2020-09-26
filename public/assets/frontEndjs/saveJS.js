$(document).ready(function () {
	$('#savetoDB').on('click', function () {
		let name = localStorage.getItem('charName');
		let race = localStorage.getItem('charRace');
		let charClass = localStorage.getItem('charClass');
		let charGender = localStorage.getItem('charGender');
		let charID = localStorage.getItem('charID');
		console.log(charID);
		if (charID === null) {
			createUserChar(name, race, charClass, charGender);
		} else {
			updateUserChar(name, race, charClass, charGender, charID);
		}
	});

	//Logout button clears localstorage so a new user can login
	$('#logout').on('click', function () {
		// console.log('logout works!');
		localStorage.clear();
		$(this).attr('href', '/logout');
		$(this).click();
	});

	// update the user data with the existing character
	function updateUserChar(name, race, charClass, charGender, charID) {
		$.ajax({
			url: '/api/save',
			type: 'PUT',
			data: {
				char_name: name,
				race: race,
				char_class: charClass,
				char_gender: charGender,
				char_id: charID,
			},
		});
	}

	// save the data to the database for a new character
	function createUserChar(name, race, charClass, charGender, charID) {
		$.ajax({
			url: '/api/saveANewChar',
			type: 'POST',
			data: {
				char_name: name,
				race: race,
				char_class: charClass,
				char_gender: charGender,
			},
		});
	}
});
