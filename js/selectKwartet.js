// Animation start pagina - Gonna rework this animation

// window.addEventListener("load", function () {
//     setTimeout(function () {
//     $("#kaarten").fadeIn();
//     }, 100);
// });

// Choose the amount of cards you want 
const selectContainer = document.getElementById("select-amount");
selectContainer.addEventListener("click", (event) => {
    const id = event.target.closest("button").id;
    if (!id) return;

    const amount = parseInt(id.replace("kwartet-", ""), 10);

    if (!isNaN(amount)) {
        if (localStorage.getItem("kwartet-aantal")) {
            localStorage.removeItem("kwartet-aantal");
        } else {
            localStorage.setItem("kwartet-aantal", amount);
            console.log(amount);
        }
    }

});

// I am keeping this since they added an fade animation and I will rework that
// achtButton.addEventListener("click", function () {
//     localStorage.setItem("kwartet-aantal", "8");
//     $("#kaarten").fadeOut();

//     setTimeout(function () {
//         window.location.href = "twee.html";
//     }, 50);
// });

// tienButton.addEventListener("click", function () {
//     localStorage.setItem("kwartet-aantal", "10");
//     $("#kaarten").fadeOut();

//     setTimeout(function () {
//         window.location.href = "twee.html";
//     }, 50);
// });

// twaalfButton.addEventListener("click", function () {
//     localStorage.setItem("kwartet-aantal", "12");
//     $("#kaarten").fadeOut();

//     setTimeout(function () {
//         window.location.href = "twee.html";
//     }, 50);
// });
