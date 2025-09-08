// ========== Part 1: Event Handling & Interactive Elements ==========

// Dark/Light Mode Toggle
const themeToggle = document.getElementById("theme-toggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  themeToggle.textContent = document.body.classList.contains("dark-mode")
    ? " Light Mode"
    : " Dark Mode";
});

// Counter Game
let counter = 0;
const counterValue = document.getElementById("counter-value");

document.getElementById("increase-btn").addEventListener("click", () => {
  counter++;
  counterValue.textContent = counter;
});

document.getElementById("decrease-btn").addEventListener("click", () => {
  counter--;
  counterValue.textContent = counter;
});

document.getElementById("reset-btn").addEventListener("click", () => {
  counter = 0;
  counterValue.textContent = counter;
});

// FAQ Toggle
document.querySelectorAll(".faq-question").forEach(question => {
  question.addEventListener("click", () => {
    const answer = question.nextElementSibling;
    answer.style.display = (answer.style.display === "block") ? "none" : "block";
  });
});

// ========== Part 2: Form Validation ==========

const form = document.getElementById("signup-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let valid = true;

  // Name validation
  const name = document.getElementById("name").value.trim();
  if (name.length < 3) {
    document.getElementById("name-error").textContent = "Name must be at least 3 characters.";
    valid = false;
  } else {
    document.getElementById("name-error").textContent = "";
  }

  // Email validation
  const email = document.getElementById("email").value.trim();
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(email)) {
    document.getElementById("email-error").textContent = "Enter a valid email.";
    valid = false;
  } else {
    document.getElementById("email-error").textContent = "";
  }

  // Password validation
  const password = document.getElementById("password").value;
  if (password.length < 6) {
    document.getElementById("password-error").textContent = "Password must be at least 6 characters.";
    valid = false;
  } else {
    document.getElementById("password-error").textContent = "";
  }

  // Success Message
  if (valid) {
    document.getElementById("form-success").textContent = "Form submitted successfully ";
    form.reset();
  }
});
