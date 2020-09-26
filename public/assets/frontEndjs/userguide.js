$("#hitplus").click(function() {

	var health = $("#health").text();
	var hitpoints = parseInt(health);
    var total = hitpoints + 1;
	$("#health").text(total);
});

$("#hitminus").click(function() {

	var health = $("#health").text();
	var hitpoints = parseInt(health);
    var total = hitpoints -1;
	$("#health").text(total);
});

$(document).foundation();

//USER GUIDE MODAL
$("#index-user-guide").click(function () {
    event.preventDefault();
    // create a div for the modal
    var userModal = $('<div>');
    // add class and ID for modal
    $(userModal).addClass('reveal revealStyle');
    $(userModal).attr('id', 'user-modal');
    $(userModal).attr('data-reveal', '');
    // append the modal div to mainbody
	$('#mainBody').append(userModal);
	
	//Character Setup Guide
	var navCharSetup = $('<h2>');
	// add text for the h2 tag
	$(navCharSetup).text("Character Setup");
	// append the h2 to the div
	$(userModal).append(navCharSetup);
	var bannerNameP = $('<p>');
	// add text for the h2 tag
	$(navCharSetupP).text("To initialize the character setup questionnaire click on Character Setup in the Navigation Bar.");
	// append the p to the div
	$(userModal).append(navCharSetupP);

	//Save Guide
	var saveGuide = $('<h2>');
	// add text for the h2 tag
	$(saveGuide).text("Save Guide");
	// append the h2 to the div
	$(userModal).append(saveGuide);
	var saveGuideP = $('<p>');
	// add text for the h2 tag
	$(saveGuideP).text("Click on Save to preserve any changes to character.  After making changes to character name, gender, race or class be sure to click on Save to make changes permanent.");
	// append the p to the div
	$(userModal).append(saveGuideP);
	
	//Character Name Guide
	var bannerName = $('<h2>');
	// add text for the h2 tag
	$(bannerName).text("Edit Name");
	// append the h2 to the div
	$(userModal).append(bannerName);
	var bannerNameP = $('<p>');
	// add text for the h2 tag
	$(bannerNameP).text("Character Name can be edited by double clicking directly on the character's name. An editable text field will appear. Simply type the desired character name and click the save button.");
	// append the p to the div
	$(userModal).append(bannerNameP);

	//Character Gender, Race, Class Guide
	var bannerGen = $('<h2>');
	// add text for the h2 tag
	$(bannerGen).text('Edit Gender, Race or Class');
	// append the h2 to the div
	$(userModal).append(bannerGen);
	var bannerP = $('<p>');
	// add text for the h2 tag
	$(bannerP).text('Character Gender, Race or Class can be edited by double clicking on element. This will generate a dropdown menu of available choices.  Simply click on the desired gender, race or class and it will automatically be applied to your character. NOTE: A CHARACTERS RACE AND CLASS WILL IMPACT ITS ATTRIBUTE STATS.');
	// append the p to the div
	$(userModal).append(bannerP);

	//Hitpoints Guide
	var hitTitle = $('<h2>');
	// add text for the h2 tag
	$(hitTitle).text("Hitpoints");
	// append the h2 to the div
	$(userModal).append(hitTitle);
	var hitP = $('<p>');
	// add text for the h2 tag
	$(hitP).text("Hitpoints determine how tough your character is in combat and other dangerous situations. Hitpoints can be adjusted throughout the campaign by simply clicking on the + or - buttons.");
	// append the p to the div
	$(userModal).append(hitP);
  
	//Armor Class Guide
	var armorTitle = $('<h2>');
	// add text for the h2 tag
	$(armorTitle).text("Armor Class");
	// append the h2 to the div
	$(userModal).append(armorTitle);
	var armorP = $('<p>');
	// add text for the h2 tag
	$(armorP).text("Armor class represents your defense against attacks from monsters.");
	// append the p to the div
	$(userModal).append(armorP);

	//Dice Roller Guide
	var diceRoller = $('<h2>');
	// add text for the h2 tag
	$(diceRoller).text("Dice");
	// append the h2 to the div
	$(userModal).append(diceRoller);
	var diceP = $('<p>');
	// add text for the h2 tag
	$(diceP).text("Click on any of the various sided dice to generate a random roll.");
	// append the p to the div
	$(userModal).append(diceP);

	//Footer Navbar Guide
	var bottomNav = $('<h2>');
	// add text for the h2 tag
	$(bottomNav).text('Offense, Defense, Utility, Role Play');
	// append the h2 to the div
	$(userModal).append(bottomNav);
	var botNav = $('<p>');
	// add text for the h2 tag
	$(botNav).text('Click on any of these links to quickly navigate app and speed up play.');
	// append the p to the div
	$(userModal).append(botNav);
  
	// create a button tag for the close button
	var userClose = $('<button>');
	// add the class and attr for the button
	$(userClose).addClass('close-button');
	$(userClose).attr('data-close', '');
	$(userClose).attr('aria-label', 'Close reveal');
	$(userClose).attr('type', 'button');
	// add the span for the close button
	$(userClose).html('<span aria-hidden="true">&times;</span>');
	// append the button to the div
	$(userModal).append(userClose);

	//Document functionality with Foundation
	$(document).foundation();
	$('#user-modal').foundation('open');
});	

