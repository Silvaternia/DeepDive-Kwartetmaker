// Animation start pagina

window.addEventListener("load", function () {
    setTimeout(function () {
        $("#kaarten").fadeIn();
    }, 100);
});

// -- Kies hoeveel kaarten -- \\

const achtButton = document.getElementById("kwartet-acht");
const tienButton = document.getElementById("kwartet-tien");
const twaalfButton = document.getElementById("kwartet-twaalf");

const items = { ...localStorage };

if (items !== null) {
    localStorage.clear();
}

achtButton.addEventListener("click", function () {
    localStorage.setItem("kwartet-aantal", "8");
    $("#kaarten").fadeOut();

    setTimeout(function () {
        window.location.href = "twee.html";
    }, 50);
});

tienButton.addEventListener("click", function () {
    localStorage.setItem("kwartet-aantal", "10");
    $("#kaarten").fadeOut();

    setTimeout(function () {
        window.location.href = "twee.html";
    }, 50);
});

twaalfButton.addEventListener("click", function () {
    localStorage.setItem("kwartet-aantal", "12");
    $("#kaarten").fadeOut();

    setTimeout(function () {
        window.location.href = "twee.html";
    }, 50);
});
