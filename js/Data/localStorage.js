const selectContainer = document.getElementById("selectCardAmount");


// Choose the amount of cards you want 
const selectCardAmount = () => {
    selectContainer.addEventListener("click", (event) => {
        const id = event.target.closest("button").id;
        if (!id) return;

        const amount = parseInt(id.replace("kwartet-", ""), 10);
        console.log("amount");

        // if (!isNaN(amount)) {
        //     if (localStorage.getItem("kwartet-aantal")) {
        //         localStorage.removeItem("kwartet-aantal");
        //     } else {
        //         localStorage.setItem("kwartet-aantal", amount);
        //         console.log(amount);
        //     }
        // }

    });
};

export default selectCardAmount();

