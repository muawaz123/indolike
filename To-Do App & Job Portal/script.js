document.getElementById("addTask").addEventListener("click", function() {
    let taskInput = document.getElementById("taskInput");
    let taskList = document.getElementById("taskList");
    if (taskInput.value.trim() !== "") {
        let li = document.createElement("li");
        li.textContent = taskInput.value;
        let removeBtn = document.createElement("button");
        removeBtn.textContent = "Remove";
        removeBtn.style.marginLeft = "10px";
        removeBtn.addEventListener("click", function() {
            li.remove();
        });
        li.appendChild(removeBtn);
        taskList.appendChild(li);
        taskInput.value = "";
    }
});

document.querySelectorAll(".apply-btn").forEach(button => {
    button.addEventListener("click", function() {
        alert("Your application has been submitted successfully!");
    });
});