$("#off-user-guide").click(function () {
    event.preventDefault();
    // create a div for the modal
    var userModal = $('<div>');
    // add class and ID for modal
    $(userModal).addClass('reveal revealStyle');
    $(userModal).attr('id', 'user-modal');
    $(userModal).attr('data-reveal', '');
    // append the modal div to mainbody
	$('#mainBody').append(userModal);

	//Save Guide
	var saveGuide = $('<h2>');
	// add text for the h2 tag
	$(saveGuide).text("Save Guide");
	// append the h2 to the div
	$(userModal).append(saveGuide);
	var saveGuideP = $('<p>');
	// add text for the h2 tag
	$(saveGuideP).text("Click on Save to preserve any changes to character.  After making changes to character name, gender, race or class be sure to click on Save to make changes permanent.");
	// append the p to the div
	$(userModal).append(saveGuideP);

	//Hitpoints Guide
	var hitTitle = $('<h2>');
	// add text for the h2 tag
	$(hitTitle).text("Hitpoints");
	// append the h2 to the div
	$(userModal).append(hitTitle);
	var hitP = $('<p>');
	// add text for the h2 tag
	$(hitP).text("Hitpoints determine how tough your character is in combat and other dangerous situations. Hitpoints can be adjusted throughout the campaign by simply clicking on the + or - buttons.");
	// append the p to the div
	$(userModal).append(hitP);

	var apiClass = localStorage.getItem('charClass');

	if (apiClass === "Fighter" || "Ranger" || "Rogue") {

		//STRENGTH API
		var strTitle = $('<h2>');
		// add text for the h2 tag
		$(strTitle).text("Strength");
		// append the h2 to the div
		$(userModal).append(strTitle);
		var strText = $('<p>');
		$(strText).attr('id', 'strength-text');
		// add text for the h1 tag
		$(strText).text('');
		// append the modal to the div
		$(userModal).append(strText);

		//GET to pull Strength description from the API 
		var strURL = "https://www.dnd5eapi.co/api/ability-scores/str";
		// console.log(strURL);

		$.ajax({
			url: strURL,
			method: "GET"
		}).then(function (strRes) {
			$("#strength-text").text(strRes.desc)
		});
		
		//DEXTERITY API
		var dexTitle = $('<h2>');
		// add text for the h2 tag
		$(dexTitle).text("Dexterity");
		// append the h2 to the div
		$(userModal).append(dexTitle);
		var dexText = $('<p>');
		$(dexText).attr('id', 'dex-text');
		// add text for the h1 tag
		$(dexText).text('');
		// append the modal to the div
		$(userModal).append(dexText);

		//GET to pull Strength description from the API 
		var dexURL = "https://www.dnd5eapi.co/api/ability-scores/dex";
		// console.log(dexURL);

		$.ajax({
			url: dexURL,
			method: "GET"
		}).then(function (dexRes) {
			$("#dex-text").text(dexRes.desc)
		});
	}

	else {
		//INTELLIGENCE API
		var intTitle = $('<h2>');
		// add text for the h2 tag
		$(intTitle).text("Intelligence");
		// append the h2 to the div
		$(userModal).append(intTitle);
		var intText = $('<p>');
		$(intText).attr('id', 'int-text');
		// add text for the h1 tag
		$(intText).text('');
		// append the modal to the div
		$(userModal).append(intText);

		//GET to pull Strength description from the API 
		var intURL = "https://www.dnd5eapi.co/api/ability-scores/int";
		// console.log(strURL);

		$.ajax({
			url: intURL,
			method: "GET"
		}).then(function (intRes) {
			$("#int-text").text(intRes.desc)
		});
		
		//WISDOM API
		var wisTitle = $('<h2>');
		// add text for the h2 tag
		$(wisTitle).text("Wisdom");
		// append the h2 to the div
		$(userModal).append(wisTitle);
		var wisText = $('<p>');
		$(wisText).attr('id', 'wis-text');
		// add text for the h1 tag
		$(wisText).text('');
		// append the modal to the div
		$(userModal).append(wisText);

		//GET to pull Strength description from the API 
		var wisURL = "https://www.dnd5eapi.co/api/ability-scores/wis";
		// console.log(strURL);

		$.ajax({
			url: wisURL,
			method: "GET"
		}).then(function (wisRes) {
			$("#wis-text").text(wisRes.desc)
		});
	}

	//Dice Roller Guide
	var diceRoller = $('<h2>');
	// add text for the h2 tag
	$(diceRoller).text('Dice');
	// append the h2 to the div
	$(userModal).append(diceRoller);
	var diceP = $('<p>');
	// add text for the h2 tag
	$(diceP).text('Click on any of the various sided dice to generate a random roll.');
	// append the p to the div
	$(userModal).append(diceP);

	//Footer Navbar Guide
	var bottomNav = $('<h2>');
	// add text for the h2 tag
	$(bottomNav).text('Home, Defense, Utility, Role Play');
	// append the h2 to the div
	$(userModal).append(bottomNav);
	var botNav = $('<p>');
	// add text for the h2 tag
	$(botNav).text('Click on any of these links to quickly navigate app and speed up play.');
	// append the p to the div
	$(userModal).append(botNav);
  
	// create a button tag for the close button
	var userClose = $('<button>');
	// add the class and attr for the button
	$(userClose).addClass('close-button');
	$(userClose).attr('data-close', '');
	$(userClose).attr('aria-label', 'Close reveal');
	$(userClose).attr('type', 'button');
	// add the span for the close button
	$(userClose).html('<span aria-hidden="true">&times;</span>');
	// append the button to the div
	$(userModal).append(userClose);

	//Document functionality with Foundation
	$(document).foundation();
	$('#user-modal').foundation('open');
});	

