function rollDice(){
	// console.log("test");
	//generate a number between 1 & 6
	var randomDie1 = Math.ceil(Math.random() * 6);
	var randomDie2 = Math.ceil(Math.random() * 6);

	console.log(randomDie1, randomDie2);

	document.images.die1.src = "Images/d" + randomDie1 + ".gif";
	document.images.die2.src = "Images/d" + randomDie2 + ".gif";

	var totalRoll = Number(randomDie1 + randomDie2);
	document.getElementById("userRoll").innerHTML = "You rolled a " + totalRoll + "!";

	// calls function which tells user if they killed or were killed by the dragon
	// processFight((Number(randomDie1 + randomDie2)))
}

function displayFightingOptions(){
	document.getElementById("fighting-instructions").innerHTML = "Wow, you are a brave one indeed. Roll the dice, young one. If you roll a 9 or higher, you will slay the dragon. If not..."
	document.getElementById("fight-option").className = "visible";
}

functionprocessFight(rollScore){
	console.log(rollScore);
}