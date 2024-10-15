document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('task-input');
    const addTaskBtn = document.getElementById('add-task-btn');
    const taskList = document.getElementById('task-list');

    // Function to add a new task
    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === '') return; // Prevent adding empty tasks

        const taskItem = document.createElement('li');
        taskItem.textContent = taskText;

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.classList.add('delete-btn');

        // Mark task as completed when clicked
        taskItem.addEventListener('click', () => {
            taskItem.classList.toggle('completed');
        });

        // Delete task when delete button is clicked
        deleteBtn.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent marking task as completed when deleting
            taskItem.remove();
        });

        taskItem.appendChild(deleteBtn);
        taskList.appendChild(taskItem);
        taskInput.value = ''; // Clear input after adding task
    }

    // Add task when clicking button
    addTaskBtn.addEventListener('click', addTask);

    // Add task when pressing Enter key
    taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTask();
        }
    });
});