$("#def-user-guide").click(function () {
    event.preventDefault();
    // create a div for the modal
    var userModal = $('<div>');
    // add class and ID for modal
    $(userModal).addClass('reveal revealStyle');
    $(userModal).attr('id', 'user-modal');
    $(userModal).attr('data-reveal', '');
    // append the modal div to mainbody
	$('#mainBody').append(userModal);

	//Save Guide
	var saveGuide = $('<h2>');
	// add text for the h2 tag
	$(saveGuide).text("Save Guide");
	// append the h2 to the div
	$(userModal).append(saveGuide);
	var saveGuideP = $('<p>');
	// add text for the h2 tag
	$(saveGuideP).text("Click on Save to preserve any changes to character.  After making changes to character name, gender, race or class be sure to click on Save to make changes permanent.");
	// append the p to the div
	$(userModal).append(saveGuideP);

	//Hitpoints Guide
	var hitTitle = $('<h2>');
	// add text for the h2 tag
	$(hitTitle).text("Hitpoints");
	// append the h2 to the div
	$(userModal).append(hitTitle);
	var hitP = $('<p>');
	// add text for the h2 tag
	$(hitP).text("Hitpoints determine how tough your character is in combat and other dangerous situations. Hitpoints can be adjusted throughout the campaign by simply clicking on the + or - buttons.");
	// append the p to the div
	$(userModal).append(hitP);

	//Armor Class Guide
	var armorTitle = $('<h2>');
	// add text for the h2 tag
	$(armorTitle).text("Armor Class");
	// append the h2 to the div
	$(userModal).append(armorTitle);
	var armorP = $('<p>');
	// add text for the h2 tag
	$(armorP).text("Armor class represents your defense against attacks from monsters.");
	// append the p to the div
	$(userModal).append(armorP);
  
	//DEXTERITY API
    var strTitle = $('<h2>');
    // add text for the h2 tag
    $(strTitle).text("Strength");
    // append the h2 to the div
	$(userModal).append(strTitle);
    var strText = $('<p>');
    $(strText).attr('id', 'strength-text');
    // add text for the h1 tag
    $(strText).text('');
    // append the modal to the div
    $(userModal).append(strText);

    //GET to pull Strength description from the API 
    var strURL = "https://www.dnd5eapi.co/api/ability-scores/str";
    // console.log(strURL);

    $.ajax({
        url: strURL,
        method: "GET"
    }).then(function (strRes) {
        $("#strength-text").text(strRes.desc)
	});
	
	//CONSTITUTION API
    var strTitle = $('<h2>');
    // add text for the h2 tag
    $(conTitle).text("Constitution");
    // append the h2 to the div
	$(userModal).append(conTitle);
    var conText = $('<p>');
    $(conText).attr('id', 'con-text');
    // add text for the h1 tag
    $(conText).text('');
    // append the modal to the div
    $(userModal).append(conText);

    //GET to pull Strength description from the API 
    var conURL = "https://www.dnd5eapi.co/api/ability-scores/con";
    // console.log(strURL);

    $.ajax({
        url: conURL,
        method: "GET"
    }).then(function (conRes) {
        $("#con-text").text(conRes.desc)
    });

	//Dice Roller Guide
	var diceRoller = $('<h2>');
	// add text for the h2 tag
	$(diceRoller).text("Dice");
	// append the h2 to the div
	$(userModal).append(diceRoller);
	var diceP = $('<p>');
	// add text for the h2 tag
	$(diceP).text("Click on any of the various sided dice to generate a random roll.");
	// append the p to the div
	$(userModal).append(diceP);

	//Footer Navbar Guide
	var bottomNav = $('<h2>');
	// add text for the h2 tag
	$(bottomNav).text('Home, Offense, Utility, Role Play');
	// append the h2 to the div
	$(userModal).append(bottomNav);
	var botNav = $('<p>');
	// add text for the h2 tag
	$(botNav).text('Click on any of these links to quickly navigate app and speed up play.');
	// append the p to the div
	$(userModal).append(botNav);
  
	// create a button tag for the close button
	var userClose = $('<button>');
	// add the class and attr for the button
	$(userClose).addClass('close-button');
	$(userClose).attr('data-close', '');
	$(userClose).attr('aria-label', 'Close reveal');
	$(userClose).attr('type', 'button');
	// add the span for the close button
	$(userClose).html('<span aria-hidden="true">&times;</span>');
	// append the button to the div
	$(userModal).append(userClose);

	//Document functionality with Foundation
	$(document).foundation();
	$('#user-modal').foundation('open');
});	

