// Exercice 1

let colors = ["blue", "yellow", "green", "purple"]; 

console.log("My 1st choice is " + colors[0])
console.log("My 2nd choice is " + colors[1])
console.log("My 3rd choice is " + colors[2])
console.log("My 4th choice is " + colors[3])

// Exercice 2

let names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"]
let letter1 = names [0][0]
let letter2 = names [1][0]
let letter3 = names [2][0]
let letter4 = names [3][0]
let letter5 = names [4][0]
let letter6 = names [5][0]
console.log (letter1 + letter2 + letter3 + letter4 + letter5 + letter6)

// or (but display only in column)
let names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"]
for (let i=0; i<6; i++){
	console.log(names[i][0])
}

// Exercice 3

let x = prompt("Please enter a number :  ")
while (x < 10) {
	x = prompt("Please enter a number greater than 10 :  ")
}
console.log(x);

// Exercice 4

let people = ["Greg", "Mary", "Devon", "James"];

//1
for (let i=0; i<4; i++){
	console.log (people[i]);
}

// 2, 3, 4
people.splice(0, 1)
console.log(people)

people.splice(3, 1, "Jason")
console.log(people)

people.push("Shay")
console.log(people)

// 5
let i=0;
while (i<4) {
	if (people[i] === "Mary"){
		console.log("Mary is place " + i)
	} else { i++ }
}

//6
let people = ["Greg", "Mary", "Devon", "Shay"];
let newArray1 = people.slice(0,1) 
let newArray2 = people.splice(2,1)
let finalArray = newArray1 + ", " + newArray2 
console.log("[ " + finalArray + " ]")

// 7
console.log(people.indexOf("Mary"));

// 8
console.log(people.indexOf("Foo"));

// 9
let x = people.length
let last = people[x-1]
console.log (last)

// Exercice 5

let age = [20,5,12,43,98,55];

// 1
for (let i=1; i<6; i++){
	age[0] = age[0] + age[i]
}
console.log(age[0])

// 2
for (let i=0; i<6; i++){
	if (age[i]%2 == 0) {
		console.log(age[i])
	} 
}

// Bonus
for (let i=1; i<5; i++) {
	if (age[i] > age[0]){
	age[0] = age[i];
} else { age[0] = age[0];
}
}
console.log(age[0])
