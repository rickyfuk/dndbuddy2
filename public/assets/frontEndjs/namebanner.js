// Function to load character information from Local Storage if any exists
$(window).on('load', function () {
	// The function "sendCharInfoToLocal" serve for
	// 1. loading the character data from database (**return null if not found)
	// 2. get the name / gender / race / class from the maindatabase table (if the character exist)
	// 3. put these data into the local stroage of the corresponding items (i.e.character name to charName-localstroage)
	sendCharInfoToLocal();

	//If statement to check if Local Storage has charcater info
	// if (localStorage.charClass != null) {
	//Get info from local storage

	//Calls functions to generate image, stats and weapons/skills

	// } else {
	// 	//Generates name and creates dropdown for Gender, Race and Class
	// generateName();
	// 	$('#gender').text('Gender');
	// 	$('#race').text('Race');
	// 	$('#class').text('Class');
	// editGender();
	// editRace();
	// editClass();


	// console.log('call 2');
	// console.log(race);
	// console.log(gender);
	// console.log(name);
	// console.log(classDisplay);
	// }
});

// 	// Random Name API, ajax GET and Then function
// 	// var queryURL =
// 	// 	'https://cors-anywhere.herokuapp.com/https://uzby.com/api.php?min=3&max=10';

// 	// $.ajax({
// 	// 	url: queryURL,
// 	// 	method: 'GET',
// 	// }).then(function (response) {
// 	// 	console.log(response);
// 	// 	$('#characterName').text(response);
// 	// localStorage.setItem('charName', response);
// 	// });
// }

//Function to edit Character Name
function editName() {
	$('#characterName').attr('contenteditable', 'true');

	// If 1st Double Click, save button will be generated
	if (count === 0) {
		var saveButton = $('<button>');
		$(saveButton).text('Save');
		$(saveButton).attr('id', 'saveBtn');
		$(saveButton).attr('type', 'button');
		$(saveButton).addClass('button');
		$('#addDrop').append(saveButton);
		$('#removeGender').hide();
		$('#removeRace').hide();
		$('#removeClass').hide();
		count = count + 1;
	}

	// Save Buttton sets user typed name to name banner, Local Storage and resets count
	$('#saveBtn').click(function () {
		$('#characterName').attr('contenteditable', 'false');
		$('#saveBtn').remove();
		$('#removeGender').show();
		$('#removeRace').show();
		$('#removeClass').show();
		response = $('#characterName').text();
		localStorage.setItem('charName', response);
		count = 0;
	});
}

// Allows Character Name to be edited after double click
$('#characterName').dblclick(function () {
	editName();
});

// Allows user to edit Gender
function editGender() {
	//Dynamically creates dropdown
	$('#addDrop').attr('data-dropdown-menu', '');
	$('#removeGender').addClass('is-dropdown-submenu-parent opens-right');
	$('#genderUL').addClass(
		'menu submenu is-dropdown-submenu first-sub vertical'
	);

	$(document).foundation();

	if (genderCount === 0) {
		// Creates Female List Item
		var femList = $('<li>');
		$(femList).attr('id', 'femList');
		$(femList).text('Female');
		$('#genderUL').append(femList);

		// Creates Male List Item
		var maleList = $('<li>');
		$(maleList).attr('id', 'maleList');
		$(maleList).text('Male');
		$('#genderUL').append(maleList);

		genderCount = genderCount + 1;
	}

	// Displays and sets 'Female' to localStorage on Click
	$('#femList').click(function () {
		var gender = 'Female';
		$('#gender').text(gender);
		localStorage.setItem('charGender', gender);
		$('#femList').remove();
		$('#maleList').remove();
		genderCount = 0;
		$('#addDrop').removeAttr('data-dropdown-menu', '');
		$(document).foundation();
		$('#removeGender').removeClass();
		$('#genderUL').removeClass();
		randomImage();
		stats();
		mobileStats();
	});

	// Displays and sets 'Male' to localStorage on Click
	$('#maleList').click(function () {
		var gender = 'Male';
		$('#gender').text(gender);
		localStorage.setItem('charGender', gender);
		$('#femList').remove();
		$('#maleList').remove();
		genderCount = 0;
		$('#addDrop').removeAttr('data-dropdown-menu', '');
		$(document).foundation();
		$('#removeGender').removeClass();
		$('#genderUL').removeClass();
		randomImage();
		stats();
		mobileStats();
	});
}

function editRace() {
	//Dynamically creates dropdown
	$('#addDrop').attr('data-dropdown-menu', '');
	$('#removeRace').addClass('is-dropdown-submenu-parent opens-right');
	$('#raceUL').addClass('menu submenu is-dropdown-submenu first-sub vertical');

	$(document).foundation();

	if (raceCount === 0) {
		$.get('/api/charrace', function (data) {
			for (let i = 0; i < data.length; i++) {
				let race = data[i].race;
				let raceList = $('<li>', {
					text: race,
					class: 'raceDropdown',
					click: function () {
						localStorage.setItem('charRace', race);
						$('#race').text(race);
						$('.raceDropdown').remove();
						raceCount = 0;
						$('#addDrop').removeAttr('data-dropdown-menu', '');
						$(document).foundation();
						$('#removeRace').removeClass();
						$('#raceUL').removeClass();
						randomImage();
						stats();
						mobileStats();
					},
				});
				$('#raceUL').append(raceList);
				raceCount++;
			}
		});
	}
}

function editClass() {
	//Dynamically creates dropdown
	$('#addDrop').attr('data-dropdown-menu', '');
	$('#removeClass').addClass('is-dropdown-submenu-parent opens-right');
	$('#classUL').addClass('menu submenu is-dropdown-submenu first-sub vertical');

	$(document).foundation();

	if (classCount === 0) {
		$.get('/api/charclass', function (data) {
			for (let i = 0; i < data.length; i++) {
				let charCl = data[i].name;
				let classList = $('<li>', {
					text: charCl,
					class: 'classDropdown',
					click: function () {
						localStorage.setItem('charClass', charCl);
						$('#class').text(charCl);
						$('.classDropdown').remove();
						classCount = 0;
						$('#addDrop').removeAttr('data-dropdown-menu', '');
						$(document).foundation();
						$('#removeClass').removeClass();
						$('#classUL').removeClass();
						randomImage();
						stats();
						weaponsSpells();
						mobileStats();
					},
				});
				$('#classUL').append(classList);
				classCount++;
			}
		});
	}
}

// Allows user to edit Gender, Race and Class after double click
$('#gender').dblclick(function () {
	editGender();
});

// Allows user to edit Gender, Race and Class after double click
$('#race').dblclick(function () {
	editRace();
});

// Allows user to edit Gender, Race and Class after double click
$('#class').dblclick(function () {
	editClass();
});
