// Exercice 1

let x = 5
let y = 8;

if (x>y){
	console.log(x);
} else {
	console.log(y);
}

// Exercice 2

let newDog = "Chihuahua";
console.log(newDog.length);
console.log(newDog.toUpperCase());
console.log(newDog.toLowerCase());
if (newDog === "Chihuahua"){
	console.log("I love Chihuahua, it’s my favorite dog")
	} else {
		console.log("I don't care I prefer cat")
	}


// Exercice 3

let x;
x = prompt("Please enter a number: ");
if (x % 2 === 0) {
	console.log("x is an even number")
	}
	else {
		console.log("x is not an even number")
	}

// Exercice 4

let users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"]

if (users.length == 1){
	console.log(users[0] + " online") 
	} else if (users.length == 2) {
		console.log(users[0] + " and " + users[1] + " online")
	} else if (users.length > 2) {
		console.log(users[0] + ", " + users[1] + " and " + (users.length - 2) + " more online")
	} else {
		console.log("no one online")
	}

	

