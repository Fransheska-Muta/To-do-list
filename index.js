const input = document.getElementById("field");
const listContainer = document.getElementById("list-container");
let date = document.getElementById("date"); // getting the value of the date input
// this function will be called when the add button is clicked, 
// it will check if the input is empty, if not it will create a list item and add it to the list container,
//  it will also add a cross icon for deleting the item and a span for the date

function addTask(){
    if(input.value === ""){
        alert("Please add a task")
    }else{
        let li = document.createElement("li");
        li.innerHTML = input.value; // displaying the task and due time
        listContainer.appendChild(li) // displaying the list as a child onto the list container which is the parent
        saveData()
        
        let span1 = document.createElement("span");
        span1.innerHTML = "\u00d7"; // this is a cross icon
        li.appendChild(span1);
        span1.onclick = function(){ 
        span1.parentElement.remove() // this will remove the list item when the cross icon is clicked
        saveData()      
    }

    if(date.value === ""){
        alert ("Please add a due date")
    }else{
        let span2 = document.createElement("span");
        span2.innerHTML = date.value;
        li.appendChild(span2);
    }

}
    input.value = "" // so that after adding an item the input is empty, ready for another item
    saveData()
}



// saving the data so it does not get lost when refreshed
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

// displaying the data when the browser is refreshed
function showData(){
    listContainer.innerHTML = localStorage.getItem("data")
}
// showData()