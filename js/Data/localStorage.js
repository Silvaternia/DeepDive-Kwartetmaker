const selectCardAmount = () => {
    const selectContainer = document.getElementById("selectCardAmount");

    if (!selectContainer) return;

    selectContainer.addEventListener("click", (event) => {
        const button = event.target.closest("button");
        if (!button) return;

        const id = button.id;
        const amount = parseInt(id.replace("kwartet-", ""), 10);

        if (amount !== 8 && amount !== 10 && amount !== 12) return;

        localStorage.setItem("kwartet-aantal", amount);
        document.location.href = "./kwartetType.html";
    });
};

export default selectCardAmount;