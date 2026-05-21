// Simple frontend contact form feedback (replace with WordPress form plugin for production)
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      // Demo: Just show a thank-you animation. Replace/augment as needed.
      document.getElementById("form-message").textContent = "Thank you for contacting us! We'll reach out soon.";
      form.reset();
      setTimeout(() => {
        document.getElementById("form-message").textContent = "";
      }, 4000);
    });
  }
});