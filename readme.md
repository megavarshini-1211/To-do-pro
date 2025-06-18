/*sync/async
Promise
.then .catch
callback chain
async / await 
closure
*/
/*async functions:
setTimeout
fs.readfile=to read a file from FileSystem
fetch=to fetch some data from API end point
DOM (Document Object Model)*/
.clsname>li{
    color:blue;
}

this specifies the immediate child 
Example:
<ul>
    <li>one</li>
        <li>sub list </li>
    <li>two</li>
    <li>three</li>
</ul>
here one,two,three will be in blue 
pseudo class:
hover,active,visited

pseudo elements:
to add elements before and after span elements but not inside html file 

.clsname::before{
    content:"hello";
}
.clsname::after{
    content:"All";
}

line-height: px or number;  ==> space above and below a text

text-decoration,text-transform

text-intend:unit;   ==> intentation of a specific line or p

letter-spacing:unit;word-spacing:unit;

text=overflow:clip/ellipsis;
clip==>default ,every text will be displayed
ellipsis==>the sentence will end with dots ...

backgrounds:

background-attachment:scroll/fixed;
background-color:
background-image:url('./path');
background-repeat:repeat/no-repeat/repeat-x/repeat-y;
background-position:left/center/right /unit || top/center/bottom /unit;
background-size:auto/contain/cover;




.checkbox {
     width: 20px;
     height: 20px;
     margin-right: 10px;
     display: inline-block;
     transform: scale(1);
     appearance: none;
    
 }
 .checkbox:hover{
     cursor: pointer;
 }
 .checkbox:checked{
     background-color: blueviolet;
 }



 
.checkbox {
     width: 20px;
     height: 20px;
     margin-right: 10px;
     display: inline-block;
     transform: scale(1);
     appearance: none;
     border: 1px solid gray;
     background-color: transparent;
     transition: 0.1s ease;
 }
 .checkbox:hover{
     cursor: pointer;
 }
 .checkbox:focus {
     outline: 2px solid rgb(140, 11, 195);
     border-radius: 5px;
 }
 .checkbox:checked:after{
     font-family: Font Awesome 5 Free;
     content: "\f00c";
     font-weight: 900;
     font-size: 50px;
 }
 
 .imp{
     width: 20px;
     height: 20px;
     margin-top: 5px;
     margin-right: 10px;
     display: inline-block;
     transform: scale(1);
     appearance: none;
     border: none;
     background-color: transparent;
     transition: 0.1s ease;
     position: relative; 
 }
 .imp:hover{
     cursor: pointer;
     outline: 2px solid gold;
 }
 .imp:checked:before{
     font-family: "Font Awesome 5 Free"; 
     content: "\f005";
     font-weight: 900; 
     font-size: 20px; 
     position: absolute;
     top: 0;
     left: 0;
     right: 0;
     bottom: 0;
     display: flex;
     justify-content: center;
     align-items: center;
 }
 .imp:checked:after{
     content: "\f005";
     font-family: "Font Awesome 5 Free";
     font-weight: 900; 
     font-size: 24px; 
     color: yellow;
 }

  .imp {
     width: 20px;
     height: 20px;
     margin-top: 5px;
     margin-right: 10px;
     display: inline-block;
     transform: scale(1);
     appearance: none;
     border: none;
     background-color: transparent;
     transition: 0.1s ease;
     position: relative;
     top: 0;
 }
 .imp:hover {
     cursor: pointer;
 }
 
 .imp::before {
     content: "\f005"; 
     font-family: "Font Awesome 5 Free";
     color: gray; 
     font-weight: 900;
     font-size: 16px; 
     position: absolute;
     top: -2px; 
     left: 2px;
     transition: color 0.2s ease;
 }
 
 .imp:checked::before {
     color: gold; 
 }
 
 .imp:checked:after {
     content: "\f00c";
     font-family: "Font Awesome 5 Free";
     font-weight: 900;
     font-size: 16px; 
     color: white;
     position: absolute;
     top: 2px; 
     left: 2px;
 }



 previous code for both:

 .checkbox {
     width: 20px;
     height: 20px;
     margin-right: 10px;
     display: inline-block;
     transform: scale(1);
     appearance: none;
     border: 1px solid gray;
     background-color: transparent;
     transition: 0.1s ease;
     position: relative; 
 }
 .checkbox:hover {
     cursor: pointer;
     outline: 2px solid rgb(140, 11, 195);
     border-radius: 10px;
 }
 .checkbox:checked {
     background-color: rgb(52, 3, 75);
 }
 .checkbox:checked:after {
     content: "\f00c"; 
     font-family: "Font Awesome 5 Free"; 
     font-weight: 900;
     font-size: 16px; 
     color: white;
     position: absolute;
     top: 2px; 
     left: 2px;
 }
/* Style for star checkbox */
.imp {
     width: 20px;
     height: 20px;
     margin-top: 5px;
     margin-right: 10px;
     display: inline-block;
     transform: scale(1);
     appearance: none; /* Hides the default checkbox */
     border: none;
     background-color: transparent;
     transition: transform 0.1s ease, color 0.2s ease;
     position: relative;
     cursor: pointer;
 }
 
 /* Default star icon */
 .imp::before {
     content: "\f005"; /* Font Awesome star */
     font-family: "Font Awesome 5 Free";
     font-weight: 900;
     font-size: 15px; /* Adjust size for better visibility */
     color: gray; /* Default star color */
     position: absolute;
     top: 0;
     left: 0;
     transition: color 0.2s ease, transform 0.2s ease;
 }
 
 /* On hover effect */
 .imp:hover::before {
     transform: scale(1.1); /* Slightly enlarge star on hover */
 }
 
 /* Checked state: change star color to gold */
 .imp:checked::before {
     color: gold;
     transform: scale(1.2); /* Emphasize the star when checked */
 }

 
const searchTasksByDate = () => {
    const searchDate = document.getElementById("searchdate").value;
    if (searchDate) {
        const filteredTasks = tasks.filter(task => task.date === new Date(searchDate).toLocaleDateString());
        updatelist(filteredTasks);
    } 
};


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
        // Convert search date from DD-MM-YYYY to MM/DD/YYYY format
        const [day, month, year] = searchDate.split("-");
        const formattedSearchDate = `${month}/${day}/${year}`;

        // Filter tasks by comparing formatted search date with task's date
        const filteredTasks = tasks.filter(task => task.date === formattedSearchDate);

        // Update the task list with filtered tasks
        updatelist(filteredTasks);
    } 
};





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