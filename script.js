const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTaskButton");
const taskList = document.getElementById("taskList");

addTaskButton.addEventListener("click", () => {
    const taskText = taskInput.value;
    if (taskText) {
        const li = document.createElement("li");
        li.textContent = taskText;

        const removeButton = document.createElement("span");
        removeButton.textContent = "刪除";
        removeButton.className = "remove";
        removeButton.onclick = () => li.remove();

        li.appendChild(removeButton);
        taskList.appendChild(li);
        taskInput.value = ""; // 清空輸入框
    }
});