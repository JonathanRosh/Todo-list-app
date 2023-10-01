const tasksList = document.querySelectorAll("ul");

if (tasksList.length > 0) {
  const tasks = document.querySelectorAll("li");
  tasks.forEach((task) => {
    task.addEventListener("click", (e) => {
      task.classList.toggle("done");
      const icon = task.querySelector(".check-icon");
      icon.classList.toggle("hidden");
    });
  });
}
