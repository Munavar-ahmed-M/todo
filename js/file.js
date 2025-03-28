document.getElementById("invalue").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        applyEl(); // Call applyEl() when Enter is pressed
    }
});
document.addEventListener("click", function(event) {
    if (event.target.tagName === "LI") {
        event.target.classList.toggle("completed");
    }
});
function applyEl(){
    var div = document.createElement("div");
    div.className = "outerlayerOfList";
    var input = document.getElementById("invalue");
    var textval = input.value.trim();
    // if the input is null it will not gonna add list
    if(textval == "")
        return ;
    var lst = document.createElement("li");
    lst.classList.add("todoElements");
    lst.id = "insideLi";
    //lst.innerHTML = `${textval} <button class='delete' onclick='removeTask(this)'>X</button>`;
    lst.innerHTML = textval;
    input.value = "";
    div.appendChild(lst);
    document.getElementById("ullist").appendChild(div);
    var button = document.createElement("button");
    button.id = "btn";
    button.innerText = "X";
    button.className = "cross-btn";
    div.appendChild(button);
}
document.addEventListener("click", function(event) {
    if (event.target.classList.contains("cross-btn")) {
        removeTask(event.target);
    }
});

function removeTask(button) {
    button.parentElement.remove(); // Removes the parent <div>
}