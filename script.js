// script.js
document.getElementById("addTask").addEventListener("click", addTask);
document.querySelectorAll(".filter-btn").forEach(button => {
  button.addEventListener("click", filterTasks);
});

function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskList = document.getElementById("taskList");

  if (!taskInput.value) {
    alert("Please enter a task!");
    return;
  }

  const li = document.createElement("li");
  li.setAttribute("data-status", "pending"); // Default status
  li.innerHTML = `
    <span>${taskInput.value}</span>
    <button onclick="deleteTask(this)">Delete</button>
  `;
  li.addEventListener("click", () => {
    li.classList.toggle("completed");
    li.setAttribute("data-status", li.classList.contains("completed") ? "completed" : "pending");
  });
  taskList.appendChild(li);
  taskInput.value = "";
}

function deleteTask(button) {
  const task = button.parentElement;
  task.remove();
}

function filterTasks(event) {
  const filter = event.target.getAttribute("data-filter");
  const tasks = document.querySelectorAll("#taskList li");

  tasks.forEach(task => {
    const status = task.getAttribute("data-status");

    if (filter === "all" || filter === status) {
      task.style.display = "flex";
    } else {
      task.style.display = "none";
    }
  });
}
