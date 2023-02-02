const gridContainer = document.querySelector('.grid-container');
const input = document.querySelector('#rangeNum');
const newGrid = document.querySelector('#newGrid');
let currentlyActive = false;
let gridSize = input.value;
let box = [];

gridContainer.addEventListener('click', () => { togglePen(); });

// Initial Gridbox
gridContainer.style.gridTemplateColumns = 'repeat(16, 1fr)';
gridContainer.style.gridTemplateRows = 'repeat(16, 1fr)';
for (let j = 0; j < 16; j++) {
  for (let i = 0; i < 16; i++) {
    const gridTile = document.createElement('div');
    gridTile.classList.add('box');
    gridTile.style.border = '.5px solid #d9d9d9';
    gridContainer.appendChild(gridTile);
  }
}

// Create new gridbox
newGrid.addEventListener('click', () => {
  gridSize = input.value;
  newGridCreate(gridSize);
});

function newGridCreate(gridSize) {
  // Clear prior gridboxes
  gridContainer.textContent = '';
  gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
  gridContainer.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;

  // Vertical
  for (let j = 0; j < gridSize; j++) {
    // Horizontal
    for (let i = 0; i < gridSize; i++) {
      const gridTile = document.createElement('div');
      gridTile.classList.add('box');
      gridTile.style.border = '.5px solid #d9d9d9';
      gridContainer.appendChild(gridTile);
    }
  }
}

// Show range bar number
const value = document.querySelector('#rangeNumOutput');
value.textContent = input.value;
input.addEventListener('input', (event) => {
  value.textContent = event.target.value;
});

// Add pointer trail
function activatePen(e) {
  e.addEventListener('mouseover', () => {
    e.target.style.backgroundColor = 'black';
  });
}

// Toggle pen
function togglePen() {
  box = document.querySelectorAll('.box');

  if (!currentlyActive) {
    for (let k = 0; k < box.length; k++) {
      box[k].addEventListener('mouseleave', (e) => {
        e.target.style.backgroundColor = 'black';
      });
    }
    currentlyActive = true;
  } else {
    for (let v = 0; v < box.length; v++) {
      box[v].removeEventListener('mouseleave', (e) => {
        e.target.style.backgroundColor = 'white';
      });
    }
    currentlyActive = false;
  }
}
