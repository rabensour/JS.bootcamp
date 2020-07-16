// Exercice 1
------1------
const fruits = ["apple", "orange"];
const vegetables = ["carrot", "potato"];

const result = ['bread', ...vegetables, 'chicken', ...fruits];
console.log(result); // ["bread", "carrot", "potato", "chicken", "apple", "orange"]

------2------
const country = "USA";
console.log([...country]); // ["U", "S", "A"]

------Bonus------
var newArray = [...[,,]];
console.log(newArray); // [undefined, undefined]


// Exercice 2
let users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
             { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
             { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
             { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
             { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
             { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
             { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}];


//(A)
let helloUsers = users.map((item) => {
 console.log("Hello " + item.firstName)
	});


//(B)
function onlyFullStack(item,index){
	if (item.role==='Full Stack Resident'){
		return item.firstName
	}
}

let congratsUsers = users.filter(onlyFullStack);

for (let i =0; i<congratsUsers.length; i++) {
	console.log("Hello " + congratsUsers[i].firstName);	
}


// Exercice 3 
let epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];
console.log(epic.join(' '));

// Exercice 4
let student = [{name: "Ray", course: "Computer Science", isPassed: true}, 
{name: "Liam", course: "Computer Science", isPassed: false}, 
{name: "Jenner", course: "Information Technology", isPassed: true}, 
{name: "Marco", course: "Robotics", isPassed: true}, 
{name: "Kimberly", course: "Artificial Intelligence", isPassed: false}, 
{name: "Jamie", course: "Big Data", isPassed: false}];

function onlyPassed (item,index){
	if (item.isPassed===true){
		return item.name
	}
}

let congratStudents = student.filter(onlyPassed);

for (let i =0; i<congratStudents.length; i++) {
	console.log("Hello " + congratStudents[i].name);	
}
