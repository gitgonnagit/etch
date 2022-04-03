const btn = document.createElement("button");
btn.innerHTML = "Reset Grid";
document.body.appendChild(btn);

for (let i = 0; i < 2; i++){
    const row = document.createElement("div")
    row.classList.add('row')
    document.body.appendChild(row)
    for (let j = 0; j < 2; j++){
        const column = document.createElement("div")
        column.classList.add('column')
        row.appendChild(column)
    }
}

const row = document.querySelectorAll('.row');
row.forEach(row => row.style.cssText = 'display: flex;');

const column = document.querySelectorAll('.column');
column.forEach (a => 
a.style.cssText = 'background: white; border: 1px solid black; height: 50px; width: 50px;'
);

column.forEach (a => 
    a.addEventListener("mouseover", () => {
        a.style.background = 'black';
    }));
