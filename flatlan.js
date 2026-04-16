
const toggleBtn = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

toggleBtn.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});










const form = document.getElementById("contact-form");
const messageBox = document.getElementById("success-message");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = form.user_name.value.trim();
  const email = form.user_email.value.trim();
  const subject = form.subject.value.trim();
  const message = form.message.value.trim();

  if (!name || !email || !subject || !message) {
    messageBox.style.color = "red";
    messageBox.innerText = "Please fill all fields.";
    return;
  }

  // Simulate sending
  messageBox.style.color = "lightgreen";
  messageBox.innerText = "Sending...";

  setTimeout(() => {
    messageBox.innerText = "✅ Message sent successfully!";
    form.reset();
  }, 1200);
});







const modal = document.getElementById("quoteModal");
const btn = document.getElementById("quoteBtn");
const closeBtn = document.querySelector(".close");

btn.onclick = function () {
  modal.style.display = "block";
};

closeBtn.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (e) {
  if (e.target == modal) {
    modal.style.display = "none";
  }
};

document.getElementById("quoteForm").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Quote request sent! We will contact you soon.");
  modal.style.display = "none";
  this.reset();
});

























// Smooth hover effect + simple console message
document.addEventListener("DOMContentLoaded", function () {
  console.log("Flatland Diesel website loaded 🚛");

  const links = document.querySelectorAll(".social-links a");

  links.forEach(link => {
    link.addEventListener("mouseenter", () => {
      link.style.transform = "scale(1.1)";
    });

    link.addEventListener("mouseleave", () => {
      link.style.transform = "scale(1)";
    });
  });
});

















document.querySelectorAll("#servicesetmd .card").forEach(card => {
  card.addEventListener("click", () => {
    card.style.transform = "scale(0.96)";
    setTimeout(() => {
      card.style.transform = "";
    }, 120);
  });
});