$("#utl-user-guide").click(function () {
    event.preventDefault();
    // create a div for the modal
    var userModal = $('<div>');
    // add class and ID for modal
    $(userModal).addClass('reveal revealStyle');
    $(userModal).attr('id', 'user-modal');
    $(userModal).attr('data-reveal', '');
    // append the modal div to mainbody
	$('#mainBody').append(userModal);

	//Save Guide
	var saveGuide = $('<h2>');
	// add text for the h2 tag
	$(saveGuide).text("Save Guide");
	// append the h2 to the div
	$(userModal).append(saveGuide);
	var saveGuideP = $('<p>');
	// add text for the h2 tag
	$(saveGuideP).text("Click on Save to preserve any changes to character.  After making changes to character name, gender, race or class be sure to click on Save to make changes permanent.");
	// append the p to the div
	$(userModal).append(saveGuideP);

	//Hitpoints Guide
	var hitTitle = $('<h2>');
	// add text for the h2 tag
	$(hitTitle).text("Hitpoints");
	// append the h2 to the div
	$(userModal).append(hitTitle);
	var hitP = $('<p>');
	// add text for the h2 tag
	$(hitP).text("Hitpoints determine how tough your character is in combat and other dangerous situations. Hitpoints can be adjusted throughout the campaign by simply clicking on the + or - buttons.");
	// append the p to the div
	$(userModal).append(hitP);

	//STRENGTH API
	var strTitle = $('<h2>');
	// add text for the h2 tag
	$(strTitle).text("Strength");
	// append the h2 to the div
	$(userModal).append(strTitle);
	var strText = $('<p>');
	$(strText).attr('id', 'strength-text');
	// add text for the h1 tag
	$(strText).text('');
	// append the modal to the div
	$(userModal).append(strText);

	//GET to pull Strength description from the API 
	var strURL = "https://www.dnd5eapi.co/api/ability-scores/str";
	// console.log(strURL);

	$.ajax({
		url: strURL,
		method: "GET"
	}).then(function (strRes) {
		$("#strength-text").text(strRes.desc)
	});
	
	//DEXTERITY API
	var dexTitle = $('<h2>');
	// add text for the h2 tag
	$(dexTitle).text("Dexterity");
	// append the h2 to the div
	$(userModal).append(dexTitle);
	var dexText = $('<p>');
	$(dexText).attr('id', 'dex-text');
	// add text for the h1 tag
	$(dexText).text('');
	// append the modal to the div
	$(userModal).append(dexText);

	//GET to pull Strength description from the API 
	var dexURL = "https://www.dnd5eapi.co/api/ability-scores/dex";
	// console.log(dexURL);

	$.ajax({
		url: dexURL,
		method: "GET"
	}).then(function (dexRes) {
		$("#dex-text").text(dexRes.desc)
	});
	
	//Dice Roller Guide
	var diceRoller = $('<h2>');
	// add text for the h2 tag
	$(diceRoller).text("Dice");
	// append the h2 to the div
	$(userModal).append(diceRoller);
	var diceP = $('<p>');
	// add text for the h2 tag
	$(diceP).text("Click on any of the various sided dice to generate a random roll.");
	// append the p to the div
	$(userModal).append(diceP);

	//Footer Navbar Guide
	var bottomNav = $('<h2>');
	// add text for the h2 tag
	$(bottomNav).text('Home, Offense, Defense, Role Play');
	// append the h2 to the div
	$(userModal).append(bottomNav);
	var botNav = $('<p>');
	// add text for the h2 tag
	$(botNav).text('Click on any of these links to quickly navigate app and speed up play.');
	// append the p to the div
	$(userModal).append(botNav);
  
	// create a button tag for the close button
	var userClose = $('<button>');
	// add the class and attr for the button
	$(userClose).addClass('close-button');
	$(userClose).attr('data-close', '');
	$(userClose).attr('aria-label', 'Close reveal');
	$(userClose).attr('type', 'button');
	// add the span for the close button
	$(userClose).html('<span aria-hidden="true">&times;</span>');
	// append the button to the div
	$(userModal).append(userClose);

	//Document functionality with Foundation
	$(document).foundation();
	$('#user-modal').foundation('open');
});	

