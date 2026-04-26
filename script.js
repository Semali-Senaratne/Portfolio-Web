
// MENU FUNCTION
function setupMenu() {
    const menuButton = document.getElementById("menu-button");
    const icon = menuButton.querySelector("i");
    const navLinks = document.getElementById("nav-links");

    // toggle menu
    menuButton.addEventListener("click", () => {
        navLinks.classList.toggle("show");
        icon.classList.toggle("fa-bars");
        icon.classList.toggle("fa-xmark");
    });

    // close menu when link clicked
    document.querySelectorAll("#nav-links a").forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("show");
            icon.classList.add("fa-bars");
            icon.classList.remove("fa-xmark");
        });
    });
}
document.addEventListener("DOMContentLoaded", setupMenu);
//contact form validation
const form = document.querySelector(".contact-form form");

if (form) {
    const successMsg = document.getElementById("success-message");
    const errorMsg = document.getElementById("error-message");

    form.addEventListener("submit", function(e) {
        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const subject = document.getElementById("subject").value.trim();
        const message = document.getElementById("message").value.trim();

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        successMsg.style.display = "none";
        errorMsg.style.display = "none";

        if (name === "") {
            errorMsg.innerHTML = "⚠ Please enter your name";
            errorMsg.style.display = "block";
            setTimeout(() => errorMsg.style.display = "none", 3000);
            return;
        }

        if (!emailPattern.test(email)) {
            errorMsg.innerHTML = "⚠ Please enter a valid email";
            errorMsg.style.display = "block";
            setTimeout(() => errorMsg.style.display = "none", 3000);
            return;
        }

        if (subject === "") {
            errorMsg.innerHTML = "⚠ Please enter a subject";
            errorMsg.style.display = "block";
            setTimeout(() => errorMsg.style.display = "none", 3000);
            return;
        }

        if (message.length < 10) {
            errorMsg.innerHTML = "⚠ Message must be at least 10 characters";
            errorMsg.style.display = "block";
            setTimeout(() => errorMsg.style.display = "none", 3000);
            return;
        }

        successMsg.innerHTML = "✔ Message sent successfully!";
        successMsg.style.display = "block";
        form.reset();

        setTimeout(() => {
            successMsg.style.display = "none";
        }, 3000);
    });
}