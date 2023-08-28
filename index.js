// variables

const inputTask = document.getElementById('input-task');
const addTask = document.getElementById('add-task');
const taskContainer = document.getElementById('task-container');


addTask.addEventListener('click', function () {

    // creating div to store the tasks
     let task = document.createElement('div');
     task.classList.add('task');
     
    //  creating list item
     let li = document.createElement('li');
    //  display that text that we inserted in the input
     li.innerText = `${inputTask.value}`;
     task.appendChild(li);

    //  creating checkbutton
     let checkButton = document.createElement("button");
     checkButton.innerHTML = '<i class="fa-solid fa-check"></i>';
     checkButton.classList.add('checkTask');
     task.appendChild(checkButton);

    //  creating delete button
     let deleteButton = document.createElement("button");
     deleteButton.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
     deleteButton.classList.add('deleteTask');
     task.appendChild(deleteButton);

     if(inputTask.value === ""){
        alert("Please enter the task");
     }else {
        taskContainer.appendChild(task);
     }

    //  revertingback to the placeholder text
    inputTask.value = "";


    checkButton.addEventListener('click', function () {
        checkButton.parentElement.style.textDecoration = "line-through";
    });

    deleteButton.addEventListener('click', function (e) {

        let target = e.target;

        target.parentElement.parentElement.remove();
    })



});