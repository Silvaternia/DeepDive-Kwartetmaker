window.addEventListener("load", function () {
    setTimeout(function () {
        $("#soorten").fadeIn();
    }, 25);
});

// -- Kies een soort spel -- \\

if (localStorage.getItem("kwartet-aantal") === null) {
    window.location.href = "index.html";
}

const classicButton = document.getElementById("kwartet-classic");
const detailedButton = document.getElementById("kwartet-detailed");

classicButton.addEventListener("click", function () {
    localStorage.setItem("kwartet-type", "classic");
    $("#soorten").fadeOut();

    setTimeout(function () {
        window.location.href = "drie.html";
    }, 50);
});
detailedButton.addEventListener("click", function () {
    localStorage.setItem("kwartet-type", "detailed");
    $("#soorten").fadeOut();

    setTimeout(function () {
        window.location.href = "drie.html";
    }, 50);
});
