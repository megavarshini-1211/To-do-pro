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









nura font
Poppins or nura









css:
*{
     margin: 0;
     padding: 0;
     box-sizing: border-box;
}
body{
     background-color: rgb(29, 29, 62);
     color: rgb(255, 255, 255);
}
.background{
     display: flex;
     flex-direction: column;
     align-items: center;
     margin-top: 4rem;
     max-width: 40vw;
     margin-left: 0;
     justify-content: center;
     margin-left: auto;
     margin-right: auto;
     position: relative;
}
.options{
     display: flex;
     flex-direction: column;
     height: 100%;
     width: 300px;
     position: fixed;
     top: 0rem; 
     left: -300px;
     padding: 1rem;
     border-radius: 5px;
     background-color: rgb(5, 11, 43);
     box-shadow: 0 8px 50px rgb(32, 52, 165);
     transition: 0.5s ease;
}
.options ul li{
     list-style: none;
}
.options header{
     font-size: 22px;
     text-align: center;
     line-height: 70px;
     user-select: none;
     font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
     color: rgb(255, 255, 255);
     text-shadow: 0 3px 15px rgb(101, 216, 237);
}
.options ul a{
     display: block;
     height: 100%;
     width: 100%;
     line-height: 65px;
     font-size: 20px;
     color: white;
     padding-left: 40px;
     box-sizing: border-box;
     border-top: 2px solid rgba(255, 255, 255,.1);
     font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
     border-bottom: 2px solid black;
     transition: 0.4s;
     text-decoration: none;
}
.options ul li:hover a{
     padding-left: 50px;
}
.options ul a i{
     padding-right: 10px;
}
.options input{
     margin-left: 10rem;
}

label[for="menu"] {
     position: fixed;
     top: 10px;
     left: 10px;
     font-size: 20px;
     color: white;
     cursor: pointer;
     z-index: 1000;
 }
 #menu:checked ~ .options {
     left: 0;
 }
 #menu{
     appearance: none;
     top: 0;
 }
.pro-box {
    border: 2px solid transparent;
    background-color: rgb(5, 11, 43);
    padding: 30px;
    border-radius: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 8px 50px rgb(32, 52, 165);
    width: 95vw;
    box-sizing: border-box; 
}
.details{
     display: flex;
     justify-content: space-between;
     width:100%;
     gap: 2.5rem;
}
/*.details h1 {
     margin-bottom: 10px;
 }
.details p{
     display: flex;
     flex-direction: column;
}
*/
.text-wrap{
     display: flex;
     flex-direction: column;
     width: 100%;
}
.text-wrap p{
     font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
     color: rgb(31, 221, 37);
     text-shadow: 0 3px 15px rgb(154, 224, 156);
}
.text-wrap h1{
     font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
     color: rgb(255, 255, 255);
     text-shadow: 0 3px 15px rgb(101, 216, 237);
}
#numbers{
     width: 100px;
     height: 100px;
     background-color:rgb(140, 11, 195) ;
     border-radius: 50px;
     display: flex;
     justify-content: center;
     align-items: center;
     font-size: 2rem;
     font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
     font-weight: bold;
     box-shadow: 0 3px 25px rgb(169, 51, 219);
}
#loadbar{
     width: 100%;
     height: 10px;
     background-color: rgb(46, 64, 143);
     display: flex;
     flex-direction: column;
     margin-top: 20px;
     border-radius: 10px;
     position: relative;
}
#progress{
     width: 0%;
     height: 10px;
     background-color: rgb(7, 155, 168);
     border-radius: 10px;
     transition: width 0.2s ease;
     box-shadow: 0 1px 10px rgb(55, 203, 216);
     position: absolute;
     left: 0;
}

