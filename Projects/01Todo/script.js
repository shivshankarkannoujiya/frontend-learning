/*
1.  As soon as our page load first time
2. read task from localStorage
3. Store inside array 
4. Call our method `renderTasks` In a loop.
5. So that we can pass tasks one by one and it can just display it for us
*/

document.addEventListener("DOMContentLoaded", () => {
  const todoInput = document.getElementById("todo-input");
  const addTaskButton = document.getElementById("add-task-btn");
  const todoList = document.getElementById("todo-list");

  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.forEach((task) => renderTask(task));

  addTaskButton.addEventListener("click", () => {
    taskText = todoInput.value.trim();
    if (taskText === "") return;

    const newTask = {
      id: Date.now(),
      text: taskText,
      completed: false,
    };

    tasks.push(newTask);
    saveTasks();
    renderTask(newTask);
    todoInput.value = ""; // clear input
    console.log(tasks);
  });

  // TODO: Read from the localStorage
  // TODO: Also render the Task to DOM

  function renderTask(task) {
    const li = document.createElement("li");
    li.setAttribute("data-id", task.id);
    if (task.completed) li.classList.add("completed");
    li.innerHTML = `
    <span>${task.text}</span>
    <button>delete</button>
    `;

    li.addEventListener("click", (e) => {
      if (e.target.tagName === "BUTTON") return;
      task.completed = !task.completed;
      li.classList.toggle("completed");
      saveTasks();
    });

    li.querySelector("button").addEventListener("click", (e) => {
      //TODO: prevent event bubbling (prevent toggle from firing)
      e.stopPropagation();
      tasks = tasks.filter((t) => t.id !== task.id);
      li.remove();
      // saveTasks(); // will also remove from the localStorage
    });

    todoList.appendChild(li);
  }

  // Till now we were pushing the `task` into `array`
  // TODO: push `tasks` array into localStorage
  function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
});
