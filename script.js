/ Simple JavaScript for form submission (You can expand this later)
document.querySelector("form").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Thank you for your message! We'll get back to you soon.");
});