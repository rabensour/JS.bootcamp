var calculate = document.getElementById("calculate");
var totaltip = document.getElementById("tip")
calculate.addEventListener("click", calculate_tip);
var total = 0;


function calculate_tip() {
	var bill_amount = document.getElementById("billamt").value;
	bill_amount = parseInt(bill_amount);
	console.log(bill_amount, "bill_amount")

	var service = document.getElementById("serviceQual").value;
	service = Number(service);
	console.log(service, "service")

	var number_people = document.getElementById("peopleamt").value;
	number_people = parseInt(number_people)


	if (service == 0 || bill_amount === Number.isNaN(bill_amount)) {
		alert("please fill out the the bill amount and the service amount");
		return
	}

	if (number_people !== Number.isNaN(number_people) || number_people <= 1) {
		number_people = 1
		var each = document.getElementById("each")
		each.style.display = "none"
	}

	total = (bill_amount * service) / number_people
	total = Number(total.toFixed(2))
	totaltip.innerHTML = total
}
