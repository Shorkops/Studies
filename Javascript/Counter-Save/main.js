// Makes the counter button work
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0
function increment() {
    count++
    countEl.innerText = count
}

function save(){
    let countstring = count + " - "
    saveEl.innerText += countstring
    count = 0
    countEl.innerText = count
}