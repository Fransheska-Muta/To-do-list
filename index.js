const input = document.getElementById("field");
const listContainer = document.getElementById("list-container");
let date = document.getElementById("date"); // getting the value of the date input


// this function will be called when the add button is clicked, 
// it will check if the input is empty, if not it will create a list item and add it to the list container,
//  it will also add a cross icon for deleting the item and a span for the date
function addTask() {

    // Check task input
    if (input.value === "") {
        alert("Please add a task");
        return;
    }

    // Check date input
    if (date.value === "") {
        alert("Please add a due date");
        return;
    }

    // Create list item only if both inputs are valid
    let li = document.createElement("li");
    li.innerHTML = input.value;
    listContainer.appendChild(li);
    saveData();

    // Delete (cross icon)
    let span1 = document.createElement("span");
    span1.innerHTML = "\u00d7";
    li.appendChild(span1);

    // Due date display
    let span2 = document.createElement("span");
    span2.innerHTML = date.value;
    li.appendChild(span2);

    // Clear inputs
    input.value = "";
    date.value = "";
    saveData();
}

// I am saying "pay attention to the listContainer, 
// if anyhting inside it is clicked, run this function"
// event delegation, it tells the function what happended and where it happend
listContainer.addEventListener("click", function(event) {  
    // Check if the clicked element is a list item (<li>)
    if (event.target.tagName === "LI") {
        // Add "checked" class if it's not there, or remove it if it is
        event.target.classList.toggle("checked"); // toggle means to change between 2 states, checked and unchecked
    }else if(event.target.tagName === "SPAN") {
        event.target.parentElement.remove();
        saveData();
    }
    
});

// saving the data so it does not get lost when refreshed
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

// displaying the data when the browser is refreshed
function showData(){
    listContainer.innerHTML = localStorage.getItem("data")
}
showData();