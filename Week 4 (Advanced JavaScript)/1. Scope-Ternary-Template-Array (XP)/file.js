// Exercice 1
var amountMoney=500;
let VAT = 17/100;
var revenuExpenses = [+100, -74, +270, -150, +24]
let total = 0;
for (let i=0; i<revenuExpenses.length ; i++) {
	if (revenuExpenses[i]>0) {
		amountMoney += revenuExpenses[i]
	}
	else if (revenuExpenses[i] < 0) {
		total += VAT * revenuExpenses[i]
	}
}
amountMoney += total
console.log(amountMoney)

// Exercice 2
let colors = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "]
colors.forEach ((color, index) => {
	console.log (index+"# choice is  " + color)
});

// Exercice 3
let colors = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
let ordinal = ["st","nd","rd","th"]
var suffix = " ";
colors.forEach ((color, index) => {
	    if (index<=3){
	    	suffix = ordinal[index]
	    }
	    else {suffix = "th"}
console.log((index+1) + suffix + " color is  " + color);

})

// Exercice 4
function isString (inputCheck) {
	if (typeof inputCheck === 'string') {
		return true;
	} else {return false}
}
console.log(isString(5))
console.log(isString('hello'))