.task-controls {
    border: 2px solid transparent;
    background-color: rgb(5, 11, 43);
    padding: 2vw;
    border-radius: 1.5vw;
    box-shadow: 0 8px 50px rgb(32, 52, 165);
    width: 90vw;
    margin: 1rem 1rem 1rem 1rem;
    box-sizing: border-box;  
    display: flex;
    flex-direction: column;
    gap: 3vw;
}
.task-row {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 2vw;
    width: 100%;
}
.schtask,.searchbox,form{
    width: 100%;
    
}
form {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1vw;
    width: 100%;
}
.schtask,
.searchbox {
    flex: 1 1 45%;
    display: flex;
    align-items: center;
    gap: 3vw;
    min-width: 300px;
}
form input,
.searchbox input
 {
    flex: 1;
    min-width: 200px;
    height: 4vw;
    max-height: 50px;
    padding: 1vw;
    font-size: clamp(14px, 1.5vw, 18px);
    border: 2px solid rgb(233, 216, 247);
    border-radius: 0.8vw;
    background-color: rgb(233, 216, 247);
    /* box-shadow: 0 3px 15px rgb(232, 202, 244); */
    box-sizing: border-box;
}
#st {
    flex: 1;
    min-width: 250px;
    height: 4vw;
    max-height: 50px;
    padding: 1vw;
    font-size: clamp(14px, 1.5vw, 18px);
    border: none; 
    border-radius: 0.8vw;
    background-color: rgb(233, 216, 247);
    /* box-shadow: 0 3px 15px rgb(232, 202, 244); */
    box-sizing: border-box;
    outline: none; 

}

form button,
.schtask button,
.searchbox button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 1vw 2vw;
    font-size: clamp(10px, 1.2vw, 15px); /* responsive text */
    border-radius: 1vw;
    border: none;
    background-color: rgb(195, 55, 255);
    color: white;
    cursor: pointer;
    /* box-shadow: 0 3px 15px rgb(186, 112, 218); */
    transition: 0.3s;
    white-space: nowrap; /* prevent wrap */
    line-height: 1; /* ensure height consistency */
    font-weight: 400;
}
form button:hover,
.schtask button:hover,
.searchbox button:hover {
    background-color: rgb(64, 3, 90);
    transform: scale(1.03);
}
button{
     display: inline-block;
     outline: none;
     cursor: grab;
     text-align: center;
     justify-content: center;
     font-size: 15px;
     line-height: normal;
     border-radius: 500px;
     transition-property: background-color,border-color,color,box-shadow,filter;
     transition-duration: 0.5s;
     border: 1px solid transparent;
     letter-spacing: 2px;
     min-width: 30px;
     text-transform: none;
     white-space: normal;
     font-weight: 500;
     padding: 10px 48px;
     color:rgb(255, 250, 250);
     background-color: rgb(195, 55, 255);
     height: auto;
     /* box-shadow: 0 3px 15px rgb(186, 112, 218); */
}
button:hover{
     background: rgb(64, 3, 90);
     text-shadow: 0 0 25px beige;
     transform:scale(0.2rem);
     color: beige;
     box-shadow: 0 8px 25px rgb(220, 157, 247);
}
.checkbox {
     width: 20px;
     height: 20px;
     margin-right: 10px;
     display: inline-block;
     appearance: none;
     border: 1px solid gray;
     background-color: transparent;
     transition: 0.1s ease;
     position: relative;
     cursor: pointer;
     border-radius: 10px;
 }
 .checkbox:hover {
     outline: 2px solid rgb(178, 22, 245);
     border-radius: 10px;
 }
 .checkbox:checked {
     background-color: rgb(52, 4, 72);
 }
 .checkbox:checked::after {
     content: "\f00c"; 
     font-family: "Font Awesome 5 Free"; 
     font-weight: 900;
     font-size: 13px; 
     color: white;
     position: absolute;
     top: 3px; 
     left: 2px;
 }
 .imp {
     width: 20px;
     height: 20px;
     margin-top: 5px;
     margin-right: 10px;
     display: inline-block;
     appearance: none;
     border: none;
     background-color: transparent;
     position: relative;
     cursor: pointer;
 }
 .imp::before {
     content: "\f005";
     font-family: "Font Awesome 5 Free";
     font-weight: 900;
     font-size: 15px;
     color: gray;
     position: absolute;
     top: 0;
     left: 0;
     transition: color 0.2s ease, transform 0.2s ease;
 }
 .imp:hover::before {
     transform: scale(1.1);
 }
 .imp:checked::before {
     color:rgb(52, 4, 72);
     text-shadow: 0 2px 2px rgb(178, 22, 245);
     transform: scale(1.2);
 }
