document.getElementById("formTask").onsubmit = function(event){
    event.preventDefault();
    const inputNode = document.getElementById("inputTask");
    const statusNode = document.getElementById("statusTask");
    const categoryNode = document.getElementById("inputCategory");
    const taskText = inputNode.value.trim();
    const taskStatus = statusNode.value;
    const taskCategory = categoryNode.value.trim();
    if(taskText != "" && taskCategory != ""){
        const task = {
            text: taskText,
            status: taskStatus,
            category: taskCategory
        }
        addTask(task);
    }
}

document.getElementById("saveBtn").addEventListener("click", function(event){
    event.preventDefault();
    const taskList = document.getElementById("tasks");
    const tasks = [];
    for(let taskItem of taskList.getElementsByTagName("li")){
        const task = {
            text: taskItem.querySelector(".task-text").textContent,
            status: taskItem.querySelector(".task-status").value,
            category: taskItem.querySelector(".task-category").textContent
        }
        tasks.push(task);
    }
    localStorage.setItem("tasks", JSON.stringify(tasks));
})

const tasks = JSON.parse(localStorage.getItem("tasks"));
if (tasks) {
    for (let task of tasks){
        addTask(task);
    }
}

function addTask(task) {
    const taskList = document.getElementById("tasks");
    const taskItem = document.createElement("li");
    const taskTextNode = document.createElement("span");
    taskTextNode.textContent = task.text;
    taskTextNode.classList.add("task-text");
    const taskStatusNode = document.createElement("select");
    const statuses = ["Pending", "In Progress", "Completed"];
    statuses.forEach(status => {
        const option = document.createElement("option");
        option.value = status;
        option.textContent = status;
        if(status === task.status) option.selected = true;
        taskStatusNode.appendChild(option);
    });
    taskStatusNode.classList.add("task-status");
    taskStatusNode.addEventListener("change", function(){
        if(taskStatusNode.value === "Completed"){
            taskItem.classList.add("completed");
        } else {
            taskItem.classList.remove("completed");
        }
    });
    if(task.status === "Completed") taskItem.classList.add("completed");
    const taskCategoryNode = document.createElement("span");
    taskCategoryNode.textContent = task.category;
    taskCategoryNode.classList.add("task-category");

    const removeButton = document.createElement("button");
    removeButton.textContent= "Remove";
    removeButton.addEventListener("click", function(){
        taskList.removeChild(taskItem);
    });

    taskItem.appendChild(taskTextNode);
    taskItem.appendChild(taskStatusNode);
    taskItem.appendChild(taskCategoryNode);
    taskItem.appendChild(removeButton);
    taskList.appendChild(taskItem);
}