$("#rp-user-guide").click(function () {
    event.preventDefault();
    // create a div for the modal
    var userModal = $('<div>');
    // add class and ID for modal
    $(userModal).addClass('reveal revealStyle');
    $(userModal).attr('id', 'user-modal');
    $(userModal).attr('data-reveal', '');
    // append the modal div to mainbody
	$('#mainBody').append(userModal);

	//Save Guide
	var saveGuide = $('<h2>');
	// add text for the h2 tag
	$(saveGuide).text("Save Guide");
	// append the h2 to the div
	$(userModal).append(saveGuide);
	var saveGuideP = $('<p>');
	// add text for the h2 tag
	$(saveGuideP).text("Click on Save to preserve any changes to character.  After making changes to character name, gender, race or class be sure to click on Save to make changes permanent.");
	// append the p to the div
	$(userModal).append(saveGuideP);

	//Hitpoints Guide
	var hitTitle = $('<h2>');
	// add text for the h2 tag
	$(hitTitle).text("Hitpoints");
	// append the h2 to the div
	$(userModal).append(hitTitle);
	var hitP = $('<p>');
	// add text for the h2 tag
	$(hitP).text("Hitpoints determine how tough your character is in combat and other dangerous situations. Hitpoints can be adjusted throughout the campaign by simply clicking on the + or - buttons.");
	// append the p to the div
	$(userModal).append(hitP);

	//INTELLIGENCE API
	var intTitle = $('<h2>');
	// add text for the h2 tag
	$(intTitle).text("Intelligence");
	// append the h2 to the div
	$(userModal).append(intTitle);
	var intText = $('<p>');
	$(intText).attr('id', 'int-text');
	// add text for the h1 tag
	$(intText).text('');
	// append the modal to the div
	$(userModal).append(intText);

	//GET to pull Strength description from the API 
	var intURL = "https://www.dnd5eapi.co/api/ability-scores/int";
	// console.log(strURL);

	$.ajax({
		url: intURL,
		method: "GET"
	}).then(function (intRes) {
		$("#int-text").text(intRes.desc)
	});
	
	//WISDOM API
	var wisTitle = $('<h2>');
	// add text for the h2 tag
	$(wisTitle).text("Wisdom");
	// append the h2 to the div
	$(userModal).append(wisTitle);
	var wisText = $('<p>');
	$(wisText).attr('id', 'wis-text');
	// add text for the h1 tag
	$(wisText).text('');
	// append the modal to the div
	$(userModal).append(wisText);

	//GET to pull Strength description from the API 
	var wisURL = "https://www.dnd5eapi.co/api/ability-scores/wis";
	// console.log(strURL);

	$.ajax({
		url: wisURL,
		method: "GET"
	}).then(function (wisRes) {
		$("#wis-text").text(wisRes.desc)
	});

	//CHARISMA API
	var chaTitle = $('<h2>');
	// add text for the h2 tag
	$(chaTitle).text('Charisma');
	// append the h2 to the div
	$(userModal).append(chaTitle);
	var chaText = $('<p>');
	$(chaText).attr('id', 'cha-text');
	// add text for the h1 tag
	$(chaText).text('');
	// append the modal to the div
	$(userModal).append(chaText);

	//GET to pull Strength description from the API 
	var chaURL = "https://www.dnd5eapi.co/api/ability-scores/cha";
	// console.log(strURL);

	$.ajax({
		url: chaURL,
		method: "GET"
	}).then(function (chaRes) {
		$("#wis-text").text(chaRes.desc)
	});

	//Dice Roller Guide
	var diceRoller = $('<h2>');
	// add text for the h2 tag
	$(diceRoller).text("Dice");
	// append the h2 to the div
	$(userModal).append(diceRoller);
	var diceP = $('<p>');
	// add text for the h2 tag
	$(diceP).text("Click on any of the various sided dice to generate a random roll.");
	// append the p to the div
	$(userModal).append(diceP);

	//Footer Navbar Guide
	var bottomNav = $('<h2>');
	// add text for the h2 tag
	$(bottomNav).text('Home, Offense, Defense, Utility');
	// append the h2 to the div
	$(userModal).append(bottomNav);
	var botNav = $('<p>');
	// add text for the h2 tag
	$(botNav).text('Click on any of these links to quickly navigate app and speed up play.');
	// append the p to the div
	$(userModal).append(botNav);
  
	// create a button tag for the close button
	var userClose = $('<button>');
	// add the class and attr for the button
	$(userClose).addClass('close-button');
	$(userClose).attr('data-close', '');
	$(userClose).attr('aria-label', 'Close reveal');
	$(userClose).attr('type', 'button');
	// add the span for the close button
	$(userClose).html('<span aria-hidden="true">&times;</span>');
	// append the button to the div
	$(userModal).append(userClose);

	//Document functionality with Foundation
	$(document).foundation();
	$('#user-modal').foundation('open');
});	