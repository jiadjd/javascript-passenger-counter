let countEl = document.getElementById("count-el");
let count = 0;
let previousEl = document.getElementById("previous-el");

function increment() {
    count ++;
    countEl.textContent = count;
}

function save() {
    let previousEntries = " " + count + " - ";
    previousEl.textContent += previousEntries;
    count = 0;
    countEl.textContent = count;
}

