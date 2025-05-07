const btn = document.getElementById("add");
const input = document.getElementById("taskinput");
const listContainer = document.getElementById("list-container");

input.addEventListener("keypress", function(Enter) {
    if (Enter.key === "Enter") {
      addtask(); // your function that adds the task
    }
});
function addtask(){
    if(input.value === ""){
        alert("you have to write TASK before adding them");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = input.value;
        const span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);

        li.addEventListener("click",function(e){
            
            if(e.target.tagName === "LI"){
                li.classList.toggle("checked");
                saveData();
            }
            else if(e.target.tagName === "SPAN"){
                listContainer.removeChild(li);
                saveData();
            }

        },false);
        listContainer.appendChild(li);
        input.value='';
        saveData();
    }
}
btn.onclick = addtask ;
function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();