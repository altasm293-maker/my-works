document.addEventListener("DOMContentLoaded", function () {

    const cards = document.querySelectorAll(".project-card");

    cards.forEach(function (card, index) {

        card.style.opacity = "0";
        card.style.transform = "translateY(20px)";

        setTimeout(function () {

            card.style.transition = "all 0.6s ease";
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";

        }, index * 150);

    });

});

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        const subject = encodeURIComponent("New Portfolio Message");

        const body = encodeURIComponent(
            "Name: " + name +
            "\nEmail: " + email +
            "\nMessage: " + message
        );

        window.location.href =
            "mailto:altasm293@example.com?subject=" +
            subject + "&body=" + body;

    });

}