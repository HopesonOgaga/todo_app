//dom elements
const todo_form = document.getElementById("todo-form");
const text_input = document.getElementById("text-input");
const remaining_task = document.getElementById("remaining-id");
const completed_task = document.getElementById("completed-id");
const total_task = document.getElementById("total-id");
const main_form = document.getElementById("main-form");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
// collect and submit user information
todo_form.addEventListener("submit", function (e) {
  e.preventDefault();
  let input_value = text_input.value;
  if (input_value === "") {
    return;
  }
  // take date from object
  const task = {
    id: new Date().getTime(),
    name: input_value,
    is_completed: false,
  };
  console.log(task);
  // push data
  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));

  todo_form.reset();
  text_input.focus();
  create_task(task);
});
// create html plate
function create_task(task) {
  const task_el = document.createElement("li");

  task_el.setAttribute("id", task.id);

  if (task.is_completed === true) {
    task_el.classList.add("completed");
  }

  const make_up = `
  
  <ul class="w-full h-full flex justify-center list-none">
  <li class="todo-list flex justify-between bg-white md:w-3/6 w-full h-24 rounded-md shadow-lg py-7">
    <div class="ml-3">
      <input type="checkbox" name="task" id="${task.id}" ${task.is_completed ? "checked" : ""} 
        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"> 
      <span ${!task.is_completed ? "contenteditable" : ""} 
        class="pl-3 text-xl font-semibold capitalize text-gray-300 rounded-md shadow-sm bg-sky-100">${task.name}</span>
    </div>
    <button class="w-4 h-4 py-2 mr-4" title="remove ${task.name} task" id="remove-task">
      <img src="./images/icon-cross.svg" alt="" srcset="">
    </button>
  </li>
</ul>

`;

  task_el.innerHTML = make_up;
  main_form.appendChild(task_el);
}
