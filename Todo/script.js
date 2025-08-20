let inp = document.querySelector("input");
let btn = document.querySelector("button");
let ul = document.querySelector("ul");

function addTask() {
    if (inp.value.trim() === "") return; // empty task avoid

    let item = document.createElement("li");
    item.innerText = inp.value;

    let dltBtn = document.createElement("button");
    dltBtn.innerText = "delete";
    dltBtn.classList.add("delete");

    item.appendChild(dltBtn);
    ul.appendChild(item);
    inp.value = "";
}

btn.addEventListener("click", addTask);

inp.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        addTask();
    }
});

ul.addEventListener("click", function (event) {
    if (event.target.classList.contains("delete")) {
        let listItem = event.target.parentElement;
        listItem.remove();
    }
});

ul.addEventListener("click", function (event) {
    if (event.target.tagName === "LI") {
        event.target.classList.toggle("completed");
    }
});
