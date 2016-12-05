function rollDice(){
	// console.log("test");
	//generate a number between 1 & 6
	var randomDie1 = Math.ceil(Math.random() * 6);
	var randomDie2 = Math.ceil(Math.random() * 6);

	console.log(randomDie1, randomDie2);

	document.images.die1.src = "Images/d" + randomDie1 + ".gif";
	document.images.die2.src = "Images/d" + randomDie2 + ".gif";

	
	document.getElementById("userRoll").innerHTML = "You rolled a " + Number(randomDie1 + randomDie2) + "!";

}
