let tasks = [];

document.addEventListener("DOMContentLoaded", () => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks'))
    if(storedTasks)
        {
            storedTasks.forEach((task) => tasks.push(task)) 
            updatelist(tasks);  
            updatestatus();
        }
});

const addtask = () => {
    const taskinput = document.getElementById('taskinput');
    const text = taskinput.value.trim();
    if (!text) {
        alert("Invalid task input");
        return; 
    }   
    if (text) {
        const date = new Date();
        const task = {
            text: text,
            completed: false,
            starred:false,
            date: date.toLocaleDateString(), 
            time: date.toLocaleTimeString() 
        };
        tasks.push(task);
        taskinput.value = "";
    }
    updatelist(tasks);
    updatestatus();
    savetask();
};

const toggleTaskComplete=(index)=>{
    tasks[index].completed=!tasks[index].completed;
    console.log({tasks});
    updatelist(tasks);
    updatestatus();
    savetask();
}

const toggleStar = (index) => {
    tasks[index].starred = !tasks[index].starred;
    updatelist(tasks);
    savetask();
}

const deletetask=(index)=>{
    tasks.splice(index,1);
    updatelist(tasks);
    updatestatus();
    savetask();
};

const edittask=(index)=>{
    const taskinput=document.getElementById("taskinput")
    taskinput.value=tasks[index].text;
    tasks.splice(index,1);
    updatelist(tasks);
    updatestatus();
    savetask();
};

const updatestatus=()=>{
    const completedtask=tasks.filter(task => task.completed).length;
    const totaltask=tasks.length;
    const progress = totaltask > 0 ? (completedtask / totaltask) * 100 : 0;
    const progressbar=document.getElementById("progress");
    progressbar.style.width = `${progress}%`;
    document.getElementById("numbers").innerText=`${completedtask}/${totaltask}`;
    savetask();
};

const savetask=()=>{
    localStorage.setItem('tasks',JSON.stringify(tasks));
};

const searchTasksByDate = () => {
    const searchDate = document.getElementById("searchdate").value;
    if (searchDate) {
        const filteredTasks = tasks.filter(task => task.date === new Date(searchDate).toLocaleDateString());
        updatelist(filteredTasks);
    } 
};

const searchTasks=()=>{
    const searchtask=document.getElementById("st").value.toLowerCase();
    const searchedtasks=tasks.filter(task => task.text.toLowerCase().includes(searchtask));
    updatelist(searchedtasks);
}


const updatelist = (tasks=taskList) => {
    const tasklist = document.getElementById('tasklist');
    tasklist.innerHTML = "";
    tasks.forEach((task, index) => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `
        <div class="taskitem">
            <div class="task ${task.completed ? "completed" : ""}">
                <input type="checkbox"  class="checkbox" ${task.completed ? 'checked' : ''}>
                <div class="text-and-date">
                <p>${task.text}</p>
                <small>${task.date} ${task.time}</small>
                </div>
            </div>
            <div class="icons">
                <input type="checkbox" class="imp" data-index="${index}" ${task.starred ? 'checked' : ''}>
                <img src="./images/2editicon.png" width="30px" height="30px" onclick="edittask(${index})">
                <img src="./images/deleteicon.png" width="30px" height="30px" onclick="deletetask(${index})">
            </div>
        </div>
        `;
        listItem.querySelector(".checkbox").addEventListener("change", () => toggleTaskComplete(index));
        listItem.querySelector(".imp").addEventListener("change", () => toggleStar(index));
        tasklist.append(listItem);

    });
};
document.getElementById("lists").addEventListener("click", function (e) {
    e.preventDefault();
    addtask();
});
document.getElementById("searchbtn").addEventListener("click", function (e) {
    e.preventDefault();
    searchTasksByDate();
}); 
document.getElementById("schbtn").addEventListener("click",function(e){
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
