let names = ["Dory", "Shark", "Nemo", "Jean-François", "Farid"]

for (let i = 0; i < 5; i++) {
	if (names[i] === "Nemo"){
		console.log("I found Nemo at " + i + "!");
	} else {
		continue;
	}
}
