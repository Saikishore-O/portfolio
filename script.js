// Smooth scroll fix (optional enhancement)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});

// Fake form submit
document.querySelector(".contact-form")
.addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Message sent successfully!");
});