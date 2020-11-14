// When the button is clicked
// Get the grid size from the user with a prompt
// if the grid is already populated, delete all children of the grid container
// Set the grid-template-columns property to repeat(n, 1fr)
// Set the grid-template-rows	 property to repeat(n, 1fr)
// Create n divs with a class of "square" and add them to the grid container

function makeGrid() {
	let gridSize = prompt("Please enter a grid size:");
	if (gridSize <= 0 || gridSize === undefined) {
		alert("Invalid grid size, must be greater than 0");
	}
	else {
		let gridContainer = document.getElementById('grid-container')
		while (gridContainer.firstChild) {
			gridContainer.removeChild(gridContainer.firstChild);
		}

		gridContainer.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
		gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
		for (let i = 0; i < gridSize * gridSize; i++){
			let gridSquare = document.createElement('div');
			gridSquare.classList.add('square');
			
			if (i == 0) {
				gridSquare.classList.add('top-left');
			} 
			if (i == gridSize - 1) {
				gridSquare.classList.add('top-right');
			}
			if (i == (gridSize * gridSize) - gridSize) {
				gridSquare.classList.add('bottom-left');
			}
			if (i == (gridSize * gridSize) - 1) {
				gridSquare.classList.add('bottom-right');
			}

			gridSquare.addEventListener('mouseenter', event => {event.target.classList.add("mouseover")});
			gridSquare.addEventListener('mouseleave', event => {event.target.classList.remove("mouseover")});

			gridContainer.appendChild(gridSquare);
		}
	}
}
