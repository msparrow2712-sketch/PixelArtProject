const sizePicker = document.getElementById("sizePicker");
const inputHeight = document.getElementById("inputHeight");
const inputWidth = document.getElementById("inputWidth");
const colorPicker = document.getElementById("colorPicker");
const pixelCanvas = document.getElementById("pixelCanvas");

sizePicker.addEventListener("submit", function(event) {
	event.preventDefault();
	makeGrid();
})

function makeGrid() {
	
	pixelCanvas.innerHTML = "";
	
	const height = Number(inputHeight.value);
	const width = Number(inputWidth.value);
	
	for (let n = 0; n < height; n++) {
		const row = document.createElement("tr");
		
		for (let m = 0; m < width; m++) {
			const column = document.createElement("td");
			
			column.addEventListener("click", function() {
				column.style.backgroundColor = colorPicker.value;
			});
			
			row.appendChild(column);
		}
		
		pixelCanvas.appendChild(row);
	}
}