.taskitem {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    width: 100%;
    flex-wrap: wrap;
    gap: 10px;
}
#tasklist {
    width: 85vw;
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin-top: 30px;
    padding: 0;
}
#tasklist li {
    list-style: none;
    background-color: rgb(238, 200, 254);
    border-radius: 8px;
    box-shadow: 0 3px 10px rgba(195, 55, 255, 0.3);
    padding: 10px 15px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
    word-wrap: break-word;
}
.icons {
    display: flex;
    gap: 10px;
    align-items: center;
    flex-shrink: 0;
}
.icons img {
    width: 25px;
    height: 25px;
    cursor: pointer;
    transition: transform 0.2s ease;
}
.icons img:hover {
    transform: scale(1.1);
    box-shadow: 0 3px 10px rgb(195, 55, 255);
    border-radius: 50%;
}
.task {
    display: flex;
    align-items: center; /* ✅ Change from align-items: flex-start */
    gap: 10px;
    flex: 1;
    word-break: break-word;
    flex-wrap: nowrap; /* ✅ Prevent the checkbox and text from splitting rows */
    min-width: 250px;
}
.task input{
     width: 20px;
     height: 20px;   
}
.task input.checkbox {
    flex-shrink: 0;
    margin-top: 3px;
}
.task.completed p {
     text-decoration: line-through;
     color: rgb(10, 209, 23);
}
.text-and-date {
    display: flex;
    flex-direction: column;
    justify-content: center; /* ✅ Vertically center inside flex row */
    font-size: clamp(14px, 1.2vw, 1rem);
    color: rgb(6, 1, 40);
    flex-grow: 1;
    word-break: break-word;
}
 
.text-and-date p {
    margin: 0 0 5px 0;
    word-wrap: break-word;
    font-weight: 500;
}

  
 .text-and-date small {
     color: gray;
     font-size: 0.85rem; 
 }

 #searchdate{
     width: 142px;
 }
#search {
    font-size: 1rem;
    color: white;
    text-shadow: 0 2px 8px rgb(101, 216, 237);
}


