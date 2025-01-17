document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll('.nav-list a');

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.forEach(nav => nav.classList.remove('active'));
            link.classList.add('active');
        });
    });
});

const discography = document.querySelectorAll(".disc-info");

discography.forEach((track) => {
    track.addEventListener("click", () => {
        track.classList.toggle("active");
    });
});

var popUpBox = document.getElementById("popUpBox");
var popUp = document.getElementById("popUp");

function openPopUp(image) {
    popUpBox.style.display = "flex";
    popUp.src = image;
};

function closePopUp() {
    popUpBox.style.display = "none";
};