const button = document.querySelector(".button");
const transition = document.querySelector(".page-transition");

window.addEventListener("pageshow", () => {
    transition.classList.remove("is-active");

    const animatedElements = document.querySelectorAll(
        ".intro h1 span, .message-main, .message-secondary, .message-last, .button"
    );

    animatedElements.forEach((element) => {
        element.style.animation = "none";

        // Fuerza al navegador a aplicar el cambio
        void element.offsetWidth;

        element.style.animation = "";
    });
});

button.addEventListener("click", (event) => {
    event.preventDefault();

    transition.classList.add("is-active");

    setTimeout(() => {
        window.location.href = button.href;
    }, 800);
});