.schtask button{
     margin-left: 8px;
}
.sbox{
     width: 36rem;
     border: 2px solid rgb(233, 216, 247);
     border-radius: 10px;
     box-sizing: border-box;
     background-color: rgb(233, 216, 247);
     /* box-shadow: 0 3px 15px rgb(232, 202, 244); */
     border-radius: 10px;
     
}
.sbox i{
     color: black;
     padding-left: 7px;
}
.sbox input {
    border: none;
    background: transparent;
    height: 4vw;
    max-height: 45px; 
    font-size: clamp(14px, 1.3vw, 18px);
    padding-left: 0.5vw;
    box-sizing: border-box;
    color: black;
}
@media screen and (max-width: 480px){
     .background {
       max-width: 85vw;
       margin-top: 5.5rem;
     }
     .pro-box {
       flex-direction: row;
       padding: 20px;
          display: flex;
          margin-bottom: 2rem;
          justify-content: space-between;
          width: 100%;
          align-items: center;
          flex-wrap: wrap;
          align-content: baseline;
          
     }
     .details{
          flex-direction: column;
          padding: 20px;
     }
     .text-wrap{
          display: flex;
          flex-direction: column;
          width: 80%;
     }
     
     .text-wrap h1{
          font-size: 30px;
     }
     
     #loadbar{
          width: 80%;
          height: 10px;
          display: flex;
          flex-direction: column;
          margin-top: 20px;
          border-radius: 10px;
          position: relative;
     }
     #progress{
          width: 0%;
          height: 10px;
          border-radius: 10px;
          transition: width 0.2s ease;
          position: absolute;
          left: 0;
          display: flex;
     }
     
     #numbers{
          width: 80px;
          height: 80px;
          border-radius: 50px;
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          font-size: 1.5rem;
          
     }
     #search{
          display: flex;
          flex-direction: row;
          padding: 10px;
          font-size: small;
     }
     #search label{
          display: flex;
          flex-direction: column;
     }
     .searchbox{
          display: flex; 
          flex-direction: row;
          position: absolute;
          justify-content: center; 
          align-items: flex-end; 
          max-width: 30vw;
          margin: 0 auto; 
          top: 5px;
          left: -10px;
     }
     #searchbtn{
          display: flex;
          text-align: center;
          justify-content: center;
          align-items: center;
          font-size: small;
     }
     input{
          flex: 1;
          width: 285px; 
          height: 40px; 
          padding: 10px; 
          font-size: 16px; 
          border: 2px solid rgb(233, 216, 247);
          border-radius: 50px;
          box-sizing: border-box;
          background-color: rgb(233, 216, 247);
          box-shadow: 0 3px 15px rgb(232, 202, 244);
     }
}




html:
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>To do list</title>
    <meta name="robots" content="index,follow" />
    <meta name="description" content="To do list" />
    <link rel="stylesheet" href="list.css" />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.css"
    />
  </head>
  <body>
    <input type="checkbox" id="menu" />
    <label for="menu">
      <i class="fas fa-bars" id="bar"></i>
    </label>
    <div class="options">
      <header>To-do</header>
      <ul>
        <li>
          <a href="#" data-filter="Tasks"><i class="fas fa-home"></i>Tasks</a>
        </li>
        <li>
          <a href="#" data-filter="Important"
            ><i class="far fa-star"></i>Important</a
          >
        </li>
        <li>
          <a href="#" data-filter="Planned"
            ><i class="far fa-address-book"></i>Planned</a
          >
        </li>
        <li>
          <a href="#" data-filter="Completed"
            ><i class="fas fa-tasks"></i>Completed</a
          >
        </li>
      </ul>
    </div>
    
    <div class="background">
      <div class="pro-box">
        <div class="details">
          <div class="text-wrap">
            <h1>To do list</h1>
            <p>Keep it up!!</p>
            <div id="loadbar">
              <div id="progress"></div>
            </div>
          </div>

          <div class="progress-num">
            <p id="numbers">0/0</p>
          </div>
        </div>
      </div>
      <div class="task-controls">
        <div class="task-row">
          <div class="schtask">
            <div class="sbox">
              <label for="st"><i class="fas fa-search"></i></label>
              <label for="st" id="stask"></label>
              <input type="text" id="st" placeholder="Search task" />
            </div>
            <button id="schbtn">Search</button>
          </div>
          <div class="searchbox">
            <label id="search" for="searchdate"></label>
            <input type="date" id="searchdate" />
            <button id="searchbtn">Filter</button>
          </div>
        </div>
          <form action="">
            <input type="text" id="taskinput" placeholder="List your task" />
            <button id="lists" type="submit">+Add</button>
          </form>
      </div>
    <ul id="tasklist"></ul>
    </div>
      
    <!--<div class="taskitem">
          <div class="task">
               <input type="checkbox" class="checkbox">
               <p>Finish this task</p>
          </div>
          <div class="icons">
               <img src="./images/editicon.png">
               <img src="./images/deleteicon.png">
          </div>
     </div>-->
     
    
    <script src="list.js"></script>
  </body>
</html>



js:
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
