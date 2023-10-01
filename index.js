import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
var taskArrayToday = [];
var taskArrayWork = [];
var title = "";

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  title = "Today";
  res.render("index.ejs", { listTitle: title, taskArray: taskArrayToday });
});

app.post("/submit", (req, res) => {
  const newTask = req.body.newTask;
  const taskObj = { listTitle: title };
  if (title === "Today") {
    pushNewTask(newTask, taskArrayToday);
    taskObj.taskArray = taskArrayToday;
  } else {
    pushNewTask(newTask, taskArrayWork);
    taskObj.taskArray = taskArrayWork;
  }
  res.render("index.ejs", taskObj);
});

app.post("/", (req, res) => {
  taskArrayToday = [];
  res.render("index.ejs", { listTitle: title });
});

app.get("/work", (req, res) => {
  title = "Work";
  res.render("index.ejs", { listTitle: title, taskArray: taskArrayWork });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

function pushNewTask(task, array) {
  if (array.length === 0 || (task && task !== array[array.length - 1][1])) {
    array.push([array.length, task]);
  }
}
