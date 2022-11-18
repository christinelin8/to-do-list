window.addEventListener('load', () => {
    const form = document.querySelector("#new-task-form");
    const input = document.querySelector("#new-task-input");
    const todos = document.querySelector("#tasks");

    form.addEventListener('submit', (e) => {
        e.preventDefault();  //prevents the page from refreshing every time we add a task

        const task = input.value;

        if (!task) {
            alert("Please add a task!");
            return;
        }

        const todo_item = document.createElement("div");
        todo_item.classList.add("task");

        const todo_content_item = document.createElement("div");
        todo_content_item.classList.add("content");

        todo_item.appendChild(todo_content_item);

        const todo_input_item = document.createElement("input");
        todo_input_item.classList.add("text");
        todo_input_item.type = "text";
        todo_input_item.value = task;
        todo_input_item.setAttribute("readonly", "readonly");

        todo_content_item.appendChild(todo_input_item);

        const todo_actions_item = document.createElement("div");
        todo_actions_item.classList.add("actions");

        const todo_edit_item = document.createElement("button");
        todo_edit_item.classList.add("edit");
        todo_edit_item.innerHTML = "Edit";

        const todo_delete_item = document.createElement("button");
        todo_delete_item.classList.add("delete");
        todo_delete_item.innerHTML = "Delete";

        todo_actions_item.appendChild(todo_edit_item);
        todo_actions_item.appendChild(todo_delete_item);

        todo_item.appendChild(todo_actions_item);

        todos.appendChild(todo_item);

        input.value = "";

        //putting edit and delete functionality

        todo_edit_item.addEventListener('click', () => {
            if(todo_edit_item.innerText.toLowerCase() == "edit") {
                todo_input_item.removeAttribute("readonly");
                todo_input_item.focus();
                todo_edit_item.innerText = "Save";
            } else {
                todo_input_item.setAttribute("readonly", "readonly");
                task_edit_item.innerText = "Edit";
            }
        });

        todo_delete_item.addEventListener('click', () => {
            todos.removeChild(todo_item);
        });
    })
})