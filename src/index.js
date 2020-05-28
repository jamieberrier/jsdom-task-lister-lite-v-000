document.addEventListener("DOMContentLoaded", () => {
  // your code here
  document.querySelector("#create-task-form").addEventListener("submit", function(event) {
    const tasks = document.getElementById("tasks");
    let newTask = document.createElement('li');
    newTask.textContent = document.getElementById('new-task-description').value;
    //document.getElementById('new-task-due-date').value
    tasks.appendChild(newTask);
    event.preventDefault();
  }, false);
});
