function getColor(colorNumber) {
	//make sure the parameter is a number and not a string by converting the value to int:
	colorNumber = parseInt(colorNumber);
	switch (colorNumber) {
		case 1: return "red";

		case 2: return "yellow";

		case 3: return "blue";

		case 4: return "green";

		case 5: return "pink";

		case 6: return "violet";

		case 7: return "grey";

		case 8: return "white";

		case 9: return "brown"

		default: return "black";

	}
}

function getAllStudentColors() {
	for (let i = 0; i < 10; i++) {
		let randomNumber = (Math.random() * 4) + 1;
		let color = getColor(randomNumber);
		console.log(color);
	}
	//your loop here
}

//call the function below with the number of students in the class and print on the console
getAllStudentColors();

