let lastRemovedTask = null;
let lastRemovedList = null;
let isToastVisible = false;

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("taskInput").addEventListener("keypress", function (event) {
        if (event.key === "Enter" && !isToastVisible) {
            addTask();
        }
    });

    window.addEventListener("beforeunload", function (event) {
        if (document.querySelectorAll("#priorityList li, #generalList li").length > 0) {
            event.preventDefault();
            event.returnValue = '';
        }
    });
});

function addTask() {
    if (isToastVisible) return; // Restrict adding tasks while toast is visible

    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value.trim();
    if (taskText === "") return;

    let currentTab = document.querySelector(".tab.active").innerText.includes("Priority") ? "priorityList" : "generalList";
    let taskList = document.getElementById(currentTab);

    let li = document.createElement("li");

    let span = document.createElement("span");
    span.textContent = taskText;
    span.classList.add("task-text");

    span.onclick = function () {
        if (!isToastVisible) li.classList.toggle("completed");
    };

    let completeButton = document.createElement("button");
    completeButton.innerHTML = "✔";
    completeButton.classList.add("complete-btn");
    completeButton.onclick = function () {
        if (!isToastVisible) li.classList.toggle("completed");
    };

    let removeButton = document.createElement("button");
    removeButton.innerHTML = "✖";
    removeButton.classList.add("remove-btn");
    removeButton.onclick = function () {
        if (!isToastVisible) removeTask(li, taskList);
    };

    li.appendChild(span);
    li.appendChild(completeButton);
    li.appendChild(removeButton);

    taskList.prepend(li);
    taskInput.value = "";
}

function removeTask(taskElement, taskList) {
    if (isToastVisible) return;

    lastRemovedTask = taskElement;
    lastRemovedList = taskList;
    taskElement.remove();
    isToastVisible = true;

    let undoMessage = document.getElementById("undoMessage");
    undoMessage.innerHTML = `
        Task removed. <button onclick="undoRemove()">Undo</button>
        <button onclick="dismissToast()">OK</button>
    `;
    undoMessage.style.display = "block";

    setTimeout(dismissToast, 5000);
}

function undoRemove() {
    if (lastRemovedTask && lastRemovedList) {
        lastRemovedList.prepend(lastRemovedTask);
        lastRemovedTask = null;
        lastRemovedList = null;
    }
    dismissToast();
}

function dismissToast() {
    document.getElementById("undoMessage").style.display = "none";
    lastRemovedTask = null;
    lastRemovedList = null;
    isToastVisible = false;
}

function switchTab(tabName) {
    if (isToastVisible) return;

    document.querySelectorAll(".task-list").forEach(list => list.classList.remove("active"));
    document.querySelectorAll(".tab").forEach(tab => tab.classList.remove("active"));

    document.getElementById(tabName + "List").classList.add("active");
    document.querySelector(`button[onclick="switchTab('${tabName}')"]`).classList.add("active");
}
