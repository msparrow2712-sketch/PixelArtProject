const sizePicker = document.getElementById("sizePicker");
const inputHeight = document.getElementById("inputHeight");
const inputWidth = document.getElementById("inputWidth");
const colorPicker = document.getElementById("colorPicker");
const pixelCanvas = document.getElementById("pixelCanvas");
//When the user clicks submit, makeGrid function starts
sizePicker.addEventListener("submit", function(event) {
	event.preventDefault();
	makeGrid();
})

function makeGrid() {
	//Replaces the previous work with a blank grid of whatever size is chosen
	pixelCanvas.innerHTML = "";
	//adds values of the height and width entered to variables
	const height = Number(inputHeight.value);
	const width = Number(inputWidth.value);
	//Creates the rows of the grid
	for (let n = 0; n < height; n++) {
		const row = document.createElement("tr");
		//Creates columns up to the target width in each row
		for (let m = 0; m < width; m++) {
			const column = document.createElement("td");
			//when the user clicks any box in the grid, the color picked will appear in that box
			column.addEventListener("click", function() {
				column.style.backgroundColor = colorPicker.value;
			});
			
			row.appendChild(column);
		}
		//adds grid to the pixel canvas
		pixelCanvas.appendChild(row);
	}
}
