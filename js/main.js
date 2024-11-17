import selectCardAmount from "./Data/localStorage.js";
import generateStepLinks from "./Data/navLinks.js";

const selectGameType = () => {
    const container = document.getElementById("gameType");

    if (!container) return "";

    container.addEventListener("click", (event) => {
        const button = event.target.closest("button");
        if (!button) return;

        const id = button.id;
        const type = id.replace("kwartet-", "");
        console.log(type);

        if (type !== "classic" && type !== "detailed") return;

        localStorage.setItem("game-type", type);
        document.location.href = "./kwartetInfo.html";

    });
};


document.addEventListener("DOMContentLoaded", () => {
    generateStepLinks();
    selectCardAmount();
    selectGameType();
});
