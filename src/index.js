document.addEventListener("DOMContentLoaded", () => {
  // your code here
  document.querySelector("#create-task-form").addEventListener("submit", function(event) {
    const tasks = document.getElementById("tasks");
    let newTask = document.createElement('li');
    newTask.textContent = document.getElementById('new-task-description').value;

    tasks.appendChild(newTask);
    event.preventDefault();
  }, false);
});
