function playTheGame () {
	
	let x = confirm("Do you want to play!");
	
	if (x==="No") {
		prompt ("No problem, thank you");
	} else { 
		let num = prompt("Enter a number between 0 and 10");
	}

	if (Number(num==false) {
			alert("Sorry Not a number, Goodbye");
		} else if (num<0 || num>10){
			alert("Sorry it’s not a good number, Goodbye");
		} else {
			let computerNumber = Math.floor(Math.random() * 11);
			function isInt(computerNumber) {
				return computerNumber % 1 === 0;
			}
		}
		return test(num, computerNumber);
}

function test(userNumber, computerNumber){
	for (let i=0; i<4; i++) {
	if (userNumber === computerNumber){
		alert("You won");
	} else if (userNumber > computerNumber){
		prompt("Your number is too big");
	} else if (userNumber < computerNumber){
		prompt("Your number is too low");
	} else if (i=3){
		alert ("You have tried 3 times");
		console.log("The computer number was " + computerNumber);
	}
}
}
