let table = document.querySelector("#bagua-table");
let selectedId;

table.addEventListener("click", function(event) {
    let target = event.target;

    while (target != this) {
        if (target.tagName == "TD") {
            highlight(target);
            return;
        }
        target = target.parentNode;
    }
});

function highlight(node) {
    if (selectedId) {
        selectedId.classList.remove('highlight');
    }
    selectedId = node;
    selectedId.classList.add("highlight");
}

console.log(table);