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
	
	processFight(totalRoll);
}

function displayFightingOptions(){
	document.getElementById("fighting-instructions").innerHTML = "Wow, you are a brave one indeed. Roll the dice, young one. If you roll a 9 or higher, you will slay the dragon. If not..."
	document.getElementById("fight-option").className = "visible";
}

function processFight(totalRoll){
	console.log(totalRoll);
	if (totalRoll<9){
		document.getElementById("hero").src="burnt-toast.jpeg";
		document.getElementById("fightResultLoss").innerHTML = "Wow that dragon burned you real real bad..."
	}else{
		document.getElementById("dragon").src="beer-enjoy2.jpeg";
		document.getElementById("fightResultWin").innerHTML = "You have killed the dragon! Now you can finally enjoy your beer! My treat :)"
	}
}

// Calls functions to flee

function flee(){
	document.getElementById("hero").src = "running-knight2.jpg"; 
	document.getElementById("fleeText").innerHTML = "SMART! Fighting dragons takes a lot of energy anyway...don't run too fast though! You may spill your beer!";
	// document.getElementById("fleeOrChugText").className = "visible";
}


//calls function to chug a beer

function chug(){
	document.getElementById("hero").src="burnt-toast.jpeg";
	document.getElementById("chugABeer").innerHTML = "The dragon burnt you to a crisp, but you finished your beer before dying. I will pass on your legacy :)";

}