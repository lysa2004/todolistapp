document.addEventListener("DOMContentLoaded", function () {
  // Sample task data
  const tasks = [
    { day: "Monday", task: "Task 1" },
    { day: "Tuesday", task: "Task 2" },
    { day: "Wednesday", task: "Task 3" },
    { day: "Thursday", task: "Task 4" },
    { day: "Friday", task: "Task 5" },
  ];

  // Display tasks in the dashboard
  const taskList = document.getElementById("taskList");

  tasks.forEach((task) => {
    const taskItem = document.createElement("div");
    taskItem.className = "task-item";
    taskItem.innerHTML = `<strong>${task.day}:</strong> ${task.task}`;
    taskList.appendChild(taskItem);
  });
  window.toggleSidebar = function () {
    const sidebar = document.querySelector(".sidebar");
    const content = document.querySelector(".content");
    sidebar.classList.toggle("active");
    content.classList.toggle("active");
  };
});
