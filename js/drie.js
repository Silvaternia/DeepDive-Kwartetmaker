window.addEventListener("load", function () {
    setTimeout(function () {
        $("#namen").fadeIn();
    }, 25);
});

if (localStorage.getItem("kwartet-aantal") === null) {
    window.location.href = "index.html";
}

let aantal = localStorage.getItem("kwartet-aantal");

const aantalspan = document.getElementById("aantal-cats");
aantalspan.innerHTML = aantal;

aantal = parseInt(aantal) + 1;

for (let i = 1; i < aantal; i++) {
    const input = document.createElement(`input-${i}`);
    const inputDiv = document.getElementById("name-category");

    input.innerHTML = `
        <div class="mb-2">  
            <label for="default-input"
                class="block mb-2 text-sm font-medium text-gray-900">Kwartet ${i}</label>
            <input type="text" id="input-${i}"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
        </div>
    `;

    inputDiv.appendChild(input);
}

const gaVerderButton = document.getElementById("create-category");
gaVerderButton.addEventListener("click", function () {
    for (let i = 1; i < aantal; i++) {
        const input = document.getElementById(`input-${i}`);
        const value = input.value;

        localStorage.setItem(`kwartet-${i}`, value);
    }

    window.location.href = `vier-${aantal - 1}.html`;
});
