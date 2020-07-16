// 1
let age = prompt(“What is your age?”);

if (Number(age) < 18) {
    alert("Sorry, you are too yound to drive this car. Powering off");
} else if (Number(age) > 18) {
    alert("Powering On. Enjoy the ride!");
} else if (Number(age) === 18) {
    alert("Congratulations on your first year of driving. Enjoy the ride!");
}

function checkDriverAge(age) {
  let message;
  if (Number(age) < 18) {
    message = "Sorry you are to yound to drive this car. Powering off";
  } else if (Number(age) > 18) {
    message = "Powering On. Enjoy the ride!";
  } else if (Number(age) === 18) {
    message = "Congratulations of your first year of driving. Enjoy de ride";
  }return message;
}
alert(checkDriverAge(prompt("Input an age")));

//2
let amazonBasket = {
	"glasses": 1,
    "books": 2,
    "floss": 100
}


let ask = prompt("Which item are you looking for ?")

// option 1 : without function
switch (amazonBasket,ask){
	case 'glasses' : 
	console.log("This item is in the basket")
	break;
	case 'books' : 
	console.log("This item is in the basket")
	break;
	case 'floss' : 
	console.log("This item is in the basket")
	break;
	default : 
	console.log("This item is not in the basket")
}

// option 2 : (but print also for the other elements)
function checkBasket(basket, lookingFor) {
   for(let i in basket)
   {
       if(lookingFor===i){
           console.log("This item is in the basket")
       }else{
           console.log("This item is not in the basket")
       }
}
}
console.log(checkBasket(amazonBasket, ask));

//3
function convert_Sum(quarters, dimes, nickels, pennies){
	return quarters/4 + dimes/10 + nickels/20 + pennies/100;
}
function changeEnough(q, d, n, p, price){
	let sum = convert_Sum(q,d,n,p);
	if (sum >= price) {
		return true; 
	} else { return false; }
}
console.log(changeEnough(4, 10, 20, 100, 100));

//4 
// DECLARATION
let stock = {
    "banana": 6,
    "apple": 4,
    "pear": 12,
    "orange": 32,
    "blueberry":1
}
let prices = {
    "banana": 4,
    "apple": 2,
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
}
let list = [
	{"name": "apple", "quantity": 5},
	{"name": "orange", "quantity": 13},
	{"name": "banana", "quantity": 8}
]
let total = 0;
function in_stock(name){
	//name = "apple"
	return stock[name] > 0 //true
}
function buy(item){
	// item = {"name": "apple", "quantity": 4},
    // if  (5 >   4)
	if (item["quantity"] > stock[item["name"]] ){
		//item["quantity"] = 4
		item["quantity"] = stock[item["name"]];
	}
	total += (prices[item["name"]] * item["quantity"]);
	stock[item["name"]] -= item["quantity"];
}
//EXECUTION
for (item of list){
	// item = {"name": "apple", "quantity": 5},
	if (in_stock(item["name"])) {
		buy(item);
	}
}

//5 
let n = prompt("Number of nights you want to stay in the hotel ?")
function hotel_cost(nights){
	return nights*140
}
console.log(hotel_cost(n));


let dest = prompt("Which destination did you choose ?")
function plane_ride_cost (city){
	if (city === "London"){
		return 183;
	} else if (city === "Paris"){
		return 220;
	} else {
		return 300;
	}
}
console.log(plane_ride_cost(dest))


let days = prompt("For how many days do you want to rent this car ?")
function rental_car_cost (num){
	if (num>10) {
		return (num*40)-(num*40*0.05);
	} else {return num*40;
	}
}
console.log(rental_car_cost(days));

function total_vacation_cost (hotel, city, car) {
	return hotel_cost(hotel) + plane_ride_cost(dest) + rental_car_cost(car)
}
console.log(total_vacation_cost(n,dest,days));