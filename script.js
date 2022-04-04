const btn = document.createElement("button");
btn.innerHTML = "Reset Grid";
btn.addEventListener("click", () => {
    let grid = prompt("Please enter grid size");

    do {
        grid = prompt("Invalid size. Please enter grid size");
    } while (grid >= 100 && Number.isInteger(grid) !== true);

    createGrid(grid);
});
document.body.appendChild(btn);

//Dynamically create a container
const container = document.createElement("div");
container.classList.add('container');
document.body.appendChild(container);

//Set container size
container.style.cssText = 'height: 960px; width: 960px; border: 1px solid black; margin: auto'


function createGrid(size){

//Clear previous grid
const rows = document.querySelectorAll('.row')
const columns = document.querySelectorAll('.column')
rows.forEach (a => a.remove());
columns.forEach (a => a.remove());

//Create new grid
for (let i = 0; i < size; i++){
    const row = document.createElement("div")
    row.classList.add('row')
    container.appendChild(row)
    for (let j = 0; j < size; j++){
        const column = document.createElement("div")
        column.classList.add('column')
        row.appendChild(column)
    }
}

//Add styling
const row = document.querySelectorAll('.row');
row.forEach(row => row.style.cssText = 'display: flex;');

//Create equal spaced div size
const cube = 960/size;

const column = document.querySelectorAll('.column');
column.forEach (a => 
a.style.cssText = 'background: white; border: 1px solid black; flex: 1;'
);

column.forEach (a => 
    a.style.height = cube + "px"
    );


//Add mouseover
column.forEach (a => 
    a.addEventListener("mouseover", () => {
        a.style.background = 'black';
    }));

}


