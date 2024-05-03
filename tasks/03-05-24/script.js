const taskInput = document.getElementById("new-task");
const addTaskButton = document.getElementById("button-addon2");
const taskList = document.getElementById("task-list");

addTaskButton.addEventListener("click", addTask);

// Function to add a new task
function addTask() {
  // Get the value of the input field
  const task = taskInput.value;

  // Check if the input field is not empty
  if (task !== "") {
    // Create a new list item element
    const taskItem = document.createElement("li");

    const deletItem = document.createElement("button");
    deletItem.className = "btn btn-danger d-flex";
    deletItem.innerHTML = "Delete Task";

    deletItem.addEventListener("click", () => {
      taskItem.remove();
      deletItem.remove();
    });
    // Add the task text to the list item
    taskItem.textContent = task;

    taskList.append(taskItem);
    taskList.append(deletItem);

    // Clear the input field
    taskInput.value = "";
  }
}
