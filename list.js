let tasks = [];

const generateId = () => Date.now() + Math.floor(Math.random() * 1000);

document.addEventListener("DOMContentLoaded", () => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (storedTasks) {
        tasks = storedTasks;
        updatelist(tasks);
        updatestatus();
    }

    ["todo-list", "inprogress-list", "done-list"].forEach((listId) => {
        const listElement = document.getElementById(listId);
        Sortable.create(listElement, {
            group: "kanban-tasks",
            animation: 150,
onEnd: function (evt) {
    const item = evt.item;
    const taskId = Number(item.getAttribute("data-id"));
    const newListId = evt.to.id;

    const movedTaskIndex = tasks.findIndex(t => t.id === taskId);
    if (movedTaskIndex !== -1) {
        const newStatus =
            newListId === "todo-list" ? "todo" :
            newListId === "inprogress-list" ? "inprogress" :
            newListId === "done-list" ? "done" :
            tasks[movedTaskIndex].status;

        tasks[movedTaskIndex].status = newStatus;
        tasks[movedTaskIndex].completed = (newStatus === "done");

        console.log(`Task ID ${taskId} moved to "${newStatus}" column.`);
        console.log(`Completed status: ${tasks[movedTaskIndex].completed}`);

        updatelist(tasks);
        updatestatus();
        savetask();
    }
}

        });
    });
});

const addtask = () => {
    const taskinput = document.getElementById('taskinput');
    const dueinput = document.getElementById('dueinput');
    const text = taskinput.value.trim();
    const due = dueinput.value;

    if (!text || !due) {
        alert("Please enter both task and due date/time.");
        return;
    }

    const now = new Date();
    const task = {
        id: generateId(),
        text,
        completed: false,
        starred: false,
        status: "todo",
        date: now.toLocaleDateString(),
        time: now.toLocaleTimeString(),
        due: new Date(due).toISOString()  
    };

    tasks.push(task);
    taskinput.value = "";
    dueinput.value = "";
    updatelist(tasks);
    updatestatus();
    savetask();
};
const checkDueTasks = () => {
    const now = new Date().toISOString();

    tasks.forEach((task, index) => {
        if (!task.completed && task.due && new Date(task.due) <= new Date(now)) {
            showAlert(task.text, index);
        }
    });
};

setInterval(checkDueTasks, 20000);
const showAlert = (message, index) => {
    if (document.getElementById(`alert-${index}`)) return; 

    const alertBox = document.createElement("div");
    alertBox.id = `alert-${index}`;
    alertBox.className = "task-alert";
    alertBox.innerHTML = `
        <p><i class="fas fa-bell"></i> <strong>Reminder:</strong> "${message}" is due!</p>
        <button onclick="dismissAlert('${alertBox.id}')">Dismiss</button>
    `;
    document.body.appendChild(alertBox);


    setTimeout(() => {
        if (alertBox) alertBox.remove();
    }, 15000);
};

const dismissAlert = (id) => {
    const el = document.getElementById(id);
    if (el) el.remove();
};


const toggleTaskComplete = (index) => {
    tasks[index].completed = !tasks[index].completed;
    tasks[index].status = tasks[index].completed ? "done" : "todo";
    updatelist(tasks);
    updatestatus();
    savetask();
};

const toggleStar = (index) => {
    tasks[index].starred = !tasks[index].starred;
    updatelist(tasks);
    savetask();
};

const deletetask = (index) => {
    tasks.splice(index, 1);
    updatelist(tasks);
    updatestatus();
    savetask();
};

const edittask = (index) => {
    const taskinput = document.getElementById("taskinput");
    taskinput.value = tasks[index].text;
    tasks.splice(index, 1);
    updatelist(tasks);
    updatestatus();
    savetask();
};

const updatestatus = () => {
    const completedtask = tasks.filter(task => task.completed).length;
    const totaltask = tasks.length;
    const progress = totaltask > 0 ? (completedtask / totaltask) * 100 : 0;
    document.getElementById("progress").style.width = `${progress}%`;
    document.getElementById("numbers").innerText = `${completedtask}/${totaltask}`;
    savetask();
};

const savetask = () => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
};

const searchTasksByDate = () => {
    const searchDate = document.getElementById("searchdate").value;
    if (searchDate) {
        const filteredTasks = tasks.filter(task => task.date === new Date(searchDate).toLocaleDateString());
        updatelist(filteredTasks);
    }
};

const searchTasks = () => {
    const searchtask = document.getElementById("st").value.toLowerCase();
    const searchedtasks = tasks.filter(task => task.text.toLowerCase().includes(searchtask));
    updatelist(searchedtasks);
};

const updatelist = (taskArray = tasks) => {
    const todoList = document.getElementById("todo-list");
    const inprogressList = document.getElementById("inprogress-list");
    const doneList = document.getElementById("done-list");

    todoList.innerHTML = "";
    inprogressList.innerHTML = "";
    doneList.innerHTML = "";

    taskArray.forEach((task, index) => {
        const listItem = document.createElement("li");
        listItem.classList.add("kanban-task");
        listItem.setAttribute("data-id", task.id);

        listItem.innerHTML = `
            <div class="task ${task.completed ? "completed" : ""}">
                <input type="checkbox" class="checkbox" ${task.completed ? "checked" : ""}>
                <div class="text-and-date">
                    <p>
                        ${task.text}  
                        <br />
                        <small style="color: ${new Date(task.due) <= new Date() && !task.completed ? 'red' : 'gray'};"><strong>Due:</strong> ${new Date(task.due).toLocaleString()}</small>
                    </p>
                    <small>Created: ${task.date} ${task.time}</small>
                </div>
            </div>
            <div class="icons">
                <input type="checkbox" class="imp" data-index="${index}" ${task.starred ? 'checked' : ''}>
                <img src="./images/2editicon.png" width="25" height="25" onclick="edittask(${index})">
                <img src="./images/deleteicon.png" width="25" height="25" onclick="deletetask(${index})">
            </div>
        `;


        listItem.querySelector(".checkbox").addEventListener("change", () => toggleTaskComplete(index));
        listItem.querySelector(".imp").addEventListener("change", () => toggleStar(index));

        if (task.status === "todo") {
            todoList.appendChild(listItem);
        } else if (task.status === "inprogress") {
            inprogressList.appendChild(listItem);
        } else {
            doneList.appendChild(listItem);
        }
    });
};

document.getElementById("lists").addEventListener("click", e => {
    e.preventDefault();
    addtask();
});
document.getElementById("searchbtn").addEventListener("click", e => {
    e.preventDefault();
    searchTasksByDate();
});
document.getElementById("schbtn").addEventListener("click", e => {
    e.preventDefault();
    searchTasks();
});
document.querySelector(".options ul").addEventListener("click", (e) => {
    if (e.target.tagName === "A") {
        e.preventDefault();
        const filter = e.target.dataset.filter;
        switch (filter) {
            case "Tasks":
                updatelist(tasks);
                break;
            case "Important":
                updatelist(tasks.filter(task => task.starred));
                break;
            case "Planned":
                updatelist(tasks.filter(task => !task.completed));
                break;
            case "Completed":
                updatelist(tasks.filter(task => task.completed));
                break;
        }
    }
});
