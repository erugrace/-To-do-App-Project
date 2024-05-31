const inputBox = document.getElementById("inputBox");
const listContainer = document.getElementById("listContainer");
const all = document.getElementById("all");
const completed = document.getElementById("completed");
const active = document.getElementById("active");

function addTask() {
  if (inputBox.value.trim() === "") {
    alert("You have to add a new Task!");
  } else {
    let li = document.createElement("li");
    let liRight = document.createElement("div");
    liRight.className = "liRight";
    let circleDiv = document.createElement("div");
    circleDiv.className = "circle";
    let newImg = document.createElement("img");
    newImg.src = "/todo-app-main/images/icon-check.svg";
    newImg.className = "newImage";
    newImg.style.display = "none";
    circleDiv.appendChild(newImg);
    let crossSpan = document.createElement("span");
    let crossImg = document.createElement("img");
    crossImg.src = "/todo-app-main/images/icon-cross.svg";
    crossImg.className = "cross";
    crossSpan.appendChild(crossImg);
    liRight.appendChild(circleDiv);
    inputBox.value =
      inputBox.value.charAt(0).toUpperCase() +
      inputBox.value.slice(1).toLowerCase();
    liRight.appendChild(document.createTextNode(inputBox.value.trim()));
    li.appendChild(liRight);
    li.appendChild(crossSpan);

    listContainer.appendChild(li);
    storeTasks();

    inputBox.value = "";
  }
}

listContainer.addEventListener(
  "click",
  (e) => {
    if (e.target.tagName === "LI" || e.target.closest("div.liRight")) {
      let li = e.target.closest("li");
      let newImg = li.querySelector(".newImage");
      newImg.style.display = "block";
      li.classList.toggle("checked");
    } else if (
      e.target.tagName === "IMG" &&
      e.target.classList.contains("cross")
    ) {
      e.target.closest("li").remove();
    }
  },
  false
);

function storeTasks() {
  const listContainer = document.getElementById("listContainer");
  const tasks = [];
  listContainer.querySelectorAll("li").forEach((task) => {
    tasks.push(task.textContent);
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
  const listContainer = document.getElementById("listContainer");
  const tasks = JSON.parse(localStorage.getItem("tasks"));

  if (tasks) {
    tasks.forEach((taskText) => {
      const task = document.createElement("li");
      let liRight = document.createElement("div");
      liRight.className = "liRight";
      let circleDiv = document.createElement("div");
      circleDiv.className = "circle";
      let newImg = document.createElement("img");
      newImg.src = "/todo-app-main/images/icon-check.svg";
      newImg.className = "newImage";
      newImg.style.display = "none";
      circleDiv.appendChild(newImg);
      let crossSpan = document.createElement("span");
      let crossImg = document.createElement("img");
      crossImg.src = "/todo-app-main/images/icon-cross.svg";
      crossImg.className = "cross";
      crossSpan.appendChild(crossImg);
      liRight.appendChild(circleDiv);
      liRight.appendChild(document.createTextNode(taskText));
      task.appendChild(liRight);
      task.appendChild(crossSpan);
  
      listContainer.appendChild(task);
    });
  }
}

document.addEventListener("DOMContentLoaded", loadTasks);

function showAllTasks() {
  const allTasks = document.querySelectorAll("li");
  completed.style.color = "hsl(235, 19%, 35%)";
  active.style.color = "hsl(235, 19%, 35%)";
  all.style.color = "hsl(220, 98%, 61%)";
  allTasks.forEach((task) => {
    task.style.display = "flex";
  });
}
function targetCheckedTasks() {
  const allTasks = document.querySelectorAll("li");
  completed.style.color = "hsl(220, 98%, 61%)";
  all.style.color = "hsl(235, 19%, 35%)";
  active.style.color = "hsl(235, 19%, 35%)";
  allTasks.forEach((task) => {
    if (task.classList.contains("checked")) {
      task.style.display = "flex";
    } else {
      task.style.display = "none";
    }
  });
}

function targetUncheckedTasks() {
  const allTasks = document.querySelectorAll("li");
  all.style.color = "hsl(235, 19%, 35%)";
  active.style.color = "hsl(220, 98%, 61%)";
  completed.style.color = "hsl(235, 19%, 35%)";
  allTasks.forEach((task) => {
    if (!task.classList.contains("checked")) {
      task.style.display = "flex";
    } else {
      task.style.display = "none";
    }
  });
}

function clearAll() {
  const allTasks = document.querySelectorAll("li");
  if (allTasks.classList.contains("checked")) {
    allTasks.remove();
  }
}
function deleteCompletedTasks() {
  const allTasks = document.querySelectorAll("li");

  allTasks.forEach((task) => {
    if (task.classList.contains("checked")) {
      task.parentElement.removeChild(task);
    }
  });
}

function navOpened() {
  const nav = document.querySelector(".nav");
  nav.style.display = "flex";
}

function navClosed() {
  const nav = document.querySelector(".nav");
  nav.style.display = "none";
}
function darkMode() {
  const typeDiv = document.getElementById("typeDiv");
  const mainContent = document.getElementById("mainContent");
  const sun = document.getElementById("sun");
  const moon = document.getElementById("moon");
  const mainImage = document.getElementById("mainImage");
  const nav = document.querySelector(".nav");
  moon.style.display = "none";
  sun.style.display = "flex";
  document.body.style.backgroundColor = " hsl(235, 21%, 11%)";
  typeDiv.style.backgroundColor = "hsl(235, 24%, 19%)";
  mainContent.style.backgroundColor = "hsl(235, 24%, 19%)";
  mainImage.src = "/todo-app-main/images/bg-desktop-dark.jpg";
  nav.style.backgroundColor = "hsl(233, 14%, 35%)";
  nav.style.color = "white";
  listContainer.style.color = "hsl(234, 39%, 85%)";
  inputBox.style.color = "hsl(234, 39%, 85%)";
}

function brightMode() {
  const typeDiv = document.getElementById("typeDiv");
  const mainContent = document.getElementById("mainContent");
  const sun = document.getElementById("sun");
  const moon = document.getElementById("moon");
  const mainImage = document.getElementById("mainImage");
  const nav = document.querySelector(".nav");
  moon.style.display = "flex";
  sun.style.display = "none";
  document.body.style.backgroundColor = "white";
  typeDiv.style.backgroundColor = "white";
  mainContent.style.backgroundColor = "white";
  mainImage.src = "/todo-app-main/images/bg-desktop-light.jpg";
  listContainer.style.color = "black";
  inputBox.style.color = "black";
  nav.style.backgroundColor = "white";
  nav.style.color = "black";
}

