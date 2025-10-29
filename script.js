
const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const close = document.getElementById('close');

if (bar) {
  bar.addEventListener('click', () => {
    nav.classList.add('active');
  });
}

if (close) {
  close.addEventListener('click', () => {
    nav.classList.remove('active');
  });
}


var MainImg = document.getElementById("MainImg");
var smallimg = document.getElementsByClassName("small-img");

smallimg[0].onclick = function () {
  MainImg.src = smallimg[0].src;
}

smallimg[1].onclick = function () {
  MainImg.src = smallimg[1].src;
}


smallimg[2].onclick = function () {
  MainImg.src = smallimg[2].src;
}


smallimg[3].onclick = function () {
  MainImg.src = smallimg[3].src;
}

function showError(id, message) {
  const el = document.getElementById(id);
  if (!el) return;
  el.textContent = message || "";
  if (message) {
    el.classList.remove("success");
    el.classList.add("error");
  } else {
    el.classList.remove("error");
  }
}

function showSuccess(id, message) {
  const el = document.getElementById(id);
  if (!el) return;
  el.textContent = message || "";
  if (message) {
    el.classList.remove("error");
    el.classList.add("success");
  } else {
    el.classList.remove("success");
  }
}

function clearAllMessages() {
  showError("emailError", "");
  showError("passwordError", "");
  showSuccess("generalMsg", "");
}

function loginUser() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  const gmailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
  if (!gmailPattern.test(username)) {
    alert("Please enter a valid Gmail address!");
    return;
  }

  if (password.length < 6) {
    alert("Password must be at least 6 characters long!");
    return;
  }

  localStorage.setItem("isLoggedIn", "true");
  localStorage.setItem("username", username);

  window.location.href = "home.html";
}

window.addEventListener("DOMContentLoaded", () => {
  const page = window.location.pathname.split("/").pop();
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  if (page === "home.html" && isLoggedIn !== "true") {
    window.location.href = "index.html";
  }
});

function logoutUser() {
  localStorage.removeItem("isLoggedIn");
  localStorage.removeItem("username");
  window.location.href = "index.html";
}
